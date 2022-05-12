import Image from "next/image";
import React from "react";

import {
  getItemsPos,
  slidingWindow,
  VisibilityContext
} from "react-horizontal-scrolling-menu";

function Arrow({
  children,
  disabled,
  onClick
}: {
  children: string;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        opacity: disabled ? "0" : "1",
      }}
    >
      <Image src={children} alt = {children}
      width={35}
      height={35}/>
      
    </div>
  );
}

export function LeftArrow() {
  const {
    getItemById,
    isFirstItemVisible,
    items,
    scrollToItem,
    visibleItems,
    visibleItemsWithoutSeparators,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  const prevGroupItems = slidingWindow(
    items.toItemsKeys(),
    visibleItems
  ).prev();
  const { center } = getItemsPos(prevGroupItems);
  const scrollPrevCentered = () =>
    scrollToItem(getItemById(center), "smooth", "center");

  console.log({ prevGroupItems, center });
  return (
    <Arrow disabled={disabled} onClick={scrollPrevCentered}>
      /images/chevron-circled-left.svg
    </Arrow>
  );
}

export function RightArrow() {
  const {
    getItemById,
    isLastItemVisible,
    items,
    scrollToItem,
    visibleItems,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  const nextGroupItems = slidingWindow(
    items.toItemsKeys(),
    visibleItems
  ).next();
  const { center } = getItemsPos(nextGroupItems);
  const scrollNextCentered = () =>
    scrollToItem(getItemById(center), "smooth", "center");

  return (
    <Arrow disabled={disabled} onClick={scrollNextCentered}>
      /images/chevron-circled-right.svg
    </Arrow>
  );
}
