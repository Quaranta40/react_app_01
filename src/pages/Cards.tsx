import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store";

function Cards() {
    const cities = useSelector((state: RootState) => state.cities.value);

    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-3xl font-bold mb-10">
                Pagina con tutte le cards con link a sottopagina
            </h1>
            <div className="grid grid-cols-4 gap-5">
                {cities.map((city) => (
                    <Link to={`/card/${city.id}`} key={city.id}>
                        <CardItem
                            title={city.title}
                            imgUrl={city.imgUrl}
                            isVisited={city.isVisited}
                            children={undefined}>
                        </CardItem>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Cards;