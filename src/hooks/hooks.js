import { useContext } from "react";
import { DataContext } from "../components/Context/DataContextProvider";

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Problem providing the context");
  }
  return context;
};
