import { NavBar } from "../components/NavBar";
import { UserContact } from "../components/UserContact";

export function Dashboard() {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="px-4 text-2xl mt-6 flex gap-4 items-center">
        <span className="font-bold">Your Balance</span> $5000
      </div>
      <div className="px-4 text-2xl font-bold mt-6">Users</div>
      <div className="mx-4 mt-2 flex">
        <input
          className="border-1 border-gray-300 p-2 w-full rounded-sm"
          type={"text"}
          placeholder={"Search users..."}
        />
      </div>
      <div className="px-4 mt-4">
        <UserContact />
        <UserContact />
        <UserContact />
      </div>
    </div>
  );
}
