export const calculateElapsedDays = (startDateStr: string): number => {
  const startDate = new Date(startDateStr);

  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - startDate.getTime();

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};
export const calculateExperience = (startDate: string) => {
  let start = new Date(startDate);
  let now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
  }

  return `${years} Experienced years`;
};
