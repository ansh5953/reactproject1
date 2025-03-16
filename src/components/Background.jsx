import React from "react";

function Background() {
  return (
    <>
      <div className="relative z-[2] h-screen w-full">
        <div className=" absolute top-[5%] w-full  flex py-5 text-xl font-semibold text-zinc-600 justify-center">
          Documents.
        </div>
        <h1
          className="absolute top-1/2 left-1/2 text-[13vw]  leading-none tracking-tighter z-50 font-semibold text-zinc-900"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
