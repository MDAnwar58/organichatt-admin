export const formatDate = (timestamp: string) => {
   if (timestamp) {
      const date = new Date(timestamp);
      const options: any = { day: "2-digit", month: "short", year: "numeric" };
      return date.toLocaleDateString("en-US", options);
   } else {
      return "---";
   }
};
export const date = (dateString: string): string => {
   if (dateString) {
      const date = new Date(dateString); // Convert the string to a Date object
      return date.toLocaleDateString("en-GB"); // 'en-GB' format: day/month/year
   } else {
      return "";
   }
};
