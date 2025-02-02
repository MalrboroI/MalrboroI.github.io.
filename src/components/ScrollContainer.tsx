import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import debounce from "lodash.debounce";
import CardList from "./CardList";
import "bootstrap";

export default function ScrollContainer() {
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const containerRef = useRef<HTMLUListElement>(null);

  const checkForScrollPosition = () => {
    const { current } = containerRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

  const scrollContainerBy = (distance: number) =>
    containerRef.current?.scrollBy({ left: distance, behavior: "smooth" });

  useEffect(() => {
    const { current } = containerRef;
    checkForScrollPosition();
    current?.addEventListener("scroll", debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, []);

  return (
    <div className="scrollContainer">
      <h2 className="d-flex justify-content-center">ХИТЫ</h2>
      <ul className="list" ref={containerRef}>
        <CardList />
      </ul>
      <button
        type="button"
        disabled={!canScrollLeft}
        onClick={() => scrollContainerBy(-400)}
        className={cn("button", "buttonLeft", {
          "button--hidden": !canScrollLeft,
        })}
      >
        ←
      </button>
      <button
        type="button"
        disabled={!canScrollRight}
        onClick={() => scrollContainerBy(400)}
        className={cn("button", "buttonRight", {
          "button--hidden": !canScrollRight,
        })}
      >
        →
      </button>
      {canScrollLeft ? (
        <div className="shadowWrapper leftShadowWrapper">
          <div className="shadow leftShadow" />
        </div>
      ) : null}
      {canScrollRight ? (
        <div className="shadowWrapper rightShadowWrapper">
          <div className="shadow rightShadow" />
        </div>
      ) : null}
    </div>
  );
}
