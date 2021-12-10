const assert = require('assert');

Feature('Sending Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('make a review', async ({ I }) => {
  const name = 'Buntut Lele Goreng Lover';
  const review = 'Es teh manisnya kurang pedas';

  I.seeElement('.restaurants__name');
  const firstRestaurant = locate('.restaurants__name').first();
  I.click(firstRestaurant);

  I.seeElement('.form');
  I.fillField('Name', name);
  I.fillField('Review', review);
  I.seeElement('#submitReview');
  I.click('#submitReview');

  I.waitForElement('.review__name', 2);
  const postedReviewerName = locate('.review__name').last();
  const postedReviewerNameText = await I.grabTextFrom(postedReviewerName);
  assert.strictEqual(name, postedReviewerNameText);
  
  I.waitForElement('.review__detail', 2);
  const postedReview = locate('.review__detail').last();
  const postedReviewText = await I.grabTextFrom(postedReview);
  assert.strictEqual(review, postedReviewText);
});