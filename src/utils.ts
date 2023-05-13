import dayjs from "dayjs";

export function beginOfToday() {
  return dayjs().startOf("day").toDate();
}

type DateRange = {
  label: string;
  setDates: (
    setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
    setToValue: React.Dispatch<React.SetStateAction<Date | null>>
  ) => void;
};

export const dateOptions: Array<DateRange> = [
  {
    label: "Last 15 min",
    setDates: (setFromValue, setToValue) => {
      setFromValue(dayjs().subtract(15, "minutes").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Last hour",
    setDates: (setFromValue, setToValue) => {
      setFromValue(dayjs().subtract(1, "hour").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Today",
    setDates: (setFromValue, setToValue) => {
      setFromValue(dayjs().startOf("day").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Yesterday",
    setDates: (setFromValue, setToValue) => {
      setFromValue(dayjs().subtract(1, "day").startOf("day").toDate());
      setToValue(dayjs().subtract(1, "day").endOf("day").toDate());
    },
  },
  {
    label: "This week",
    setDates: (setFromValue, setToValue) => {
      setFromValue(dayjs().startOf("week").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Last week",
    setDates: (setFromValue, setToValue) => {
      setFromValue(dayjs().subtract(1, "week").startOf("week").toDate());
      setToValue(dayjs().subtract(1, "week").endOf("week").toDate());
    },
  },
  {
    label: "This month",
    setDates: (setFromValue, setToValue) => {
      setFromValue(dayjs().startOf("month").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Last month",
    setDates: (setFromValue, setToValue) => {
      setFromValue(dayjs().subtract(1, "month").startOf("month").toDate());
      setToValue(dayjs().subtract(1, "month").endOf("month").toDate());
    },
  },
  {
    label: "This year",
    setDates: (setFromValue, setToValue) => {
      setFromValue(dayjs().startOf("year").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Last year",
    setDates: (setFromValue, setToValue) => {
      setFromValue(dayjs().subtract(1, "year").startOf("year").toDate());
      setToValue(dayjs().subtract(1, "year").endOf("year").toDate());
    },
  },
];
