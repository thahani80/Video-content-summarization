import React from "react";

const Generate = () => {
  return (
    <main className="flex items-center justify-center relative h-screen">
      <img src="/logo.svg" alt="" className="absolute top-5 left-5 w-[120px]" />
      <div class="loader">Generating...</div>
    </main>
  );
};

export default Generate;
