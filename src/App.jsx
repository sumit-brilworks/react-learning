import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-20 bg-neutral-800 text-white">
      <div className="flex gap-4 justify-center">
        <button
          className="bg-purple-700 p-2 rounded"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Show Modal
        </button>
        <button
          className="bg-purple-700 p-2 rounded"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close Modal
        </button>
        <div className="absolute inset-20">{isOpen && <Modal />}</div>
      </div>
    </div>
  );
}

export default App;
