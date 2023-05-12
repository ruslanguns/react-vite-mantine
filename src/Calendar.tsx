import { Box } from "@mantine/core";
import { DateInput, DatePicker, DatePickerValue } from "@mantine/dates";

type CalendarProps = {
  label?: string;
  value: Date | null;
  onChange?(value: DatePickerValue<"default">): void;
  styles?: React.CSSProperties | undefined;
};

export default function Calendar({
  label,
  value,
  onChange,
  styles,
}: CalendarProps) {
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
