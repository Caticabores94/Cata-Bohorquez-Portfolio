"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export type ReviewItem = {
  badge: "stars" | "quote";
  quote: string;
  name: string;
  role: string;
  initials: string;
  size?: "medium" | "large";
};

export default function ReviewsCarousel({ reviews }: { reviews: readonly ReviewItem[] }) {
  const reviewCount = reviews.length;
  const repeatedReviews = [...reviews, ...reviews, ...reviews];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const recenterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function normalizeIndex(index: number) {
    return ((index % reviewCount) + reviewCount) % reviewCount;
  }

  function getTargetLeft(card: HTMLElement) {
    const track = trackRef.current;

    if (!track) {
      return 0;
    }

    return card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
  }

  function scrollToPhysical(index: number, behavior: ScrollBehavior = "smooth") {
    const track = trackRef.current;
    const card = cardRefs.current[index];

    if (!track || !card) {
      return;
    }

    track.scrollTo({
      left: getTargetLeft(card),
      behavior,
    });
    setActiveIndex(normalizeIndex(index));
  }

  function scrollToIndex(index: number) {
    scrollToPhysical(reviewCount + normalizeIndex(index));
  }

  useEffect(() => {
    const track = trackRef.current;
    const card = cardRefs.current[reviewCount];

    if (!track || !card) {
      return;
    }

    track.scrollLeft = getTargetLeft(card);
  }, [reviewCount]);

  function recenterIfNeeded(index: number) {
    if (recenterTimeoutRef.current) {
      clearTimeout(recenterTimeoutRef.current);
    }

    recenterTimeoutRef.current = setTimeout(() => {
      if (index < reviewCount) {
        scrollToPhysical(index + reviewCount, "auto");
        return;
      }

      if (index >= reviewCount * 2) {
        scrollToPhysical(index - reviewCount, "auto");
      }
    }, 220);
  }

  useEffect(() => {
    return () => {
      if (recenterTimeoutRef.current) {
        clearTimeout(recenterTimeoutRef.current);
      }
    };
  }, []);

  function handleScroll() {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const children = Array.from(track.children) as HTMLElement[];
    const center = track.scrollLeft + track.clientWidth / 2;

    let nearestIndex = reviewCount;
    let nearestDistance = Number.POSITIVE_INFINITY;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(childCenter - center);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(normalizeIndex(nearestIndex));
    recenterIfNeeded(nearestIndex);
  }

  return (
    <div className={styles.reviewsCarousel}>
      <div className={styles.reviewsControls}>
        <button
          aria-label="Previous review"
          className={styles.reviewsArrow}
          onClick={() => scrollToIndex(activeIndex - 1)}
          type="button"
        >
          ←
        </button>
        <div className={styles.reviewsDots}>
          {reviews.map((review, index) => (
            <button
              aria-label={`Go to review ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={index === activeIndex ? styles.reviewsDotActive : styles.reviewsDot}
              key={review.name}
              onClick={() => scrollToIndex(index)}
              type="button"
            />
          ))}
        </div>
        <button
          aria-label="Next review"
          className={styles.reviewsArrow}
          onClick={() => scrollToIndex(activeIndex + 1)}
          type="button"
        >
          →
        </button>
      </div>

      <div className={styles.reviewsTrack} onScroll={handleScroll} ref={trackRef}>
        {repeatedReviews.map((review, index) => (
          <article
            className={`${styles.reviewCard} ${
              review.size === "large" ? styles.reviewCardLarge : styles.reviewCardMedium
            }`}
            key={`${review.name}-${index}`}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
          >
            {review.badge === "stars" ? (
              <div className={styles.reviewStars} aria-hidden="true">
                ★★★★★
              </div>
            ) : (
              <div className={styles.reviewQuoteBadge} aria-hidden="true">
                “”
              </div>
            )}
            <p className={styles.reviewQuote}>{review.quote}</p>
            <div className={styles.reviewPerson}>
              <span className={styles.reviewAvatar}>{review.initials}</span>
              <div>
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
