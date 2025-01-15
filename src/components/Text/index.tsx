import { TextProps } from "@/components/Text/types";

export default function Text(props: TextProps) {
  return <p className={`${props.bold && "font-bold"}`}>{props.text}</p>;
}
