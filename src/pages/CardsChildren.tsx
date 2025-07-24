import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";


function CardsChildren() {
    const cities = useSelector((state: any) => state.cities.value);

    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-3xl font-bold mb-10">Pagina CardsChildren</h1>
            <div className="grid grid-cols-4 gap-5">
                {cities.map((city: any) => (
                    <Link to={`/cards-children/${city.id}`} key={city.id}>  <CardItem
                        title={city.title}
                        imgUrl={city.imgUrl}
                        isVisited={city.isVisited}>
                        {city.description}
                    </CardItem>
                    </Link>
                ))}
            </div>
            <Outlet />
        </>
    )
}

export default CardsChildren;
// This component serves as a parent for nested routes, displaying a list of cards and allowing navigation