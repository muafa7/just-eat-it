import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
    <div class="detail__restaurant">
        <div>
            <img class="lazyload" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}">
        </div>
        <h1 class="detail__name">${restaurant.name}</h1>
        <div>
            <h2>Description </h2>
            <p>${restaurant.description}</p>
        </div>
        <div>
            <h2>Address</h2>
            <p>${restaurant.address}, ${restaurant.city}</p>
        </div>
        <div>
            <h2>Rating</h2>
            <p>Rating : <span>${restaurant.rating}</span></p>
        </div>
        <div>
            <h2>Categories</h2>
            <p>${restaurant.categories.map((category) => `<span class="detail__category"> ${category.name}</span>`).join(', ')}</p>
        </div>
    </div>
    <div class="detail__menu">
        <h2>Menu</h2>
        <div>
            <h3>Makanan</h3>
            <ul>
                ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
        </div>
        <div">
            <h3>Minuman</h3>
            <ul>
                ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
        </div>
    </div>
    <div class="review">
    <h2>Reviews</h2>
    <div class="review__list">
        ${restaurant.customerReviews.map((review) => `<div class="review__container">
                <h3 class="review__name">${review.name}</h3>
                <h4>${review.date}</h4>
                <p class="review__detail"> ${review.review}</p>
        </div>`).join('')}
    </div>
    </div>
</div>
<div class="form">
  <form>
    <div class="form__body">
      <label for="reviewerName" class="form__label">Name</label>
      <input name="reviewerName" type="text" class="form__input" id="reviewerName">
    </div>
    <div class="form__body">
      <label for="review" class="form__label">Review</label>
      <textarea name="review" cols="10 " rows="10 " class="form__input" id="review"></textarea>
    </div>
    <button id="submitReview" type="submit">Send</button>
  </form>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurants__item" tabindex="0">
        <div class="restaurants__image" tabindex="0">
            <img width="350px" height="350px" class="lazyload" tabindex="0" src="" data-src="${CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="restaurants__content" tabindex="0">
            <a class="restaurants__name" tabindex="0" href="#/detail/${restaurant.id}">${restaurant.name}</a>
            <h4 tabindex="0">Rating : <span>${restaurant.rating}<span></h4>
            <p tabindex="0">${restaurant.description}</p>
        </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoaderTemplate = () => '<div class="loader"></div>';

const createOfflineTemplate = () => `
    <div class="content">
    <h1>You are offline, please check your connection</h1>
    </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLoaderTemplate,
  createOfflineTemplate,
};
