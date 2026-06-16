import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";

export function Login() {
  const [Email, setEmail] = useState<string>("");
  const [Passcode, setPasscode] = useState<string>("");

  console.log(Email, Passcode);
  return (
    <div>
      <div className="loginCard">
        <Card title="Login" className="flex justify-content-center">
          <form action="Post">
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
                <Button label="Submit" className="w-6" />
              </div>
            </div>
          </form>
          <p>Never Registered? <a href="/register">Click Here</a></p>
        </Card>
      </div>
    </div>
  );
}
