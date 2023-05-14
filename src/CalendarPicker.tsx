import { Divider, Text, Tabs } from "@mantine/core";
import { useState } from "react";

import { dateOptions, beginOfToday } from "./utils";
import { Calendar, CalendarAction } from "./components";

export default function CalendarPicker() {
  const [fromValue, setFromValue] = useState<Date | null>(beginOfToday());
  const [toValue, setToValue] = useState<Date | null>(new Date());

  return (
    <>
      <div className="App">
        <aside>
          <Text className="options-title" size="sm">
            Quick options
          </Text>

          <div className="options">
            {dateOptions.map(({ label, setDates }) => (
              <CalendarAction
                {...{
                  key: label,
                  label,
                  onClick: () => setDates(setFromValue, setToValue),
                }}
              />
            ))}
          </div>
        </aside>

        <Divider className="divider" orientation="vertical" />

        <Tabs defaultValue="start-date" className="calendar">
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
    </>
  );
}
