import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion, useSpring } from "framer-motion";
function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragElastic={1.25}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className=" relative h-[32vh] flex-shrink-0 w-[14vw] overflow-hidden rounded-[40px] bg-zinc-900/90 text-white  py-9 px-5 m-2"
    >
      <FaRegFileLines />
      <p className="my-3 text-sm leading-tight font-semibold">
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing. */}
        {data.desc}
      </p>
      <div className="footer absolute h-[8vh] left-0 w-full  bottom-0">
        <div className="flex  px-4 py-0 items-center justify-between ">
          <h5>{data.dataSize}</h5>
          <span className=" flex rounded-[20px] -mt-1 bg-white justify-center items-center w-5 h-5">
            {data.closebutton === "true" ? (
              <IoClose size="0.8em" color="#000" />
            ) : (
              <MdOutlineFileDownload size="0.5em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen === "true" && (
          <div
            className={`tag w-full py-4 ${
              data.tag.color === "green" ? "bg-green-400" : "bg-blue-400"
            } flex items-center justify-center`}
          >
            <h1 className="text-sm font-semibold -mt-2">{data.tag.title}</h1>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
