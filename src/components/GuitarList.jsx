import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { guitars } from "../data";
import CustomBtn from "./CustomBtn";
import FavoriteBtn from "./FavoriteBtn";

function GuitarList({ brand }) {
  const { filtered } = useContext(Context);
  const location = useLocation();

  const filteredList = guitars.filter(
    (guitar) =>
      guitar.brand === brand && guitar.type === location.pathname.split("/")[1]
  );

  const guitarList = guitars.filter(
    (guitar) => guitar.type === location.pathname.split('/')[1]
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 items-end">
      {!filtered
        ? guitarList.map((guitar) => (
            <div
              key={guitar.id}
              className="flex flex-col justify-end w-[250px] h-[350px] gap-2 items-center shadow-md px-2 py-4"
            >
              <div>
                <img src={guitar.image} alt="" className="w-[200px] mb-2 ml-2"/>
                <p className="font-bold">{guitar.name}</p>
                <p>{guitar.shortDescription}</p>
                <p className="text-zinc-600">{`$${guitar.price}`}</p>
              </div>
              <div className="flex gap-4">
                <Link
                  to={`${location.pathname}/${guitar.id}`}
                  className="bg-zinc-800 w-[100px] text-center text-white text-sm rounded-md py-1 px-2"
                >
                  View Guitar
                </Link>
                <CustomBtn productId={guitar.id} />
                <FavoriteBtn productId={guitar.id} />
              </div>
            </div>
          ))
        : filteredList.map((guitar) => (
            <div
              key={guitar.id}
              className="flex flex-col w-[250px] gap-2 items-center"
            >
              <div>
                <img src={guitar.image} alt="" className="w-[200px] mb-2" />
                <p>{guitar.name}</p>
                <p>{guitar.shortDescription}</p>
                <p className="text-zinc-600">{`$${guitar.price}`}</p>
              </div>
              <div className="flex gap-4">
                <Link
                  to={`${location.pathname}/${guitar.id}`}
                  className="bg-zinc-800 w-[100px] text-center text-white text-sm rounded-md py-1 px-2"
                >
                  View Guitar
                </Link>
                <CustomBtn productId={guitar.id} />
                <FavoriteBtn productId={guitar.id} />
              </div>
            </div>
          ))}
    </div>
  );
}

export default GuitarList;
