import { Divider, Group, Text, Tabs } from "@mantine/core";
import { useState } from "react";
import dayjs from "dayjs";

import { dateRanges } from "./utils";
import CalendarAction from "./CalendarAction";
import Calendar from "./Calendar";
import { useMediaQuery } from "@mantine/hooks";

function App() {
  const [fromValue, setFromValue] = useState<Date | null>(
    dayjs().startOf("day").toDate()
  );
  const [toValue, setToValue] = useState<Date | null>(new Date());
  const breakpoint = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Group className="App">
        <aside className="quick-options">
          <Text size="sm">Quick options</Text>

          {dateRanges.map(({ label, onClick }) => (
            <CalendarAction
              {...{
                key: label,
                label,
                onClick: () => onClick(setFromValue, setToValue),
              }}
            />
          ))}
        </aside>
        <Divider orientation={breakpoint ? "horizontal" : "vertical"} />

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
      </Group>

      <div className="result">
        <Text>Result:</Text>
        <pre>{JSON.stringify({ from: fromValue, to: toValue }, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
