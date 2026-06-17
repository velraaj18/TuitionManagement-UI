import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState, type SubmitEventHandler } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import type { CreateLoginRequest } from "../types/login";
import { loginUser } from "../services/authService";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");

  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");
  if (token) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const requestPayload: CreateLoginRequest = {
      email: email,
      password: passcode,
    };
    const response = await loginUser(requestPayload);

    localStorage.setItem("jwtToken", response.data.jwtToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);

    console.log(response.data.jwtToken);

    navigate("/");
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
                <Button label="Submit" className="w-6" type="submit" />
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
