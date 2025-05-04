import { parseISO, format } from 'date-fns';

interface DateProps {
  value: string;
}

export function Date({ value }: DateProps) {
  const date = parseISO(value);
  return <time dateTime={value}>{format(date, 'LLLL d, yyyy')}</time>;
}
