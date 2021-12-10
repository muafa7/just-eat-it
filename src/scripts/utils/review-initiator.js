import RestaurantSource from '../data/restaurant-source';

const PostReview = (url, name, review) => {
  const dataReview = {
    id: url.id,
    name,
    review,
  };

  RestaurantSource.postReview(dataReview);

  const reviewContainer = document.querySelector('.review__list');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);

  const newReview = `
    <div class="review__container">
      <h3>${name}</h3>
      <h4>${date}</h4>
      <p> ${review}</p>
    </div>
  `;

  reviewContainer.innerHTML += newReview;
};

export default PostReview;
