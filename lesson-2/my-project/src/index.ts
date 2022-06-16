import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { getUserData, getFavoritesAmount, User } from './userlocalStorage.js';

window.addEventListener('DOMContentLoaded', () => {
  const user: User = getUserData()
  const favoritesAmount = getFavoritesAmount();

  const today = new Date();
  const checkIn = today.setDate(today.getDate() + 1)
 
  const checkOut = today.setDate(today.getDate() + 2)

  renderUserBlock('Wade Warren', './img/avatar.png', 1);
  renderUserBlock(user.userName, user.avatarUrl, favoritesAmount);
  renderSearchFormBlock(checkIn, checkOut);
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    }
  );
});
