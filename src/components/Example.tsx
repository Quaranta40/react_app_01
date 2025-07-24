import { useContext } from "react";
import { ProvaContext } from '../stores/ProvaContext'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from '../redux/counterSlice';
import type { RootState } from '../redux/store';


function Example() {
    const count = useSelector((state: any) => state.counter.value);
    // const context = useContext(ProvaContext);
    const dispatch = useDispatch();
    

    return (
        <div>
            <p className="mb-3"> Conteggio: {count}</p>
            <button
                className="mr-3"
                aria-label="Increment value"
                onClick={() =>  dispatch(increment())}>Incrementa</button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>Decrementa</button>
        </div>
    );
}


// function Example() {
//     const context = useContext(ProvaContext);
//     if (!context) {
//         throw new Error("Example must be used within a ProvaContext.Provider");
//     }

//     const { count, setCount } = context;

//     return (
//         <div>
//             <p>Hai cliccato {count} volte</p>
//             <button onClick={() => setCount(count + 1)}>Incrementa</button>
//         </div>
//     )
// }

export default Example;


// const [count, setCount] = useState(0);
// //Definiimo un useEffect che si attiva al caricamento del componente
// useEffect(() => {
//         localStorage.setItem("count", count.toString());
//         //Aggiorniamo il titolo del documento con il numero di click
//     document.title = `Hai cliccato ${count} volte`;
//     console.log("Ciao da use effect")
// }, [count]);
// // const handleClick = () => {
// //     setCount(count + 1);
// //     document.title = `Hai cliccato ${count + 1} volte`;
// // };

