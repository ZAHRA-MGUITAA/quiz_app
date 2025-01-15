import { CardProps } from "./types";

export default function Card(props: CardProps) {
  return <div className="w-full p-4">{props.children}</div>;
}
