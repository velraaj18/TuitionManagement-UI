import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { FloatLabel } from "primereact/floatlabel";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useState, type SubmitEventHandler } from "react";

const StudentForm = () => {
  const [studentName, setStudentName] = useState<string>("");
  const [phone, setPhone] = useState<number | null>();
  const [email, setEmail] = useState<string>("");
  const handleSubmit : SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(studentName, phone, email);
  };
  return (
    <div className="studentForm">
      <Card
        title="Student Admission"
        className="flex justify-content-center"
        pt={{
          title: { className: "flex justify-content-center" },
          root: { className: "bg-green-800" },
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-column gap-5">
            <FloatLabel>
              <InputText
                id="studentname"
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
              <InputNumber
                id="phone"
                onValueChange={(e) => setPhone(e.value)}
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
