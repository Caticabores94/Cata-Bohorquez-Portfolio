import AVFoundation
import Foundation

enum OptimizeVideoError: Error, CustomStringConvertible {
  case invalidArguments
  case unsupportedPreset
  case unsupportedFileType
  case unknownPreset(String)
  case exportFailed(String)

  var description: String {
    switch self {
    case .invalidArguments:
      return "Usage: swift scripts/optimize-video.swift <input> <output> [low|540p|720p]"
    case .unsupportedPreset:
      return "Could not create an export session with the requested preset."
    case .unsupportedFileType:
      return "The export session does not support .mp4 or .m4v output."
    case let .unknownPreset(name):
      return "Unknown preset '\(name)'. Use low, 540p or 720p."
    case let .exportFailed(message):
      return "Video export failed: \(message)"
    }
  }
}

func optimizeVideo() throws {
  let args = CommandLine.arguments

  guard (3...4).contains(args.count) else {
    throw OptimizeVideoError.invalidArguments
  }

  let inputURL = URL(fileURLWithPath: args[1])
  let outputURL = URL(fileURLWithPath: args[2])
  let asset = AVURLAsset(url: inputURL)
  let presetArgument = args.count == 4 ? args[3] : "720p"
  let presetName: String

  switch presetArgument {
  case "low":
    presetName = AVAssetExportPresetLowQuality
  case "540p":
    presetName = AVAssetExportPreset960x540
  case "720p":
    presetName = AVAssetExportPreset1280x720
  default:
    throw OptimizeVideoError.unknownPreset(presetArgument)
  }

  guard let exporter = AVAssetExportSession(
    asset: asset,
    presetName: presetName
  ) else {
    throw OptimizeVideoError.unsupportedPreset
  }

  let fileType: AVFileType

  if exporter.supportedFileTypes.contains(.mp4) {
    fileType = .mp4
  } else if exporter.supportedFileTypes.contains(.m4v) {
    fileType = .m4v
  } else {
    throw OptimizeVideoError.unsupportedFileType
  }

  let fileManager = FileManager.default
  try? fileManager.removeItem(at: outputURL)
  try fileManager.createDirectory(
    at: outputURL.deletingLastPathComponent(),
    withIntermediateDirectories: true
  )

  exporter.outputURL = outputURL
  exporter.outputFileType = fileType
  exporter.shouldOptimizeForNetworkUse = true

  let semaphore = DispatchSemaphore(value: 0)
  exporter.exportAsynchronously {
    semaphore.signal()
  }
  semaphore.wait()

  if exporter.status != .completed {
    throw OptimizeVideoError.exportFailed(exporter.error?.localizedDescription ?? "Unknown error")
  }

  let sourceValues = try inputURL.resourceValues(forKeys: [.fileSizeKey])
  let outputValues = try outputURL.resourceValues(forKeys: [.fileSizeKey])
  let durationSeconds = CMTimeGetSeconds(asset.duration)

  let sourceSize = Double(sourceValues.fileSize ?? 0) / 1_048_576
  let outputSize = Double(outputValues.fileSize ?? 0) / 1_048_576

  print("Optimized \(inputURL.lastPathComponent) -> \(outputURL.lastPathComponent)")
  print(String(format: "Duration: %.2f s", durationSeconds))
  print("Preset: \(presetArgument)")
  print(String(format: "Source: %.2f MB", sourceSize))
  print(String(format: "Output: %.2f MB", outputSize))
}

do {
  try optimizeVideo()
} catch {
  fputs("\(error)\n", stderr)
  exit(1)
}
