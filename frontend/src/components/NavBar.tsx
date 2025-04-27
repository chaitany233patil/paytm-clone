export function NavBar(props: { username: string }) {
  return (
    <div className="flex justify-between py-3 px-4 items-center">
      <div className="text-3xl font-sans font-bold">Paytm App</div>
      <div className="flex text-lg font-sans font-semibold items-center mt-2 justify-center gap-4 mr-3">
        Hello, {props.username}{" "}
        <div className="bg-gray-500 px-3 py-1 rounded-full">
          {props.username && props.username[0].toUpperCase()}
        </div>
      </div>
    </div>
  );
}
