import FavoriteRestaurant from '../../data/favorite-restaurant';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="container-favorite"></div>
    <section class="content">
      <h2 class="content__label">The Favorite</h2>
      <div id="loading"></div>
          <div class="list">
              <div class="restaurants" id="restaurants"></div>
          </div>
    </section>`;
  },

  async afterRender() {
    const data = await FavoriteRestaurant.getAllRestaurants();
    const listContainer = document.querySelector('#restaurants');

    if (data.length === 0) {
      listContainer.innerHTML = `
        <h3 class="restaurant-item__not__found">You dont have one yet</h3>`;
    } else {
      data.forEach((restaurant) => {
        listContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
