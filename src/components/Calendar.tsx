import { DateInput, DatePicker, DatePickerValue } from "@mantine/dates";

type CalendarProps = {
  value: Date | null;
  onChange?(value: DatePickerValue<"default">): void;
};

export default function Calendar({ value, onChange }: CalendarProps) {
  return (
    <>
      <DateInput
        {...{
          popoverProps: { opened: false },
          valueFormat: "MM/DD/YYYY HH:mm:ss",
          value,
          onChange,
        }}
      />
      <DatePicker {...{ value, onChange }} />
    </>
  );
}
