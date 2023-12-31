"use client";
import { useState } from "react";
import data from "@/data/assignments.json";

const Resources = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (data) => data.title.toLowerCase().includes(search.toLowerCase()) == true,
  );

  return (
    <>
      <h1 className="text-4xl text-[#2977f5] mb-5 mt-10 sm:mx-20 text-center font-bold">
        Assignments
      </h1>
      <div className="flex justify-center">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="rounded-lg bg-[#e0ecff] p-2 outline-none min-w-[208px] sm:w-96"
          placeholder="Search"
        />
      </div>
      <div className="gap-4 flex justify-evenly flex-wrap mx-20 my-10">
        {filteredData.map((card, i) => (
          <div
            key={i}
            className="text-[#595959] drop-shadow-2xl bg-white p-5 rounded-lg flex justify-center flex-col gap-4 text-center min-w-[208px] sm:w-96"
          >
            <h2 className="text-2xl font-bold">{card.title}</h2>
            <p>{card.description}</p>
            <a
              href={card.link}
              className="bg-[#2977f5] text-white p-2 rounded-lg"
              target="_blank"
            >
              Assignment
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Resources;
