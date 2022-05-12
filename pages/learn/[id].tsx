import React from "react";
import { carsService } from "../../public/services/carsService";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { CarItemComp } from "../../src/components/CarItemComp";

export default function Learn(props: { id: string }) {
  const id = props?.id;
  return (
    <div>
      <div className="nav-link">
        <Link href="/">
          <a className="backward-link">Go Back</a>
        </Link>
      </div>
      <div className="sub-container">
        <CarItemComp id={id} />
      </div>
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
