import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { UserContact } from "../components/UserContact";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const [balance, setBalance] = useState<string>();
  const [users, setUsers] = useState<string[]>([]);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<{ username: string }>(`${BACKEND_URL}/me`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => setUsername(res.data.username))
      .catch(() => {
        navigate("/signin");
      });
  }, [navigate]);

  useEffect(() => {
    axios
      .get<{ balance: string }>(`${BACKEND_URL}/balance`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBalance(res.data.balance);
        axios
          .get<{ users: string[] }>(`${BACKEND_URL}/allusers`)
          .then((res) => setUsers(res.data.users));
      });
  }, []);

  return (
    <div className="h-screen">
      <NavBar username={username}/>
      <div className="px-4 text-2xl mt-6 flex gap-4 items-center">
        <span className="font-bold">Your Balance</span> ${balance}
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
        {users.map((username, index) => (
          <UserContact key={index} idx={index} username={username} />
        ))}
      </div>
    </div>
  );
}
