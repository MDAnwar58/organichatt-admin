export const removeLeadingZero = (number: string) => {
   if (!number) {
      return "";
   }
   return number.replace(/^0/, ""); // Removes the leading 0
};
export const convertToTextCase = (str: string): string => {
   if (str) {
      const isUnderscorePattern = /^[a-z]+(_[a-z]+)+$/.test(str);

      if (!isUnderscorePattern) {
         return str; // Return the original string if it doesn't match the pattern
      }

      return str
         .replace(/_/g, " ") // Replace underscores with spaces
         .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
   } else {
      return "";
   }
};
