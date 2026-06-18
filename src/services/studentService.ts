import type { ApiResponse } from "../types/apiResponse";
import type {
  CreateStudentRequest,
  GetStudentDetailResponse,
} from "../types/student";
import baseApi from "./api";

export async function createStudent(
  data: CreateStudentRequest,
): Promise<ApiResponse<GetStudentDetailResponse>> {
  var response = await baseApi.post("/student", data);
  return response.data;
}
