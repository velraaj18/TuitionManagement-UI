import type { BaseAuditFields } from "./baseAuditFields"

export interface CreateStudentRequest {
    studentUID? : number
    studentName : string 
    phoneNumber : string
    emailAddress : string
}

export interface GetStudentResponse extends BaseAuditFields {
    studentUID : number 
    studentName : string 
    phoneNumber : string
    emailAddress : string
    batchCount : number
}

export interface GetStudentDetailResponse extends BaseAuditFields {
    studentUID : number 
    studentName : string 
    phoneNumber : string
    emailAddress : string
    batches? : GetStudentBatchResponse[]
}

export interface GetStudentBatchResponse {
    batchUID : number,
    batchName : string,
    joinedDate : Date
}