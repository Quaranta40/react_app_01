import { createSlice } from '@reduxjs/toolkit';

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 0,
                place: "(Japan)",
                title: "Tokyo",
                isVisited: true,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, laboriosam.",
                imgUrl: "https://tse1.mm.bing.net/th?id=OIP.N-fyg4NbUSvld28fYAcjEgHaE8&pid=Api"
            },
            {
                id: 1,
                place: "(South Corea)",
                title: "Seoul",
                isVisited: false,
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, pariatur?",
                imgUrl: "https://images2.bovpg.net/fw/back/fr/sale/a26c92b3c2a1d3.jpg"
            },
            {
                id: 2,
                place: "(France)",
                title: "Marseille",
                isVisited: false,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod?",
                imgUrl: "https://leosystem.travel/wp-content/uploads/2020/01/375219625.jpg"
            },
            {
                id: 3,
                place: "(Spain)",
                title: "Madrid",
                isVisited: true,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sequi!",
                imgUrl: "https://images.musement.com/cover/0002/45/madrid-skyline-jpg_header-144925.jpeg?w=1200&h=630&q=95&fit=crop"
            }
        ]
    },
    reducers: {
        // aggiungi qui i reducer se ti servono
        add: (state, action) => {
            state.value.push(action.payload);
        },
    },
});

export const { add } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;