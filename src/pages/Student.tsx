import DynamicDataTable from "../components/DynamicDataTable";
import StudentForm from "../components/StudentForm";
import { getStudentList } from "../services/studentService";
import { type DynamicColumnProps } from "../components/DynamicDataTable";
import type { GetStudentResponse } from "../types/student";
import { useEffect, useState } from "react";

const Student = () => {
  const [students, setStudents] = useState<GetStudentResponse[]>([]);
  const columns: DynamicColumnProps<GetStudentResponse>[] = [
    {
      field: "studentName",
      header: "Student Name",
    },
    {
      field: "phoneNumber",
      header: "Phone Number",
    },
    {
      field: "emailAddress",
      header: "Email",
    },
    {
      field: "batchCount",
      header: "Batch Count",
    },
  ];
  const getAllStudent = async () => {
    const response = await getStudentList();
    setStudents(response.data);
  };

  useEffect(() => {
    getAllStudent();
  }, []);

  return (
    <div>
      <div className="grid">
        <div className="col-12 md:col-6 lg:col-4">
          <StudentForm />
        </div>
        <div className="col-12 md:col-6 lg:col-8">
          <DynamicDataTable<GetStudentResponse> columns={columns} value={students} />
        </div>
      </div>
    </div>
  );
};

export default Student;
