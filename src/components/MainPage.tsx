import  React, { useEffect, useState } from "react";
import { Car } from "../types/Car";
import { getItemsPos, ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import {CarListComp} from "./CarListComp"


type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function MainPage(props: { cars: Array<Car> }) {
  const cars = props?.cars;

const centerOnInit = ({
  getItemById,
  scrollToItem,
  visibleItems
}: scrollVisibilityApiType) => {
  const { center: centerItemKey } = getItemsPos(visibleItems);
  scrollToItem(getItemById(centerItemKey), "auto", "center");
};

  return   (
  <div className="main-container">
    <div>
     <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onInit={centerOnInit}
          >
  {cars && cars.map((car,index) =>
   <CarListComp
   car={car}
   itemId={car.id} 
   key={index}
 />
 )}
 </ScrollMenu>
   {cars && !cars.length &&
                        <h1>No Cars to display!</h1>
                    }
      </div>
      </div>
)};

export default MainPage;