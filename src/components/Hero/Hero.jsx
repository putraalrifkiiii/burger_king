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
            className="lg:h-[calc(100vh-72px)] bg-green-100/30 h-[605px] blur-xs"
          ></div>

          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold  text-red-200 text-center bg-yellow-300">
                Welcome to Burger King!
              </h1>
            </div>
            <div>
              <h1 className="text-red-200  text-center bg-yellow-600 text-2xl font-bold mt-40">
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
