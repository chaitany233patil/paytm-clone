interface ButtonTypes {
  label: string;
}

export function Button(props: ButtonTypes) {
  return (
    <button className="bg-black text-white p-2 text-lg w-full mt-4 cursor-pointer hover:bg-gray-800">
      {props.label}
    </button>
  );
}
