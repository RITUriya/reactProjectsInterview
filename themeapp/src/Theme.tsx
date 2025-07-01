import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { themeChange } from "./redux/themeSlice";

const Theme = () => {
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();
  const handleThemeChange = (theme: boolean) => {
    setTheme(!theme);
  };
  useEffect(() => {
    console.log("theme", theme);
    dispatch(themeChange(theme));
  }, [theme]);
  return (
    <div className="flex justify-center align-middle ">
      <button
        onClick={() => handleThemeChange(theme)}
        className="border-red-100 bg-amber-900  "
      >
        Click Me
      </button>
    </div>
  );
};

export default Theme;
