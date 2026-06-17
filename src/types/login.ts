export interface CreateLoginRequest{
    email : string,
    password : string
} 

export interface GetLoginResponse{
    jwtToken : string,
    refreshToken : string
}