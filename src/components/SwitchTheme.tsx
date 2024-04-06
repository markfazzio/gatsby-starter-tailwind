import React, { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

const SwitchTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  const handleOnChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="switch-container">
      <div className="switch-theme">
        <input
          id="toggle_checkbox"
          onChange={handleOnChange}
          type="checkbox"
          checked={theme === "light" ? true : false}
        />
        <label htmlFor="toggle_checkbox">
          <div id="star">
            <div className="star" id="star-1">
              ★
            </div>
            <div className="star" id="star-2">
              ★
            </div>
          </div>
          <div id="moon"></div>
        </label>
      </div>
    </div>
  );
};

export default SwitchTheme;
