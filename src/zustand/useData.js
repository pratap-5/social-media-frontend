import { create } from "zustand";

const useData = create((set) => ({
  backendUrl: "https://friend-backend-979l.onrender.com",
  setBackendurl: (url) => set({ backendUrl: url }),


  searchList: [],
  setSearchList: (items) => set({ searchList: items }),
}));

export default useData;
