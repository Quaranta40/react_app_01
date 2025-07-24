// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Example from './components/Example';
import CardForm from './components/CardForm';
import { ProvaContext } from './stores/ProvaContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ProvaContext.Provider value={{ count, setCount }}>
      <Navbar />
      <Example />
      <CardForm />
    </ProvaContext.Provider>
  );
}

export default App;



// import React, { useState, useEffect, useReducer } from 'react';
// import './App.css';
// import Card from "./components/Card";
// import CardForm from "./components/CardForm";
// import Example from "./components/Example";
// import { ProvaContext } from "./stores/ProvaContext";
// import { useSelector } from 'react-redux';
// import type { RootState } from './redux/store';

// function App() {
//   const cities = useSelector((state: RootState) => state.cities.value);
//   const [count, setCount] = useState(0);

//   return (
//     <ProvaContext.Provider  value={{count, setCount}}>
      
//       <Example></Example>
//       <CardForm></CardForm>
//       <div className='grid grid-cols-4 gap-10'>
//         {cities.map((city: any) => (
//           <Card
//             key={city.id}
//             imgUrl={city.imgUrl}
//             title={city.title}
//             description={city.description}
//             isVisited={city.isVisited} children={undefined} >
//           </Card>
//         ))}
//       </div>

//     </ProvaContext.Provider>
//   );
// }

// export default App;

// function formReducer(state: any, action: any) {
//   switch (action.type) {
//     case "CHANGE_FIELD":
//       return { ...state, [action.field]: action.value };
//     case "RESET_FORM":
//       return { name: "", email: "" };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [items, setItems] = useState([1, 2, 3]);
//   const [user, setUsers] = useState({ name: "Antonio", age: 30 });
//   const [data, setData] = useState<any[]>([]);
//   const [formState, dispatchFormState] = useReducer(formReducer, { name: "", email: "" });

//   const aggiungiItem = () => {
//     const nuovoItem = items.length + 1;
//     setItems([...items, nuovoItem]);
//     console.log(items);
//   };

//   const updateUsername = () => {
//     const updateUser = { ...user, name: "Bob" };
//     setUsers(updateUser);
//     console.log(user);
//   };

//   const handleFieldChange = (field: string, value: string) => {
//     dispatchFormState({ type: "CHANGE_FIELD", field, value });
//   };

//   const resetForm = () => {
//     dispatchFormState({ type: "RESET_FORM" });
//   };

//   const sendForm = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Invio form con i dati:", formState);
//   };

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/")
//       .then((response) => response.json())
//       .then((json) => {
//         setData(json);
//         console.log(json);
//       })
//       .catch((error) => console.error(error));
//   }, [count]);

//   const [cities, setCities] = useState([
//     { id: 0, place: "(Japan)", title: "Tokyo", isVisited: true, description: "Lorem ipsum...", imgUrl: "https://..." },
//     { id: 1, place: "(South Corea)", title: "Seoul", isVisited: false, description: "Lorem ipsum...", imgUrl: "https://..." },
//     { id: 2, place: "(France)", title: "Marseille", isVisited: false, description: "Lorem ipsum...", imgUrl: "https://..." },
//     { id: 3, place: "(Spain)", title: "Madrid", isVisited: true, description: "Lorem ipsum...", imgUrl: "https://..." }
//   ]);

//   const addCity = (city: { id: number; place: string; title: string; isVisited: boolean; description: string; imgUrl: string }) => {
//     setCities([...cities, city]);
//   };

//   return (
//     <ProvaContext.Provider value={{ count, setCount }}>
//       <Example cities={cities} />
//       <CardForm addCity={addCity} />
//       <div className='grid grid-cols-4 gap-10'>
//         {cities.map(city => (
//           <Card
//             key={city.id}
//             imgUrl={city.imgUrl}
//             title={city.title}
//             description={city.description}
//             isVisited={city.isVisited}
//           >
//             {city.place}
//           </Card>
//         ))}
//       </div>

//       <div className="card mt-6 space-x-2">
//         <button onClick={() => setCount(c => c + 1)}>
//           count is {count}
//         </button>
//         <button onClick={aggiungiItem}>
//           conteggio Items {items.length}
//         </button>
//         <button onClick={updateUsername}>prova update nome</button>
//       </div>

//       <form onSubmit={sendForm} className='mt-6 space-y-4'>
//         <div>
//           <label htmlFor="name">Nome: </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formState.name}
//             onChange={e => handleFieldChange("name", e.target.value)}
//             style={{ backgroundColor: 'white', color: 'black' }}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email: </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formState.email}
//             onChange={e => handleFieldChange("email", e.target.value)}
//             style={{ backgroundColor: 'white', color: 'black' }}
//           />
//         </div>
//         <button type="button" onClick={resetForm}>Reset</button>
//         <button type="submit">Invia</button>
//       </form>
//     </ProvaContext.Provider>
//   );
// }


