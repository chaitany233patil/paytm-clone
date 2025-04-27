import { useRef } from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Transfer = () => {
  const ammountRef = useRef<HTMLInputElement>(null);
  const receiver = JSON.parse(localStorage.getItem("receiverId") as string);
  const navigate = useNavigate();

  async function transferMoney() {
    const res = await axios.post(
      `${BACKEND_URL}/transfer`,
      {
        to: receiver.id,
        amount: Number(ammountRef.current?.value),
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    alert(res);
    navigate("/");
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-white p-4">
        <Heading heading={"PayTM"} />
        <SubHeading subHeading={"Transfer you money with security"} />
        <div className="flex items-center gap-3 py-3">
          <div className="bg-green-500 h-10 w-10 rounded-full flex items-center justify-center text-2xl font-medium">
            {receiver.username[0].toUpperCase()}
          </div>
          <div className="text-2xl font-medium">{receiver.username}</div>
        </div>
        <Input
          reference={ammountRef}
          label={"Amount"}
          placeholder={"2000"}
          type={"number"}
        />
        <button
          onClick={transferMoney}
          className="bg-green-500 w-full mt-3 text-2xl font-sans p-2 font-bold cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};
