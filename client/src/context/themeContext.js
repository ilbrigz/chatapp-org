import { createContext } from "react";

const themeContext = createContext({
  menuState: "opened"
});

export default themeContext;
