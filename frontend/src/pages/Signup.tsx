import { BottomHeading } from "../components/BottomHeading";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";

export const Signup = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-white p-4">
        <Heading heading={"Signup"} />
        <SubHeading subHeading={"Create your account to get started!"} />
        <Input
          label={"Email"}
          placeholder={"example@gamil.com"}
          type={"email"}
        />
        <Input label={"Firstname"} placeholder={"john"} type={"text"} />
        <Input label={"Lastname"} placeholder={"doe"} type={"text"} />
        <Input label={"Password"} placeholder={"dsldhisw"} type={"password"} />
        <Button label={"Signup"} />
        <BottomHeading
          subHeading={"Already have an account? "}
          link={"Signin in"}
        />
      </div>
    </div>
  );
};
