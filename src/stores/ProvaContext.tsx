//import { createContext } from "react";

//export const ProvaContext = createContext({});

import { createContext } from "react";

type ProvaContextType = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

// Dai un valore di default coerente!
export const ProvaContext = createContext<ProvaContextType | undefined>(undefined )
