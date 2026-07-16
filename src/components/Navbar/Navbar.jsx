import React from "react";
import Logo from "../../assets/burger-logo.png";
import { Navlink } from "../../index";

function Navbar() {
  return (
    <>
      <div className="container mx-auto px-4 lg:shadow-lg ">
        <div className="">
          <div className="lg:flex justify-between items-center h-18 ">
            <div>
              <img className="w-16 lg:w-21" src={Logo} alt="Burger Logo" />
            </div>
            <div>
              <div className="lg:pr-10 lg:flex gap-10 pt-7 lg:pt-0">
                <ul className="lg:flex gap-10 items-center space-y-5 lg:space-y-0">
                  {Navlink.map((item) => (
                    <li key={item.id}>
                      <a className=" hover:text-primary" href={item.link}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                  <button className=" bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-2 px-4 hover:scale-103 duration-300 ">
                    Order Now
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
