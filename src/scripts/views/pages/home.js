import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantItemTemplate,
  createLoaderTemplate,
  createOfflineTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <app-hero></app-hero>
      <section class="content">
        <h2 class="content__label">The Famous</h2>
        <div id="loading"></div>
            <div class="list">
                <div class="restaurants" id="restaurants"></div>
            </div>
      </section>`;
  },

  async afterRender() {
    const loaderElement = document.querySelector('#loading');
    const bodyContent = document.querySelector('#restaurants');
    loaderElement.innerHTML = createLoaderTemplate();
    bodyContent.innerHTML = '';

    try {
      const restaurants = await RestaurantSource.listRestaurants();
      restaurants.forEach((restaurant) => {
        bodyContent.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      loaderElement.style.display = 'none';
    } catch (err) {
      loaderElement.innerHTML = createOfflineTemplate();
    }
  },
};

export default Home;
