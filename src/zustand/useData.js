import { create } from "zustand";

const useData = create((set) => ({
  backendUrl: "http://localhost:8000",
  setBackendurl: (url) => set({ backendUrl: url }),


  searchList: [],
  setSearchList: (items) => set({ searchList: items }),
}));

export default useData;
