export const saveCreatedAt = (value) => {
  const today = new Date();
  const createdAt = new Date(value);

  const diffTime = Math.floor(
    (today.getTime() - createdAt.getTime()) / 1000 / 60
  );
  if (diffTime < 60) {
    return `${diffTime} mins ago`;
  }

  const diffTimeHour = Math.floor(diffTime / 60);
  if (diffTimeHour < 24) {
    return `${diffTimeHour} hour ago`;
  }
  if (diffTimeHour < 48) {
    return `yesterday`;
  }
  if (diffTimeHour < 72) {
    return `2 days ago`;
  }

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = createdAt.getMonth();
  const date = createdAt.getDate();
  const hours = createdAt.getHours();
  const minutes = createdAt.getMinutes().toString().padStart(2, '0');
  return `${months[month]} ${date} at ${hours}:${minutes}`;
};
