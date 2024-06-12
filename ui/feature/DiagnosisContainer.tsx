"use client";

import { userStore } from "../utility/userStore";
import { HStack, VStack } from "@/ui/components/Stack";
import { DiagnosisResponseDTO } from "../utility/core";
import { TextElement } from "../components/TextElement";
import { ImageElement } from "../components/ImageElement";
import DiagnosisResultForm from "./DiagnosisResultForm";

export const DiagnosisContainer = ({
  diagnoses,
}: {
  diagnoses: DiagnosisResponseDTO[];
}) => {
  const { user } = userStore();

  if (user === null || user.id !== "admin" || user.password !== "admin") {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <VStack alignItems={"center"}>
      <VStack>
        <VStack paddingHorizontal={104} gap={32}>
          {diagnoses.map((diagnosis) => (
            <HStack key={diagnosis.id} gap={20}>
              <VStack
                style={{ width: 720, height: 360, border: "2px solid black" }}
                gap={20}
                paddingHorizontal={20}
                paddingVertical={20}
              >
                <VStack gap={16}>
                  <TextElement
                    textStyle="TPropertyTitle"
                    cssStyle={{
                      textAlign: "left",
                    }}
                  >
                    증상
                  </TextElement>
                  <TextElement
                    textStyle="TProperty"
                    cssStyle={{
                      textAlign: "left",
                    }}
                  >
                    {diagnosis.symptomDescription}
                  </TextElement>
                  <HStack>
                    {diagnosis.imagePaths.map((imagePath) => (
                      <ImageElement
                        src={imagePath}
                        width={64}
                        height={64}
                        style={{
                          borderRadius: 8,
                          padding: "2px",
                        }}
                      />
                    ))}
                  </HStack>
                </VStack>
                <VStack gap={16}>
                  <TextElement
                    textStyle="TPropertyTitle"
                    cssStyle={{
                      textAlign: "left",
                    }}
                  >
                    음식
                  </TextElement>
                  <TextElement
                    textStyle="TProperty"
                    cssStyle={{
                      textAlign: "left",
                    }}
                  >
                    식단종류 :
                    {diagnosis.dietType === "F"
                      ? " 모유"
                      : diagnosis.dietType === "B"
                      ? " 분유"
                      : " 이유식"}
                  </TextElement>
                  <TextElement
                    textStyle="TProperty"
                    cssStyle={{
                      textAlign: "left",
                    }}
                  >
                    {diagnosis.dietDescription}
                  </TextElement>
                </VStack>
              </VStack>
              <VStack
                style={{ width: 720, height: 360, border: "2px solid black" }}
              >
                <DiagnosisResultForm id={diagnosis.id} />
              </VStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};
