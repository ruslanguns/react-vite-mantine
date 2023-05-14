import {
  DateInput,
  Calendar as CalendarComponent,
  DateValue,
} from "@mantine/dates";
import dayjs from "dayjs";

type CalendarProps = {
  value: Date | null;
  onChange?(value: DateValue): void;
};

export default function Calendar({ value, onChange }: CalendarProps) {
  return (
    <div style={{ position: "relative" }}>
      <DateInput
        {...{
          popoverProps: { opened: false },
          value,
          valueFormat: "YYYY-MM-DD HH:mm",
          onChange: (dateValue) => {
            if (!onChange) return;
            onChange(dateValue);
          },
        }}
      />
      <CalendarComponent
        {...{
          getDayProps: (date) => ({
            selected: dayjs(value).isSame(date, "date"),
            onClick: () => onChange && onChange(date),
          }),
          date: value ?? undefined,
          value,
          onChange,
        }}
      />
    </div>
  );
}
