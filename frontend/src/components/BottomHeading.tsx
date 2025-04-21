interface type {
  subHeading: string;
  link: string;
}

export function BottomHeading(props: type) {
  return (
    <div className="text-center mt-2 text-gray-600">
      {props.subHeading}{" "}
      <span className="underline text-gray-800">{props.link}</span>
    </div>
  );
}
