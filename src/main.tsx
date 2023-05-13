import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";

import CalendarPicker from "./CalendarPicker";

import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <CalendarPicker />
    </MantineProvider>
  </React.StrictMode>
);
