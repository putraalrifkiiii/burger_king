import React from "react";
import { BannerBurger } from "../../index";

const Banner = () => {
  return (
    <section className="bg-green-200">
      <div className="container mx-auto">
        <div className="min-h-[550px] grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="max-w-[400px] w-full drop-shadow-[0px_0px_20px_rgba(0,255,0,0.8)]">
            {BannerBurger.map((item) => (
              <img src={item.img} alt="" />
            ))}
          </div>
          <div>
            <h1>Best Burger In Town</h1>
            <h2>Premium Burger</h2>
            <h2>Made For Everyone</h2>
            <br />
            <p>
              Nikmati burger premium dengan daging berkualitas, sayuran segar,
              roti lembut, dan saus spesial yang dibuat setiap hari untuk
              memberikan rasa terbaik di setiap gigitan.
            </p>
            <p>Fresh Ingredients</p>
            <p>Premium Cheese</p>
            <p>100% Beef</p>
            <button className="button">View Menu</button>
          </div>
        </div>

        <div className="flex"></div>
      </div>
    </section>
  );
};

export default Banner;
