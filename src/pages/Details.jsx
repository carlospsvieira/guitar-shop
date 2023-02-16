import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomBtn from "../components/CustomBtn";
import FavoriteBtn from "../components/FavoriteBtn";
import { guitars } from "../data";

function Details() {
  const location = useLocation();
  const guitarId = location.pathname.split("/")[2];
  const guitar = guitars.find((guitar) => guitar.id === guitarId);
  return (
    <div>
      <img src={guitar.image} alt="" className="w-[200px]" />
      <p>{guitar.name}</p>
      <p className="w-[350px] text-justify">{guitar.longDescription}</p>
      <p className="text-zinc-600">{`$${guitar.price}`}</p>
      <CustomBtn productId={guitar.id} />
      <FavoriteBtn productId={guitar.id} />
      <div>
        <Link to="/cart">Go to Cart</Link>
      </div>
    </div>
  );
}

export default Details;
