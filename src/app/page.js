"use client";
import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";

const Home = () => {
  const { state } = useContext(GlobalContext);
  return (
    <main>
      <p>{state.darkMode ? "Dark Mode is Active" : "Dark Mode is Inactive"}</p>
      <p>{state.menuOpen ? "Dark Mode is Active" : "Dark Mode is Inactive"}</p>
    </main>
  );
};
export default Home;
