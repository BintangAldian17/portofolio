import image from "../assets/wolf.png";

const HomePage = () => {
  return (
    <div className=" w-full h-full flex flex-col md:flex-row">
      <div className=" h-[50vh] md:h-full md:w-1/2 flex justify-center items-center bg-[#161616] shadow-2xl md:rounded-r md:pt-16">
        <img src={image} className=" md:w-[390px] md:h-[550px] w-[200px] h-[200px]  text-white" alt="wolf" />
      </div>
      <div className="md:h-full h-[50vh] md:w-1/2 md:flex md:justify-center md:items-center pt-8 bg-gray-100 flex-col md:pr-20">
        <div className=" md:w-min md:h-min">
          <h1 className="  md:text-[65px] md:leading-[70px]  font-primary tracking-wider  text-[#161616] font-semibold">
            Bintang
          </h1>
          <h1 className="  md:text-[65px] md:leading-[70px]  font-primary tracking-wider  text-[#161616] font-semibold">
            Aldiansyah.
          </h1>
          <div className=" w-full mt-4 border-t-2 border-[#161616]"></div>
          <p className=" text-[15px] mt-3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit enim vitae doloremque sapiente maxime
            itaque exercitationem voluptatem officia? Nemo et excepturi officia harum neque veniam repellat placeat,
            eveniet odio vel!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
