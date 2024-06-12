"use client";

import { useRouter } from "next/navigation";

import { userStore } from "../utility/userStore";
import { useState } from "react";
import { VStack } from "../components/Stack";

export const HomeContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = userStore();
  const router = useRouter();

  const onClick = () => {
    if (id === "admin" && password === "admin") {
      setUser({
        id: id,
        password: password,
      });

      router.push("/diagnosis");
    }
  };

  return (
    <VStack
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack
        style={{ width: 720, height: 720, backgroundColor: "black" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <input
          type="text"
          placeholder="Enter Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ width: 300, height: 100 }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: 300, height: 100 }}
        />
        <button
          type="submit"
          onClick={onClick}
          style={{ width: 300, height: 50 }}
        >
          Login
        </button>
      </VStack>
    </VStack>
  );
};
