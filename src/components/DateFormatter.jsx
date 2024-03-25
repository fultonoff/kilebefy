import { formatDistanceToNow } from 'date-fns';

const DateFormatter = ({ date }) => {
  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
  
  return (
    <span className='text-muted-foreground'>
      {formattedDate}
    </span>
  );
};

export default DateFormatter;