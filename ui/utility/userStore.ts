import { create } from "zustand";

type StoreType = {
  user: {
    id: string;
    password: string;
  } | null;

  setUser: (user: { id: string; password: string }) => void;
};

export const userStore = create<StoreType>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
