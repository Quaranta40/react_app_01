import { use } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function Card() {
    const { cardID } = useParams();
    console.log(cardID);

const cities = useSelector((state: RootState) =>
    cardID
        ? state.cities.value.filter((city) => city.id === Number(cardID))
        : []
);

console.log(cities);

return (
    <>
    <Navbar></Navbar>
    <h1 className="text-3xl font-bold">{cities[0].title}</h1>
    <div className="fex flex-col p-4">
        {cities[0].isVisited && (
            <span className="text-green-500">Città visitata</span>
        )}
        {!cities[0].isVisited && (
            <span className="text-red-500">Città non visitata</span>
        )}
        </div>
        <img
        src={cities[0].imgUrl}
        className="rounded-t-md"
        alt=""
        width="400"> </img>
    </>
)
}

export default Card;