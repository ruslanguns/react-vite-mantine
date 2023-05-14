import { DateInput, DatePicker, DateValue } from "@mantine/dates";
import { useState } from "react";

type CalendarProps = {
  value: Date | null;
  onChange?(value: DateValue): void;
};

export default function Calendar({ value, onChange }: CalendarProps) {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <>
      <DateInput
        {...{
          date,
          defaultDate: value ?? undefined,
          onChange,
          onDateChange: setDate,
          popoverProps: { opened: false },
          value,
          valueFormat: "YYYY-MM-DD hh:mm:ss A",
        }}
      />
      <DatePicker
        {...{
          date,
          defaultDate: value ?? undefined,
          onChange,
          onDateChange: setDate,
          value,
        }}
      />
    </>
  );
}
