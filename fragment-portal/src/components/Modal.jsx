import { createPortal } from "react-dom";
import FormLogin from "./FormLogin";

export default function Modal(props) {
  if (typeof document === "undefined") return <div className="modal"></div>;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5 modal">
      <div className="absolute inset-0 bg-black bg-opacity-25 overlay"></div>
      <div className="relative z-10 p-10 bg-white rounded-lg modal-content w-full max-w-[482px]">
        <div
          className="absolute top-0 right-0 cursor-pointer flex items-center justify-center  w-[38px] h-[38px] rounded-full bg-white transform translate-x-2/4 -translate-y-2/4 border border-[#E7ECF3]"
          onClick={props.handleClose}
        >
          <span className="material-symbols-outlined  text-[#84878B]">
            close
          </span>
        </div>
        <h1 className="font-bold leading-[60px] text-[40px] text-center">
          Welcome Back!
        </h1>
        <div className="flex items-center justify-center gap-3 mt-5">
          <button className="h-12 w-[308px] bg-[#316BFF] text-white rounded-lg font-bold text-base leading-4 flex items-center justify-center gap-2">
            <span className="text-2xl font-bold">G</span>
            <span>Sign in with Google</span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-[#3B3E44] text-white text-2xl font-bold rounded-lg">
            <span>f</span>
          </button>
        </div>
        <div
          className="flex items-center justify-center gap-[10px] text-[#E7ECF3] mt-5"
          yarn
        >
          <hr className="h-[1px] w-[96px]" />
          <span className="text-[#84878B] text-sm leading-[21px] font-normal">
            or continue with
          </span>
          <hr className="h-[1px] w-[96px]" />
        </div>
        <div className="flex justify-center mt-5">
          <FormLogin></FormLogin>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
}
