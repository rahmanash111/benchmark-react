import Plane from "../../assets/Images/plane.gif";
import Earth from "../../assets/Images/world.png";

const Loader = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center w-full relative overflow-hidden h-full my-0 mx-auto flex flex-row justify-center items-center">
        <div className=" w-full flex justify-center">
          <img
            src={Plane}
            alt="Plane"
            className="animate-spin360 max-w-full h-auto"
          />
        </div>
        <div className="absolute w-full flex justify-center">
          <div
            className="w-[160px] h-[160px] rounded-full animate-earthanimation border-2 shadow-xl shadow-primary"
            style={{
              backgroundImage: `url(${Earth})`,
              backgroundSize: "340px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
