import { configureStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./reducer";
import logger from "./middleware/logger";

export default function () {
  return configureStore({ reducer, middleware: [logger] });
}
