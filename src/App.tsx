import { Divider, Text, Tabs } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import dayjs from "dayjs";

import { dateRanges } from "./utils";
import CalendarAction from "./CalendarAction";
import Calendar from "./Calendar";

export default function App() {
  const [fromValue, setFromValue] = useState<Date | null>(
    dayjs().startOf("day").toDate()
  );
  const [toValue, setToValue] = useState<Date | null>(new Date());
  const breakpoint = useMediaQuery("(max-width: 450px)");

  return (
    <div className="App">
      <aside>
        <Text className="options-title" size="sm">
          Quick options
        </Text>

        <div className="options">
          {dateRanges.map(({ label, onClick }) => (
            <CalendarAction
              {...{
                key: label,
                label,
                onClick: () => onClick(setFromValue, setToValue),
              }}
            />
          ))}
        </div>
      </aside>

      <Divider className="divider" orientation="vertical" hidden={breakpoint} />

      <div className="calendar">
        <Tabs defaultValue="start-date">
          <Tabs.List>
            <Tabs.Tab value="start-date">Start date</Tabs.Tab>
            <Tabs.Tab value="end-date">End date</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="start-date" py="xs">
            <Calendar {...{ value: fromValue, onChange: setFromValue }} />
          </Tabs.Panel>

          <Tabs.Panel value="end-date" pt="xs">
            <Calendar {...{ value: toValue, onChange: setToValue }} />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
