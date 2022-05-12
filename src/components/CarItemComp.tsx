import React, { useEffect, useState } from "react";
import Image from "next/image";
import { carsService } from "../../public/services/carsService";

export function CarItemComp(props: { id: string }) {

  const id = props?.id;
  const[car, setCar] = useState<any| null>(null);
  useEffect(() => {
    var data = carsService.getById(id)
    setCar(carsService.getById(id));
}, []);

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
{car ?  
      <div >
        <div className="details-container"><h3> Body Type: </h3>&nbsp;<h3 className="h3-grey">{car.bodyType}</h3> </div>
        <div className="details-container"><h3> Model Name: </h3>&nbsp;<h3 className="h3-grey">{car.modelName}</h3> </div>
        <div className="details-container"><h3> Model Type: </h3>&nbsp;<h3 className="h3-grey">{car.modelType}</h3> </div>

      <Image src={car.imageUrl} alt = {car.modelName}
      width='1000'
      height='1000'/>
     
      </div> :
                        <h1>Unexpected error occured!</h1>
                    }
    </div>
  );
}
