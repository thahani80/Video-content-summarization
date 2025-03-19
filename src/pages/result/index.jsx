import React from "react";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <main className="flex flex-col h-screen overflow-hidden ">
      {/* header section  */}
      <nav className="flex h-[76px] px-6 items-center shadow-md justify-between">
        <Link to={"/"}>
          <img src="/logo.svg" alt="" className="w-[120px]" />
        </Link>
        <Link to={"/login"}>
          <img src="/user.svg" alt="" />
        </Link>
      </nav>
      {/* result seciton are here 🤪  */}
      <div className="grid grid-cols-2 overflow-y-auto">
        <div className="px-7 py-5 h-full overflow-y-auto">
          <h2 className="text-3xl">Keltro projet meeting</h2>
          <span className="text-[#33333399]/65 text-sm mt-2">
            Edited 1 year ago
          </span>
          <div className="flex flex-col mt-12">
            <h4 className=" font-medium">Summary:</h4>
            <p className="font-light mt-3">
              Overview: This video explores upcoming advancements in space
              exploration and their potential impact on humanity.
            </p>
            <h4 className=" font-medium mt-4">Key Points:</h4>
            <ul className="mt-3 flex flex-col gap-y-3 font-light list-disc pl-5">
              <li>
                The narrator discusses reusable rockets, spotlighting SpaceX’s
                Starship and its recent test flights.
              </li>
              <li>
                A segment covers plans for lunar bases, with NASA’s Artemis
                program aiming for a 2030 foothold.
              </li>
              <li>
                Mars colonization is highlighted, with visuals of red planet
                simulations and Elon Musk quotes.
              </li>
              <li>
                A brief clip shows a futuristic space station concept with
                rotating gravity.
              </li>
            </ul>
            <h4 className=" font-medium mt-4">Tone & Style:</h4>
            <p className="font-light mt-3">
              Enthusiastic and optimistic, with a mix of narration, animated
              graphics, and real footage.
            </p>
          </div>
          <h4 className=" font-medium mt-4">Conclusion:</h4>
          <p className="font-light mt-3">
            The video ends with a call to support space innovation, urging
            viewers to “look to the stars.”
          </p>
        </div>
        <div className="flex flex-col">
          <div className="h-[330px] mt-3 overflow-hidden">
            <img
              src="/summery.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Result;
