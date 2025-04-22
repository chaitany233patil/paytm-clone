import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";

export const Transfer = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-white p-4">
        <Heading heading={"PayTM"} />
        <SubHeading subHeading={"Transfer you money with security"} />
        <div className="flex items-center gap-3 py-3">
          <div className="bg-green-500 h-10 w-10 rounded-full flex items-center justify-center text-2xl font-medium">
            A
          </div>
          <div className="text-2xl font-medium">Anuj</div>
        </div>
        <Input label={"Amount"} placeholder={"2000"} type={"number"} />
        <button className="bg-green-500 w-full mt-3 text-2xl font-sans p-2 font-bold">
          Send
        </button>
      </div>
    </div>
  );
};
