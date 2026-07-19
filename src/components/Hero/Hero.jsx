import BackgroundImage from "../../assets/background.png";
import { ImageList } from "../../index";
import { useState } from "react";

const bgImage = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top",
};

function Hero() {
  const [selectedImage, setSelectedImage] = useState(ImageList[0]);
  return (
    <div>
      <div>
        <div className="relative">
          <div
            style={bgImage}
            className="lg:h-[calc(100vh-72px)] bg-green-300/30 min-h-[500px] blur-xs"
          ></div>

          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 sm:pt-0 sm:px-10 text-center sm:text-left  ">
              <h1 className="text-3xl font-bold  ">
                Welcome
                <span className="block bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[rgba(0,128,0,1)]">
                  <span className="text-black">toBurger</span>King!
                </span>
              </h1>
              <p className="text-sm text-justify">
                salah satu makanan cepat saji yang terdiri dari roti bundar yang
                diisi dengan daging, sayuran segar, keju, dan berbagai macam
                saus. Makanan ini dikenal karena rasanya yang lezat,
                penyajiannya yang praktis, serta memiliki banyak variasi sesuai
                selera, sehingga menjadi salah satu hidangan favorit di berbagai
                negara.
              </p>
              <div className="self-center">
                <button className="button text-white">Order Now</button>
              </div>
            </div>
            <div className="flex justify-center items-center relative order-1 sm:order-2 ">
              <div data-aos="fade-left" data-aos-delay="300">
                <img
                  src={selectedImage.img}
                  alt="burger logo"
                  className="max-w-[450px] w-full mx-auto hover:scale-105 duration-300 drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]"
                />
              </div>
              <div className="flex sm:flex-col  sm:translate-x-4/2 ml-12 sm:py-2 justify-center absolute bg-white/30 rounded-full">
                {ImageList.map((item) => (
                  <div
                    data-aos="zoom-in"
                    key={item.id}
                    data-aos-delay={item.id * 200}
                  >
                    <img
                      key={item.id}
                      src={item.img}
                      onClick={() => setSelectedImage(item)}
                      alt=""
                      className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-105 duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
