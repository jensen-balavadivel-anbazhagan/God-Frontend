import React from "react";
import { NavBar } from "../components/NavBar";
import Image from "next/image";
import { Car } from "../types/Car";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function CarListComp({ car, itemId }: { car: Car; itemId: string }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      role="button"
      style={{
        display: "inline-block",
        margin: "0 10px",
        width: "360px",
      }}
      className="card"
    >
      <div >
      <h3 className="h3-grey" style={{maxHeight: "6px", marginBottom:"0"}}>{car.bodyType}</h3>
      <div className="details-container"><h2 className="flex-child">{car.modelName}</h2>
      <h3 className="h3-grey flex-child" style={{
        alignSelf: "center"
      }}>{car.modelType}</h3></div>
       
      <Image src={car.imageUrl} alt = {car.modelName}
      width={500}
      height={500}/>
        <NavBar id={car.id}/>
      </div>
    </div>
  );
}
