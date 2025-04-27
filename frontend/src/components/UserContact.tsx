import axios from "axios";
import { BACKEND_URL } from "../config";

export function UserContact(props: { username: string; idx: number }) {
  async function transfer() {
    console.log(props.username);
    const res = await axios.post(`${BACKEND_URL}/receiver`, {
      firstname: props.username,
    });
    console.log(res.data);
  }

  return (
    <div key={props.idx} className="flex justify-between items-center my-3">
      <div className="flex gap-6 items-center">
        <div className="flex items-center justify-center font-bold bg-gray-500 h-10 w-10 rounded-full">
          {props.username[0].toUpperCase()}
        </div>
        <div className="text-xl font-semibold">{props.username}</div>
      </div>
      <button
        onClick={transfer}
        className="bg-black text-white p-1 px-3 cursor-pointer hover:bg-gray-800 rounded-xl"
      >
        Send Money
      </button>
    </div>
  );
}
