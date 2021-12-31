import React from "react";
import { useState } from "react";
function Test() {
  const [count, setCount] = useState(0);
  const increaseTime = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <>
      <h1 className="text-[#ffa400] text-center text-4xl font-bold mt-10 mb-10">
        Live anywhere
      </h1>
      <h2 className="text-center text-xl text-[green]">
        Keep calm & travel on
      </h2>
      <div className="grid grid-cols-3 gap-x-10 m-10">
        <img
          className="rounded-2xl"
          src="https://cdn.dribbble.com/users/74271/screenshots/17101349/media/f6e1c1d5c19c611313eaab753eafb8fe.jpg?compress=1&resize=1600x1200"
          alt="Hinh "
        />
        <h2 className="font-bold text-center text-2xl pt-5">
          Enjoy the great job
        </h2>
        <h3 className="text-gray-400 text-center pt-2 text-grey33">
          6,789 Properties
        </h3>
      </div>
      <div>
        <img
          className="rounded-2xl"
          src="https://cdn.dribbble.com/users/74271/screenshots/17101349/media/f6e1c1d5c19c611313eaab753eafb8fe.jpg?compress=1&resize=1600x1200"
          alt="Hinh "
        />
        <h2 className="font-bold text-center text-2xl pt-5">
          Enjoy the great job
        </h2>
        <h3 className="text-gray-400 text-center pt-2 text-grey33">
          {" "}
          6,789 Properties
        </h3>
      </div>
      <div>
        <img
          className="rounded-2xl"
          src="https://cdn.dribbble.com/users/74271/screenshots/17101349/media/f6e1c1d5c19c611313eaab753eafb8fe.jpg?compress=1&resize=1600x1200"
          alt="Hinh "
        />
        <h2 className="font-bold text-center text-2xl pt-5">
          Enjoy the great job
        </h2>
        <h3 className="text-gray-400 text-center pt-2 "> 6,789 Properties</h3>
      </div>
      
    </>
  );
}

export default Test;
