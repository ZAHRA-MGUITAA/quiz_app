import { ButtonProps } from "./types";

export default function Button(props: ButtonProps) {
  return (
    <button
      className="w-full bg-[#2A2A49] px-6 py-2 rounded-lg text-white"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
