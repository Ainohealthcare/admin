import { DiagnosisContainer } from "@/ui/feature/DiagnosisContainer";
import { getAllDiagnoses } from "@/ui/utility/core";

const DiagnosisPage = async () => {
  const diagnoses = await getAllDiagnoses();

  return <DiagnosisContainer diagnoses={diagnoses} />;
};

export default DiagnosisPage;
