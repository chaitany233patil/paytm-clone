import { Ref } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  reference: Ref<HTMLInputElement>;
}

export function Input(props: InputProps) {
  return (
    <div>
      <div className="font-sans text-lg font-medium">{props.label}</div>
      <input
        ref={props.reference}
        type={props.type}
        placeholder={props.placeholder}
        className="border-1 p-2 border-gray-400 w-70"
        required
      />
    </div>
  );
}
