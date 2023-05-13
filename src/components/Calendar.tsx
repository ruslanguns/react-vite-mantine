import { Calendar as CalendarComponent, DateInput } from "@mantine/dates";
import dayjs from "dayjs";

type CalendarProps = {
  value: Date | null;
  onChange?(value: Date): void;
};

export default function Calendar({ value, onChange }: CalendarProps) {
  return (
    <>
      <DateInput
        {...{
          popoverProps: { opened: false },
          value,
          onChange,
          valueFormat: "YYYY-MM-DDTHH:mm:ss.SSSZ",
        }}
      />
      <CalendarComponent
        {...{
          getDayProps: (date) => ({
            selected: dayjs(value).isSame(date, "date"),
            onClick: () => onChange && onChange(date),
          }),
        }}
      />
    </>
  );
}
