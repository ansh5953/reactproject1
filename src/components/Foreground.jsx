import React, { useRef } from "react";
import Cards from "./Cards";
import { data } from "react-router-dom";

function Foreground() {
  const ref = useRef(null);
  //desc ,dataSize,closebutton,tag
  const data = [
    {
      desc: "Annual financial report for the fiscal year 2024.",
      dataSize: "0.7mb",
      closebutton: "false",
      tag: {
        isOpen: "false",
        title: "Download",
        color: "blue",
      },
    },
    {
      desc: "Project proposal document for client approval.",
      dataSize: "1.1mb",
      closebutton: "false",
      tag: {
        isOpen: "true",
        title: "Download",
        color: "blue",
      },
    },
    {
      desc: "Employee contract agreement signed on March 10, 2025.",
      dataSize: "0.7mb",
      closebutton: "true",
      tag: {
        isOpen: "true",
        title: "Upload",
        color: "green",
      },
    },
    {
      desc: "Meeting minutes from the quarterly strategy discussion.",
      dataSize: "1.5mb",
      closebutton: "true",
      tag: {
        isOpen: "false",
        title: "Upload",
        color: "green",
      },
    },
    {
      desc: "Marketing campaign plan for Q3 2025.",
      dataSize: "1.2mb",
      closebutton: "false",
      tag: {
        isOpen: "true",
        title: "Download",
        color: "blue",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="h-screen w-full fixed z-[3] top-0 flex gap-1 bg-transparent p-5"
    >
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
