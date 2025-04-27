import { BottomHeading } from "../components/BottomHeading";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  async function signin() {
    try {
      const res = await axios.post<{ token: string }>(`${BACKEND_URL}/signin`, {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      localStorage.setItem("token", res?.data.token);
      alert("signin Successfully");
      navigate("/");
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
        <Heading heading={"Signin"} />
        <SubHeading subHeading={"Enter email and password"} />
        <Input
          reference={emailRef}
          label={"Email"}
          placeholder={"example@gamil.com"}
          type={"email"}
        />
        <Input
          reference={passwordRef}
          label={"Password"}
          placeholder={"dsldhisw"}
          type={"password"}
        />
        <Button label={"Signin"} onClick={signin} />
        <BottomHeading
          subHeading={"Don't have account? "}
          linkTitle={"Signup"}
          link={"/signup"}
        />
      </div>
    </div>
  );
};
