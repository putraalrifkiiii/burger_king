import BackgroundImage from "../../assets/background.png";

const bgImage = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top",
};

function Hero() {
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
              <p className="text-sm ">
                salah satu makanan cepat saji yang terdiri dari roti bundar yang
                diisi dengan daging, sayuran segar, keju, dan berbagai macam
                saus. Makanan ini dikenal karena rasanya yang lezat,
                penyajiannya yang praktis, serta memiliki banyak variasi sesuai
                selera, sehingga menjadi salah satu hidangan favorit di berbagai
                negara.
              </p>

              <button className="self-center button">Order Now</button>
            </div>
            <div className="">
              <h1 className="text-red-200  text-center bg-yellow-600 text-2xl font-bold mt-40 ">
                Delicious burgers made with the freshest ingredients!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
