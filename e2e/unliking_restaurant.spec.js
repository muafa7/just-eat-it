const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('You dont have one yet', '.restaurant-item__not__found');
});

Scenario('unliking one restaurant', async ({ I }) => {
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
  const unlikedRestaurantName = await I.grabTextFrom('.restaurants__name');
  assert.strictEqual(firstRestaurantName, unlikedRestaurantName);

  I.seeElement('.restaurants__name');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  
  I.see('You dont have one yet', '.restaurant-item__not__found');
});