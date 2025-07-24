import { Link } from "react-router-dom";

function Navbar() {

    return (
        <ul className="flex gap-10 mb-10">
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/contatti'}>Contatti</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/cards'}>Cards versione 1</Link>
            </li>
            <li>
                <Link to={'/cards-childern'}>Cards versione 2</Link>
            </li>
        </ul>
    )
}

export default Navbar;

// function Navbar() {
//     const x = 1;
//     const img = "vite";

//     // Optional style if needed in future
//     // const imgStyle = {
//     //   height: x > 10 ? "300px" : "500px",
//     //   borderRadius: "100%"
//     // };

//     return (
//         <div className="bg-red-500 rounded-lg w-72 h-72 rot">
//             <nav></nav>
//             <ul>
//                 <li>
//                     <Link>Sono il children di link</Link>
//                 </li>
//                 <li>
//                     <Link>Bro</Link>
//                 </li>
//                 <li>
//                     <Link>Item 3</Link>
//                 </li>
//                 <li>
//                     <Link>Item 4</Link>
//                 </li>
//                 <li>
//                     <Link>Item 5</Link>
//                 </li>
//             </ul>
//         </div>
//     );
// }

// export default Navbar;