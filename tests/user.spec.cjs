
const { test, expect } = require('@playwright/test');

// Ony Run These Tests if database has user 

test('Ensure user page loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
// Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/JS Job Helper/);
  await page.getByRole('heading', {name: 'Your Info'}).click()
  await expect(page.getByRole('heading', {name: 'Your Info'})).toBeInViewport()

});

test.describe.serial('Run these tests in order', () => {
  // run test with database existing user
  test('run when you have a user in the database', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('[data-testid="full-name"]')
    await page.getByTestId('full-name').click();
    await expect(page.getByTestId('full-name')).not.toBeEmpty()
  })
  
  // Test links interface
  test('to add new link, fill, and save', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('[id="add-links-button"]')
    await page.getByRole('button', {name: 'Add Links?'}).click()
    await page.getByTestId('title-0').click()
    await expect(page.getByTestId('title-0')).toBeEmpty()
    await page.getByTestId('title-0').fill('Fake')
    await page.getByTestId('href-0').fill('fake.com')
    await expect(page.getByTestId('title-0')).not.toBeEmpty()
    await expect(page.getByTestId('href-0')).not.toBeEmpty()
    await page.getByRole('button', {name: 'Save'}).click()
    // test saved to DB
    await page.reload();
    await page.waitForSelector('[id="add-links-button"]')
    await expect(page.getByTestId('title-0')).not.toBeInViewport()
    await expect(page.getByTestId('href-0')).not.toBeInViewport()
  })
  test('find existing link, delete link, and save', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.reload();
    await page.waitForSelector('[id="add-links-button"]')
    await page.getByRole('button', {name: 'Add Links?'}).scrollIntoViewIfNeeded()
    await page.getByPlaceholder('fake.com', { exact: false }).click()
    await expect(page.getByPlaceholder('fake.com', { exact: false })).toBeInViewport()
    // delete the fake link
    await page.getByTestId('Fake').click()
    await expect(page.getByPlaceholder('fake.com', { exact: false })).not.toBeInViewport()
  })
  test('add a new link then delete it', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.reload();
    await page.waitForSelector('[id="add-links-button"]')
    await page.getByRole('button', {name: 'Add Links?'}).click()
    await page.getByTestId('title-0').fill('Fake')
    await expect(page.getByTestId('title-0')).not.toBeEmpty()
    // delete the new link
    await page.getByTestId('0').click()
    await expect(page.getByTestId('title-0')).not.toBeInViewport()
  })
})


// Run tests when database has no user
//test('run when you dont have a user in the database', async ({ page }) => {
  
//  await page.goto('http://localhost:3000');

//  await page.getByLabel('Full Name').click();
//  await expect(page.getByLabel('Full Name')).toBeEmpty()
//})
