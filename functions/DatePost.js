// DatePost.js
export function formatPostDate(postDate, format = 'dddd DD MMMM YYYY') {
  const date = new Date(postDate);

  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

  switch (format) {
    case 'dddd DD MMMM YYYY':
      return date.toLocaleDateString('fr-FR', options);
    case 'DD MMMM':
      return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
    case 'DD/MM/YYYY':
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    // Ajoutez d'autres formats si nécessaire
    default:
      return date.toLocaleDateString('fr-FR', options);
  }
}
