import { BottomHeading } from "../components/BottomHeading";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-white p-4">
        <Heading heading={"Signin"} />
        <SubHeading subHeading={"Enter email and password"} />
        <Input
          label={"Email"}
          placeholder={"example@gamil.com"}
          type={"email"}
        />
        <Input label={"Password"} placeholder={"dsldhisw"} type={"password"} />
        <Button label={"Signin"} />
        <BottomHeading subHeading={"Don't have account? "} link={"Signup in"} />
      </div>
    </div>
  );
};
