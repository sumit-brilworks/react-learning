import React, { useState } from "react";
import { createPortal } from "react-dom";

function Modal() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setName("");
  };
  return createPortal(
    <div className=" bg-neutral-800 h-36 items-center text-white flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex bg-gray-700 w-[80%] rounded justify-center h-24 gap-4 items-center"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="username"
          placeholder="write your name..."
          className="rounded p-2 text-black outline-none"
        />
        <button className="bg-sky-500 p-2 rounded">Submit</button>
      </form>
    </div>,
    document.body
  );
}

export default Modal;
