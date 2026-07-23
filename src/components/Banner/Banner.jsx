import React from "react";
import { BannerBurger } from "../../index";
import {
  FaStar,
  FaTruckFast,
  FaLeaf,
  FaCreditCard,
  FaMosque,
} from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-green-200">
      <div className="container mx-auto pb-10 ">
        <div className="min-h-[550px] grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="max-w-[400px] w-full drop-shadow-[0px_0px_20px_rgba(0,255,0,0.8)]">
            {BannerBurger.map((item) => (
              <img className="hover:scale-105" src={item.img} alt="" />
            ))}
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-2">
              <FaStar className="text-yellow-400 text-4xl" />
              <h1 className="font-bold text-2xl">Best Burger In Town</h1>
            </div>
            <h2 className="text-gray-400">Premium Burger</h2>
            <h2 className="text-gray-400">Made For Everyone</h2>
            <br />
            <p className="max-w-[400px] text-justify tracking-widest leading-6">
              Nikmati burger premium dengan daging berkualitas, sayuran segar,
              roti lembut, dan saus spesial yang dibuat setiap hari untuk
              memberikan rasa terbaik di setiap gigitan.
            </p>
            <br />
            <p className="text-gray-400">Fresh Ingredients</p>
            <p className="text-gray-400">Premium Cheese</p>
            <p className="text-gray-400">100% Beef</p>
            <button className="button self-start w-fit mx-auto items-center justify-center mt-5 ">
              View Menu
            </button>
          </div>
        </div>

        <div className="flex justify-center  w-[500px] gap-10  mx-auto ">
          <div className="flex flex-col items-center gap-1">
            <FaTruckFast className="text-3xl h-17 w-17 bg-green-300 shadow-sm p-5 rounded-full" />
            <p className="font-bold text-gray-400">Fast Delivery</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaLeaf className="text-3xl h-17 w-17 bg-green-300 shadow-sm p-5 rounded-full" />
            <p className="font-bold text-gray-400">Fresh Food</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaCreditCard className="text-3xl h-17 w-17 bg-green-300 shadow-sm p-5 rounded-full" />
            <p className="font-bold text-gray-400">Easy Payment</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaMosque className="text-3xl h-17 w-17 bg-green-300 shadow-sm p-5 rounded-full" />
            <p className="font-bold text-gray-400">100% Halal</p>
          </div>
        </div>
      </div>
      <div className=" w-full h-1 bg-gray-400 mb-5"></div>
    </section>
  );
};

export default Banner;
