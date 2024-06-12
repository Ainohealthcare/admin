import axios from "axios";

// const BASE_URL = "https://api.pelvicbio.com/api";
const BASE_URL = "http://localhost:8082/api";

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

type MethodType = "GET" | "POST" | "PUT" | "DELETE";

interface ResponseType<T> {
  result_code: number;
  result_message: string;
  data: T;
  error: unknown;
}

export const apiRequest = async <T, R>(
  method: MethodType,
  url: string,
  data?: T
): Promise<ResponseType<R>> => {
  const response = await instance({
    method,
    url,
    data,
  });

  return response.data;
};

export interface DiagnosisResponseDTO {
  id: number;
  symptomDescription: string;
  imagePaths: string[];
  createdAt: string;
  dietType: string;
  dietDescription: string;
}

export interface DiagnosisResultResponseDTO {
  id: number;
  babyStatus: string;
  description: string;
  status: string;
  createdAt: string;
  diagnosisId: number;
}

export interface DiagnosisResultRequestDTO {
  babyStatus: "N" | "C" | "D";
  description: string;
  status: "N" | "C" | "D";
}

export const getAllDiagnoses = async (): Promise<DiagnosisResponseDTO[]> => {
  const response = await apiRequest<null, DiagnosisResponseDTO[]>(
    "GET",
    `/diagnosis/all`
  );

  return response.data;
};

export const postDiagnosisResult = async (
  diagnosisId: number | string,
  diagnosisResultRequest: DiagnosisResultRequestDTO
): Promise<DiagnosisResultResponseDTO> => {
  const response = await apiRequest<
    DiagnosisResultRequestDTO,
    DiagnosisResultResponseDTO
  >("POST", `/diagnosis-result/${diagnosisId}`, diagnosisResultRequest);

  return response.data;
};
