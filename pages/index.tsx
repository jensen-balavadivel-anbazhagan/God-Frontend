import  React from "react";
import { NavBarData } from "../src/components/NavBarData";
import { Car } from "../src/types/Car";
import { carsService } from "../public/services/carsService";
import MainPage from "../src/components/MainPage";


export default function App(props: { cars: Array<Car> }) {
  return (
  <div>
    <MainPage cars={props?.cars}/>
  
</div>
)};

export async function getServerSideProps () {
  const cars = await carsService.getAll();
  return {
    props: { cars }
}
};