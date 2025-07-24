import React from 'react';

function CardItem({ title, imgUrl, isVisited, children, count }: { title: string, isVisited: boolean, imgUrl: string, children: React.ReactNode }) {
    return (
        <div className="rounded-md bg-zinc-950 hover:scale-105 transition-all ease-linear cursor-pointer">
            <img src={imgUrl} className="rounded-t-md" alt=""></img>
            <div className="flex flex-col p-4">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <p className="text-gray-500 mt-2">{children}</p>
                {isVisited && <span className="text-green-500 mt-2">Visitata</span>}
                {!isVisited && <span className="text-red-500 mt-2">Non Visitata</span>}
            </div>
        </div>
    );
}
export default CardItem;