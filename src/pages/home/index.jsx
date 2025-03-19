import React, { useState } from "react";
import ImageUploadModal from "../../components/ImageUpload";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="bg-[#F5F5F5] flex h-screen overflow-hidden">
      {/* sidebar  */}
      <div className="min-w-[280px] p-5 py-10 flex flex-col">
        {/* logo image  */}
        <img src="/logo.svg" alt="" className="w-[120px]" />
        {/* create button  */}
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#3D8FE2] py-3 px-2 rounded-lg
         flex items-center justify-center gap-x-2 text-white my-10"
        >
          <img src="/add.svg" alt="" />
          <span className="text-sm">Create a summary</span>
        </button>
        <h4 className="font-medium text-sm">Recent Summaries</h4>
        <ul className="flex flex-col mt-5 gap-y-5">
          {new Array(6).fill(" ").map((item, index) => (
            <li
              key={index}
              className="flex items-center cursor-pointer hover:text-gray-600 py-1 gap-x-2"
            >
              <div className="w-5 h-5 bg-[#D9D9D9]"></div>
              <span className="text-sm">Acknowledgement of a s...</span>
            </li>
          ))}
        </ul>
      </div>
      {/* content are shown here   */}
      <div className="my-4 bg-white w-full flex flex-col overflow-y-auto      rounded-3xl ">
        {/* header bar  */}
        <div className="flex shadow-sm rounded-t-3xl items-center py-4 px-8 justify-between ">
          <div className="max-w-lg w-full relative ">
            <img
              src="/search.svg"
              alt=""
              className="absolute -translate-y-0.5 top-0 bottom-0 my-auto left-4"
            />
            <input
              type="text"
              className="border p-3 rounded-xl border-[#3D8FE2] w-full  text-sm pl-12"
              placeholder="Search your project name "
            />
          </div>
          <Link to={"/login"}>
            <img src="/user.svg" alt="" className="w-8" />
          </Link>
        </div>
        <div className="py-5 px-6 h-full overflow-y-auto">
          <div className="h-[200px] rounded-3xl bg-black relative w-full overflow-hidden">
            <img
              src="/banner2.jpeg"
              alt=""
              className="w-full  h-full [object-position:50%_30%] object-cover opacity-70"
            />
            <div className="absolute left-0 right-0 flex-col gap-y-3  m-auto top-0 bottom-0 flex items-center justify-center">
              <h3 className="text-white font-semibold text-3xl">
                AI-Powered Video Summary: Key Insights in Seconds!
              </h3>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center py-3 px-6
              text-white gap-x-3 rounded-lg bg-[#FC6B4A]/45 backdrop-blur-sm"
              >
                <span>Generate Summary Now</span>
                <img src="/generate.svg" alt="" />
              </button>
            </div>
          </div>
          <h4 className="font-semibold text-lg mt-4">Recent Summaries</h4>
          <div className="w-full grid gap-6 grid-cols-4 mt-4">
            {new Array(4).fill(" ").map((item, index) => (
              <div
                key={index}
                className="py-[14px] px-5 flex flex-col gap-y-2 rounded-lg bg-[#F2F3F5]"
              >
                <div className="w-full h-[160px]">
                  <img
                    src="/summery.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h5>Keltro projet meeting</h5>
                  <div className="flex items-center text-[#33333399]/60 justify-between">
                    <span className="text-xs">Meeting</span>
                    <span className="text-xs">Edited 1 year ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImageUploadModal
        isOpen={modalOpen}
        onClose={() => {
          navigate("/generate");
          setTimeout(() => {
            navigate("/result");
          }, [5000]);
        }}
        handleClose={() => setModalOpen(false)}
      />
    </main>
  );
};

export default Home;
