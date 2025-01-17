import { OptionProps } from "./types";

export default function Option(props: OptionProps) {
  // console.log(props.isSelected);
  return (
    <div
      onClick={() => props.onClick(props.text)}
      className={`w-full h-10 border border-solid border-s rounded-lg border-[#2A2A49] px-4 py-2 cursor-pointer ${
        props.isSelected
          ? "bg-[#9d6c4c] hover:bg-[#9d6c4c] text-white"
          : "bg-white hover:bg-[#F1EEEC]"
      } ${
        props.disabled ? "disabled pointer-events-none cursor-not-allowed" : ""
      }`}
    >
      <p className="text-base">{props.text}</p>
    </div>
  );
}
