import { GlobalContext } from "@/context/globalContext";
import Link from "next/link";
import { useContext } from "react";

const navigationData = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];

const Navigation = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARKMODE" });
  };

  console.log(state);

  return (
    <nav>
      <ul className="navigation">
        {navigationData.map((navItem, index) => {
          return (
            <li key={index}>
              <Link href={navItem.path}>{navItem.name}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </nav>
  );
};

export default Navigation;
