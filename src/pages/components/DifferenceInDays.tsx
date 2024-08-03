import React, { Fragment } from "react";
import { differenceInDays } from "date-fns";

export default function DifferenceInDays({
  start_date,
  end_date,
}: {
  start_date?: any;
  end_date?: any;
}) {
  const startDate = new Date(start_date); // Ensure start_date is a Date object
  var daysDifference;
  if (end_date) {
    const endDate = new Date(end_date);
    daysDifference = differenceInDays(startDate, endDate);
  } else {
    const currentDate = new Date();
    daysDifference = differenceInDays(currentDate, startDate);
  }
  console.log(daysDifference);
}
