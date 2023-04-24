import dayjs, { type ConfigType as DateLike } from 'dayjs';

export function formatDate(date: DateLike): string {
  return dayjs(date).format('L');
}
