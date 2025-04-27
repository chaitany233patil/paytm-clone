interface ButtonTypes {
  label: string;
  onClick: () => void;
}

export function Button(props: ButtonTypes) {
  return (
    <button
      onClick={props.onClick}
      className="bg-black text-white p-2 text-lg w-full mt-4 cursor-pointer hover:bg-gray-800"
    >
      {props.label}
    </button>
  );
}
