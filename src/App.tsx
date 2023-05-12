import { Box, Button, Divider, Group, Text, Tabs } from "@mantine/core";
import { DateInput, DatePicker, DatePickerValue } from "@mantine/dates";
import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

type CalendarProps = {
  label?: string;
  value: Date | null;
  onChange?(value: DatePickerValue<"default">): void;
  styles?: React.CSSProperties | undefined;
};
function Calendar({ label, value, onChange, styles }: CalendarProps) {
  return (
    <Box style={styles}>
      <DateInput
        {...{
          label,
          popoverProps: { opened: false },
          valueFormat: "MM/DD/YYYY HH:mm:ss",
          value,
          onChange,
        }}
      />
      <DatePicker {...{ value, onChange }} />
    </Box>
  );
}

type ActionButtonProps = {
  onClick?: () => void;
  label: string;
};
function ActionButton(props: ActionButtonProps) {
  return (
    <Button
      {...{
        variant: "light",
        color: "indigo",
        compact: true,
        onClick: props.onClick,
      }}
    >
      {props.label}
    </Button>
  );
}

function App() {
  const [fromValue, setFromValue] = useState<Date | null>(
    dayjs().startOf("day").toDate()
  );
  const [toValue, setToValue] = useState<Date | null>(new Date());

  return (
    <Group className="App">
      <aside className="quick-options">
        <Text size="sm">Quick options</Text>

        <ActionButton
          label="Last 15 min"
          onClick={() => {
            setFromValue(dayjs().subtract(15, "minutes").toDate());
            setToValue(new Date());
          }}
        />
        <ActionButton
          label="Last hour"
          onClick={() => {
            setFromValue(dayjs().subtract(1, "hour").toDate());
            setToValue(new Date());
          }}
        />
        <ActionButton
          label="Today"
          onClick={() => {
            setFromValue(dayjs().startOf("day").toDate());
            setToValue(new Date());
          }}
        />
        <ActionButton
          label="Yesterday"
          onClick={() => {
            setFromValue(dayjs().subtract(1, "day").startOf("day").toDate());
            setToValue(dayjs().subtract(1, "day").endOf("day").toDate());
          }}
        />
        <ActionButton
          label="This week"
          onClick={() => {
            setFromValue(dayjs().startOf("week").toDate());
            setToValue(new Date());
          }}
        />
        <ActionButton
          label="Last week"
          onClick={() => {
            setFromValue(dayjs().subtract(1, "week").startOf("week").toDate());
            setToValue(dayjs().subtract(1, "week").endOf("week").toDate());
          }}
        />
        <ActionButton
          label="This month"
          onClick={() => {
            setFromValue(dayjs().startOf("month").toDate());
            setToValue(new Date());
          }}
        />
        <ActionButton
          label="Last month"
          onClick={() => {
            setFromValue(
              dayjs().subtract(1, "month").startOf("month").toDate()
            );
            setToValue(dayjs().subtract(1, "month").endOf("month").toDate());
          }}
        />
        <ActionButton
          label="This year"
          onClick={() => {
            setFromValue(dayjs().startOf("year").toDate());
            setToValue(new Date());
          }}
        />
        <ActionButton
          label="Last year"
          onClick={() => {
            setFromValue(dayjs().subtract(1, "year").startOf("year").toDate());
            setToValue(dayjs().subtract(1, "year").endOf("year").toDate());
          }}
        />
      </aside>
      <Divider orientation="vertical" />

      <Tabs defaultValue="start-date">
        <Tabs.List>
          <Tabs.Tab value="start-date">Start date</Tabs.Tab>
          <Tabs.Tab value="end-date">End date</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="start-date" py="xs">
          <Calendar
            {...{
              value: fromValue,
              onChange: setFromValue,
            }}
          />
        </Tabs.Panel>
        <Tabs.Panel value="end-date" pt="xs">
          <Calendar
            {...{
              value: toValue,
              onChange: setToValue,
            }}
          />
        </Tabs.Panel>
      </Tabs>
    </Group>
  );
}

export default App;
