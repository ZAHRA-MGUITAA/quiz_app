export interface OptionProps {
  text: string;
  onClick: (option: string) => void;
  isSelected?: boolean;
  disabled?: boolean;
}
