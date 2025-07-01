import { useSelector } from "react-redux";
import "./App.css"; // Your CSS file
import Theme from "./Theme";
import { useEffect } from "react";

function App() {
  const themeSelector = useSelector((state: { themeReducer: boolean }) => {
    return state.themeReducer;
  });
  console.log("themeSelector", themeSelector);
  useEffect(() => {
    document.documentElement.className = themeSelector?.theme
      ? "light"
      : "dark";
  });
  return (
    <>
      <main className="max - h - screen">
        {/* {children} */}
        <Theme />
      </main>
    </>
  );
}

export default App;
