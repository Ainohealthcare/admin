import { useState } from "react";
import { HStack, VStack } from "../components/Stack";
import { postDiagnosisResult } from "../utility/core";
import { TextElement } from "../components/TextElement";

export default function DiagnosisResultForm({ id }: { id: string | number }) {
  const [description, setDescription] = useState<string>("");
  const [babyStatus, setBabyStatus] = useState<"N" | "C" | "D">("N");

  const onSend = async () => {
    await postDiagnosisResult(id, {
      babyStatus,
      description,
      status: babyStatus,
    });
  };

  const babyStatusCategories: { babyStatus: "N" | "C" | "D"; show: string }[] =
    [
      {
        babyStatus: "N",
        show: "Normal(정상)",
      },
      {
        babyStatus: "C",
        show: "Caution(주의)",
      },
      {
        babyStatus: "D",
        show: "Danger(병원방문 권고)",
      },
    ];

  return (
    <VStack
      justifyContent="space-between"
      paddingHorizontal={20}
      paddingVertical={20}
      gap={20}
    >
      <HStack gap={20}>
        {babyStatusCategories.map((babyStatuaCategory) => (
          <button
            key={babyStatuaCategory.babyStatus}
            type="button"
            onClick={() => setBabyStatus(babyStatuaCategory.babyStatus)}
            style={{
              backgroundColor:
                babyStatus === babyStatuaCategory.babyStatus ? "red" : "black",
              borderRadius: 8,
              padding: 4,
            }}
          >
            <TextElement textStyle="TProperty" color="white">
              {babyStatuaCategory.show}
            </TextElement>
          </button>
        ))}
      </HStack>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          height: 216,
          fontSize: 18,
          fontWeight: 500,
        }}
      />
      <button
        type="button"
        onClick={onSend}
        style={{
          height: 40,
        }}
      >
        작성하기
      </button>
    </VStack>
  );
}
