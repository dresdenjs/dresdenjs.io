import 'dayjs/locale/de';
import dayjs, { type ConfigType as DateLike } from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.locale('de-DE');
dayjs.extend(LocalizedFormat);

export function formatDate(date: DateLike): string {
  return dayjs(date).format('L');
}
