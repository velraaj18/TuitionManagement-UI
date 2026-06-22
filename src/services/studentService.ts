import type { ApiResponse } from "../types/apiResponse";
import type {
  CreateStudentRequest,
  GetStudentDetailResponse,
  GetStudentResponse,
} from "../types/student";
import baseApi from "./api";

export async function createStudent(
  data: CreateStudentRequest,
): Promise<ApiResponse<GetStudentDetailResponse>> {
  var response = await baseApi.post("/student", data);
  return response.data;
}

export async function getStudentList(): Promise<
  ApiResponse<GetStudentResponse[]>
> {
  var response = await baseApi.get("/student");
  return response.data;
}
