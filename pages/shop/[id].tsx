import React, { useState } from "react";
import { carsService } from "../../public/services/carsService";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { CarItemComp } from "../../src/components/CarItemComp";
import Message from "../../src/components/Message";

export default function Shop(props: { id: string }) {
  const [showAlrt, setShowAlrt] = useState(false);
  const id = props?.id;

  function handleClose() {
      setShowAlrt(false);
  }

  function showAlert() {
    setShowAlrt(true);
  }
  return (
    <div>
      <div className="nav-link">
        <Link href="/">
          <a className="backward-link">Go Back</a>
        </Link>
      </div>
      <div className="sub-container">
        <CarItemComp id={id} />
        <button className="primary-button"
        onClick={showAlert}>Order!</button> 
      </div>
      {showAlrt && (
         <Message open={showAlrt}
         handleClose = {handleClose }
         severity= {"success"}
         content={"Ordered!"} />
      )

      }
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cars = await carsService.getAll();
  const paths = cars.map((car) => ({
    params: { id: car.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    var id = params?.id;
  return {
    props: { id: id },
  };
};
