import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState, type SubmitEventHandler } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");

  const handleSubmit : SubmitEventHandler<HTMLFormElement>= (e) => {
    e.preventDefault();
    console.log(email, passcode);
  };

  return (
    <div>
      <div className="loginCard">
        <Card title="Login" className="flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-column gap-4">
              <InputText
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Password
                feedback={false}
                placeholder="Password"
                onChange={(e) => setPasscode(e.target.value)}
              />
              <div className="flex justify-content-center">
                <Button label="Submit" className="w-6" type="submit"/>
              </div>
            </div>
          </form>
          <p>
            Never Registered? <Link to="/register">Click Here</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
