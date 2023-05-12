import { Button } from "@mantine/core";

type CalendarProps = {
  onClick?: () => void;
  label: string;
};
export default function CalendarAction(props: CalendarProps) {
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
