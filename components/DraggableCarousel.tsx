"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { cx } from "@/lib/utils";

type DraggableCarouselProps = {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  itemCount: number;
  ariaLabel: string;
  previousLabel: string;
  nextLabel: string;
};

type DragState = {
  pointerId: number;
  startX: number;
  scrollLeft: number;
};

export function DraggableCarousel({
  children,
  className,
  trackClassName,
  itemCount,
  ariaLabel,
  previousLabel,
  nextLabel,
}: DraggableCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const draggedRef = useRef(false);
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);

  const updateActive = () => {
    const track = trackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-carousel-card]"),
    );
    const nearest = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: active, distance: Number.POSITIVE_INFINITY },
    );

    setActive(nearest.index);
  };

  const scrollToItem = (index: number) => {
    const safeIndex = Math.max(0, Math.min(index, itemCount - 1));
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(
      `[data-carousel-card="${safeIndex}"]`,
    );

    if (!track || !card) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    setActive(safeIndex);
  };

  const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const drag = dragRef.current;
    if (!track || !drag || drag.pointerId !== event.pointerId) return;

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    dragRef.current = null;
    setDragging(false);
    updateActive();
  };

  return (
    <div
      className={cx("drag-carousel", className)}
      aria-label={ariaLabel}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollToItem(active - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollToItem(active + 1);
        }
      }}
    >
      <div
        className={cx(
          "drag-carousel__track",
          dragging && "drag-carousel__track--dragging",
          trackClassName,
        )}
        ref={trackRef}
        tabIndex={0}
        onScroll={updateActive}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse" || event.button !== 0) return;
          if ((event.target as HTMLElement).closest("a, button")) return;

          const track = trackRef.current;
          if (!track) return;

          dragRef.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            scrollLeft: track.scrollLeft,
          };
          draggedRef.current = false;
          track.setPointerCapture(event.pointerId);
          setDragging(true);
        }}
        onPointerMove={(event) => {
          const track = trackRef.current;
          const drag = dragRef.current;
          if (!track || !drag || drag.pointerId !== event.pointerId) return;

          const distance = event.clientX - drag.startX;
          if (Math.abs(distance) > 6) draggedRef.current = true;
          track.scrollLeft = drag.scrollLeft - distance;
        }}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onClickCapture={(event) => {
          if (!draggedRef.current) return;
          event.preventDefault();
          event.stopPropagation();
          draggedRef.current = false;
        }}
      >
        {children}
      </div>

      <div className="drag-carousel__controls">
        <button
          type="button"
          aria-label={previousLabel}
          onClick={() => scrollToItem(active - 1)}
          disabled={active === 0}
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <div className="drag-carousel__dots" aria-hidden="true">
          {Array.from({ length: itemCount }, (_, index) => (
            <span
              key={index}
              className={index === active ? "is-active" : undefined}
            />
          ))}
        </div>

        <span className="drag-carousel__status" aria-live="polite">
          {active + 1} / {itemCount}
        </span>

        <button
          type="button"
          aria-label={nextLabel}
          onClick={() => scrollToItem(active + 1)}
          disabled={active === itemCount - 1}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
