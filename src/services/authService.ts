import type { ApiResponse } from "../types/apiResponse";
import type { CreateLoginRequest, GetLoginResponse } from "../types/login";
import type { CreateRegisterRequest } from "../types/register";
import baseApi from "./api";

export async function registerUser(
  data: CreateRegisterRequest,
): Promise<ApiResponse<string>> {
  const response = await baseApi.post("/auth/register", data);
  return response.data;
}

export async function loginUser(
  data: CreateLoginRequest,
): Promise<ApiResponse<GetLoginResponse>> {
  const response = await baseApi.post("/auth/login", data);
  return response.data;
}
