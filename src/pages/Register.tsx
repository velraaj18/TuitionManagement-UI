import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState, type SubmitEventHandler } from "react";
import type { CreateRegisterRequest } from "../types/register";
import { registerUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const requestPayload: CreateRegisterRequest = {
      email: email,
      password: passcode,
      firstName: firstName,
      lastName: lastName,
    };

    const response = await registerUser(requestPayload);
    if(response.statusCode == 200){
      navigate("/")
    }
    
  };
  return (
    <div>
      <div className="registerCard">
        <Card
          title="Register"
          className="flex justify-content-center"
          pt={{ title: { className: "flex justify-content-center" } }}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-column gap-4">
              <InputText
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputText
                placeholder="Last Name"
                onChange={(e) => setlastName(e.target.value)}
              />
              <InputText
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Password
                placeholder="Password"
                feedback={false}
                onChange={(e) => setPasscode(e.target.value)}
              />
              <div className="flex justify-content-center">
                <Button label="Register" type="submit" className="w-6" />
              </div>
            </div>
          </form>
          <p>
            Already a user? <Link to="/login">Click Here</Link>
          </p>
        </Card>
      </div>
    </div>
  );
};
