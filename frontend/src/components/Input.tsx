interface InputProps {
  label: string;
  placeholder: string;
  type: string;
}

export function Input(props: InputProps) {
  return (
    <div>
      <div className="font-sans text-lg font-medium">{props.label}</div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="border-1 p-2 border-gray-400 w-70"
      />
    </div>
  );
}
