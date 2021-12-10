const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 5);
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('You dont have one yet', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurants__name');
  const firstRestaurant = locate('.restaurants__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants__item');
  const likedRestaurantName = await I.grabTextFrom('.restaurants__name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});