import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { useState, type SubmitEventHandler } from "react";
import { createStudent } from "../services/studentService";
import type { CreateStudentRequest } from "../types/student";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [studentName, setStudentName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit : SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const payload : CreateStudentRequest = {
      studentName : studentName,
      phoneNumber : phone,
      emailAddress : email
    }
    var response = await createStudent(payload);
    if(response.statusCode === 200){
      navigate("/student");
    }
    clearEntries();
  };

  function clearEntries(){
    setStudentName("");
    setEmail("");
    setPhone("")
  }
  return (
    <div className="studentForm">
      <Card
        title="Student Admission"
        className="flex justify-content-center"
        pt={{
          title: { className: "flex justify-content-center" },
          root: { className: "bg-gray-200" },
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-column gap-5">
            <FloatLabel>
              <InputText
                id="studentname"
                className=""
                onChange={(e) => setStudentName(e.target.value)}
              />
              <label htmlFor="studentname">Student Name</label>
            </FloatLabel>
            <FloatLabel>
              <InputText
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email Address</label>
            </FloatLabel>
            <FloatLabel>
              <InputText
                id="phone"
                keyfilter="int"
                maxLength={10}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="phone">Phone Number</label>
            </FloatLabel>
          </div>
          <div className="flex justify-content-center mt-4">
            <Button type="submit" label="Add Student" />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default StudentForm;
