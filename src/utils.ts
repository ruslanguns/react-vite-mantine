import dayjs from "dayjs";

export const dateRanges = [
  {
    label: "Last 15 min",
    onClick: (
      setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
      setToValue: React.Dispatch<React.SetStateAction<Date | null>>
    ) => {
      setFromValue(dayjs().subtract(15, "minutes").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Last hour",
    onClick: (
      setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
      setToValue: React.Dispatch<React.SetStateAction<Date | null>>
    ) => {
      setFromValue(dayjs().subtract(1, "hour").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Today",
    onClick: (
      setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
      setToValue: React.Dispatch<React.SetStateAction<Date | null>>
    ) => {
      setFromValue(dayjs().startOf("day").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Yesterday",
    onClick: (
      setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
      setToValue: React.Dispatch<React.SetStateAction<Date | null>>
    ) => {
      setFromValue(dayjs().subtract(1, "day").startOf("day").toDate());
      setToValue(dayjs().subtract(1, "day").endOf("day").toDate());
    },
  },
  {
    label: "This week",
    onClick: (
      setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
      setToValue: React.Dispatch<React.SetStateAction<Date | null>>
    ) => {
      setFromValue(dayjs().startOf("week").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Last week",
    onClick: (
      setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
      setToValue: React.Dispatch<React.SetStateAction<Date | null>>
    ) => {
      setFromValue(dayjs().subtract(1, "week").startOf("week").toDate());
      setToValue(dayjs().subtract(1, "week").endOf("week").toDate());
    },
  },
  {
    label: "This month",
    onClick: (
      setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
      setToValue: React.Dispatch<React.SetStateAction<Date | null>>
    ) => {
      setFromValue(dayjs().startOf("month").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Last month",
    onClick: (
      setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
      setToValue: React.Dispatch<React.SetStateAction<Date | null>>
    ) => {
      setFromValue(dayjs().subtract(1, "month").startOf("month").toDate());
      setToValue(dayjs().subtract(1, "month").endOf("month").toDate());
    },
  },
  {
    label: "This year",
    onClick: (
      setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
      setToValue: React.Dispatch<React.SetStateAction<Date | null>>
    ) => {
      setFromValue(dayjs().startOf("year").toDate());
      setToValue(new Date());
    },
  },
  {
    label: "Last year",
    onClick: (
      setFromValue: React.Dispatch<React.SetStateAction<Date | null>>,
      setToValue: React.Dispatch<React.SetStateAction<Date | null>>
    ) => {
      setFromValue(dayjs().subtract(1, "year").startOf("year").toDate());
      setToValue(dayjs().subtract(1, "year").endOf("year").toDate());
    },
  },
];
