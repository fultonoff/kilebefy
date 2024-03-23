import { formatDistanceToNow } from 'date-fns';

const DateFormatter = ({ date }) => {
  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
  
  return (
    <>
      {formattedDate}
    </>
  );
};

export default DateFormatter;