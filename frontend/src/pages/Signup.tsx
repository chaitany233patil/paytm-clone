import { BottomHeading } from "../components/BottomHeading";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  async function signup() {
    try {
      const res = await axios.post<{ message: string }>(
        `${BACKEND_URL}/signup`,
        {
          email: emailRef.current?.value,
          firstname: firstnameRef.current?.value,
          lastname: lastnameRef.current?.value,
          password: passwordRef.current?.value,
        }
      );
      alert(res.data?.message);
      navigate("/signin");
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (axios.isAxiosError(error)) {
        alert(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          (error.response?.data.message as AxiosError) ||
            "Something went wrong!"
        );
      } else {
        alert("Unexpected error occurred!");
      }
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-white p-4">
        <Heading heading={"Signup"} />
        <SubHeading subHeading={"Create your account to get started!"} />
        <Input
          reference={emailRef}
          label={"Email"}
          placeholder={"example@gamil.com"}
          type={"email"}
        />
        <Input
          reference={firstnameRef}
          label={"Firstname"}
          placeholder={"john"}
          type={"text"}
        />
        <Input
          reference={lastnameRef}
          label={"Lastname"}
          placeholder={"doe"}
          type={"text"}
        />
        <Input
          reference={passwordRef}
          label={"Password"}
          placeholder={"dsldhisw"}
          type={"password"}
        />
        <Button onClick={signup} label={"Signup"} />
        <BottomHeading
          subHeading={"Already have an account? "}
          linkTitle={"Signin in"}
          link={"/signin"}
        />
      </div>
    </div>
  );
};
