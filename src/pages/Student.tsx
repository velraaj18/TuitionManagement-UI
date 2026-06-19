import DynamicDataTable from "../components/DynamicDataTable";
import StudentForm from "../components/StudentForm";

const Student = () => {
  return (
    <div>
      <div className="grid">
        <div className="col-12 md:col-6 lg:col-4">
          <StudentForm />
        </div>
        <div className="col-12 md:col-6 lg:col-8">
          <DynamicDataTable />
        </div>
      </div>
    </div>
  );
};

export default Student;
