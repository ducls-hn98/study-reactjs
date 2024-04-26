import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        {openModal && <Modal handleClose={() => setOpenModal(false)}></Modal>}
      </div>
      <button
        className="bg-blue-400 p-4 rounded-md"
        onClick={() => setOpenModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, saepe
        placeat aperiam voluptas, perspiciatis repellendus temporibus labore
        sapiente totam repellat non eos reiciendis explicabo dolores qui odio
        vitae deserunt! Accusantium!
      </div>
    </>
  );
}

export default App;
