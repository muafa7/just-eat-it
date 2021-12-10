import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createLoaderTemplate,
  createOfflineTemplate,
} from '../templates/template-creator';
import PostReview from '../../utils/review-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <section class="container">
          <div class="loading" id="loading">

          </div>
        <div class="main">
          <div id="detail__container">

          </div>
          <div class="like" id="likeButtonContainer"></div>
        </div>
        </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const ElementLoader = document.querySelector('#loading');
    const detailContainer = document.querySelector('#detail__container');
    ElementLoader.innerHTML = createLoaderTemplate();

    try {
      const data = await RestaurantSource.detailRestaurants(url.id);
      detailContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);
      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: data.restaurant,
      });

      ElementLoader.style.display = 'none';
    } catch (error) {
      ElementLoader.innerHTML = createOfflineTemplate();
    }

    const btnSubmit = document.querySelector('#submitReview');
    const nameInput = document.querySelector('#reviewerName');
    const reviewInput = document.querySelector('#review');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' && reviewInput.value === '') {
        // eslint-disable-next-line no-alert
        alert('Masukkan tidak boleh kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
