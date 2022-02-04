/* 
  Child elements should have the CSS property scroll-snap-align: start;
  for a better user experience!
*/
import { memo, useState, useEffect, useRef, FC, PropsWithChildren } from "react";

import { ItemsContainer, ButtonNext, ButtonPrev, Container } from "./Carousel.styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  children: any;
}

const Carousel: FC<PropsWithChildren<CarouselProps>> = ({ children, ...props }) => {
  const itemsRef = useRef<HTMLDivElement | null>(null);
  const [scrollableDirections, setScrollableDirections] = useState({
    left: false,
    right: true,
  });

  // Next button click
  const handleNextClick = () => {
    if (!itemsRef.current) return;

    const { current } = itemsRef;
    const { scrollLeft, offsetWidth } = current;

    current.scrollTo({
      left: scrollLeft + offsetWidth,
      behavior: "smooth",
    });
  };

  // Prev button click
  const handlePrevClick = () => {
    if (!itemsRef.current) return;

    const { current } = itemsRef;
    const { scrollLeft, offsetWidth } = current;

    current.scrollTo({
      left: scrollLeft - offsetWidth,
      behavior: "smooth",
    });
  };

  // Update scrollable directions
  const onScroll = () => {
    const { current } = itemsRef;
    if (!current) return;

    const { scrollLeft, scrollWidth, offsetWidth } = current;

    const computedDirections = {
      left: scrollLeft > 1,
      right: scrollLeft < scrollWidth - offsetWidth,
    };

    const shouldUpdateState =
      computedDirections.left !== scrollableDirections.left ||
      computedDirections.right !== scrollableDirections.right;

    if (shouldUpdateState) {
      setScrollableDirections(computedDirections);
    }
  };

  // Restore scroll position on mount
  useEffect(() => {
    if (!itemsRef.current) return;

    itemsRef.current.scrollTo({
      left: 0,
    });
  }, [itemsRef]);

  const { current } = itemsRef;
  const { scrollWidth, offsetWidth } = (current as HTMLDivElement) || {};
  const isOverflowing = !current || scrollWidth > offsetWidth;

  return (
    <Container>
      <ItemsContainer ref={itemsRef} onScroll={onScroll} {...props}>
        {children}
      </ItemsContainer>

      <ButtonPrev hidden={!scrollableDirections.left} onClick={handlePrevClick}>
        <FaChevronLeft size="20" />
      </ButtonPrev>

      <ButtonNext hidden={!scrollableDirections.right || !isOverflowing} onClick={handleNextClick}>
        <FaChevronRight size="20" />
      </ButtonNext>
    </Container>
  );
};

export default memo(Carousel);
