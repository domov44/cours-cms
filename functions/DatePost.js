// DatePost.js
import formatDate from 'intl-dateformat';

export function formatPostDate(postDate, format = 'dddd DD MMMM YYYY') {
  const date = new Date(postDate);
  return formatDate(date, format, { locale: 'fr' });
}