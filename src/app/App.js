import { Inter } from "next/font/google";
import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

const App = ({ children }) => {
  const { state } = useContext(GlobalContext);
  return (
    <body className={`${inter.className} ${state.darkMode ? "dark-mode" : ""}`}>
      <Navigation />

      {children}
    </body>
  );
};

export default App;
