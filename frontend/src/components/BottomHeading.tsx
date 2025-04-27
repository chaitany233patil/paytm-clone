interface type {
  subHeading: string;
  linkTitle: string;
  link: string;
}

export function BottomHeading(props: type) {
  return (
    <div className="text-center mt-2 text-gray-600">
      {props.subHeading}{" "}
      <span className="underline text-gray-800">
        <a href={props.link}>{props.linkTitle}</a>
      </span>
    </div>
  );
}
