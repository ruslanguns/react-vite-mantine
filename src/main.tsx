import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";

import CalendarPicker from "./CalendarPicker";

import "./index.css";
import { DatesProvider } from "@mantine/dates";

import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <DatesProvider
        settings={{ locale: "es", firstDayOfWeek: 1, weekendDays: [0] }}
      >
        <CalendarPicker />
      </DatesProvider>
    </MantineProvider>
  </React.StrictMode>
);
