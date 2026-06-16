import { Card } from "primereact/card";
import { useState, type SubmitEventHandler } from "react";

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(email, passcode, firstName, lastName);
  };
  return (
    <div>
      <div className="registerCard">
        <Card
          title="Register"
          pt={{ title: { className: "flex justify-content-center" } }}
        >
          <form onSubmit={handleSubmit}></form>
        </Card>
      </div>
    </div>
  );
};
