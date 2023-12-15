import { useState } from "react";

const useDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return { isDarkMode, toggleMode };
};

export default useDark;
