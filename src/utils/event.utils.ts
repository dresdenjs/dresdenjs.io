export function getEventSlug(url: string): string {
  return url.replace(/^\/events\/(.*)-meetup$/, '$1');
}
