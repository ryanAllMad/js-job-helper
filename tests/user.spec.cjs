
const { test, expect } = require('@playwright/test');

// Ony Run These Tests if database has user
test.describe.serial('Run these tests in order', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.reload();
    await page.waitForSelector('[id="add-links-button"]', { timeout: 30000})
  });
  test('Ensure user page loads', async ({ page }) => {
  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/JS Job Helper/);
    await page.getByRole('heading', {name: 'Your Info'}).click()
    await expect(page.getByRole('heading', {name: 'Your Info'})).toBeInViewport()
  
  });
  // run test with database existing user
  test('run when you have a user in the database', async ({ page }) => {
    await page.waitForSelector('[data-testid="full-name"]', { timeout: 30000})
    await page.getByTestId('full-name').click();
    await expect(page.getByTestId('full-name')).not.toBeEmpty()
  })
  
  // Test links interface
  test('to add new link, fill, and check save worked', async ({ page }) => {
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
    await page.waitForSelector('[id="add-links-button"]', { timeout: 30000})
    await expect(page.getByTestId('title-0')).not.toBeInViewport()
    await expect(page.getByTestId('href-0')).not.toBeInViewport()
  })
  test('find existing link, delete link, and save', async ({ page }) => {
    await page.getByRole('button', {name: 'Add Links?'}).scrollIntoViewIfNeeded()
    await page.getByPlaceholder('fake.com', { exact: false }).click()
    await expect(page.getByPlaceholder('fake.com', { exact: false })).toBeInViewport()
    // delete the fake link
    await page.getByTestId('links-Fake').click()
    await expect(page.getByPlaceholder('fake.com', { exact: false })).not.toBeInViewport()
  })
  test('add a new link then delete it', async ({ page }) => {
    await page.getByRole('button', {name: 'Add Links?'}).click()
    await page.getByTestId('title-0').fill('Fake')
    await expect(page.getByTestId('title-0')).not.toBeEmpty()
    // delete the new link
    await page.getByTestId('links-0').click()
    await expect(page.getByTestId('title-0')).not.toBeInViewport()
  })

  // test experience
  test('add new experience then delete', async ({page}) => {
    await page.getByRole('button', {name: 'Add Experience?'}).click()
    await page.getByTestId('company-name-0').fill('Job Co.')
    await expect(page.getByTestId('company-name-0')).not.toBeEmpty()
    // delete the new experience
    await page.getByTestId('experience-0').click()
    await expect(page.getByTestId('company-name-0')).not.toBeInViewport()
  })
  test('add new experience then that it saves', async ({page}) => {
    await page.getByRole('button', {name: 'Add Experience?'}).click()
    // fill out experience form
    await page.getByTestId('company-name-0').fill('Job Co.')
    await page.getByTestId('job-title-0').fill('Software Eng')
    // date inputs giving problems isn't working
    // tested by MUI just ignoring them since value is valid
    await expect(page.getByTestId('company-name-0')).not.toBeEmpty()
    await expect(page.getByTestId('job-title-0')).not.toBeEmpty()
    // test saved to DB
    await page.getByRole('button', {name: 'Save'}).click()
    await expect(page.getByRole('button', {name: 'Save'})).not.toBeDisabled()
    await page.reload();
    await page.waitForSelector('[type="submit"]', { timeout: 30000})
    //expect these new elements not to be there anymore since they're coming from DB
    await expect(page.getByTestId('company-name-0')).not.toBeInViewport()
    await expect(page.getByTestId('job-title-0')).not.toBeInViewport()
  })
})

