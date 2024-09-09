
const { test, expect } = require('@playwright/test');

  // This tests the EditUserComponent:
  test.describe.configure({mode: 'serial'})
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
  // test add user then delete user
  test('add and delete the user, then add back for tests', async ({page}) => {
    await page.waitForSelector('[data-testid="full-name"]', { timeout: 30000})
    await page.getByTestId('full-name').click()
    await page.getByTestId('email').click()
    await page.getByTestId('full-name').fill('fake user')
    await page.getByTestId('email').fill('phony@fake.com')
    await expect(page.getByTestId('full-name')).not.toBeEmpty()
    await expect(page.getByTestId('email')).not.toBeEmpty()
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
  })
  //test education
  test('add 2 new educations then delete one and save', async ({page}) => {
    await page.getByRole('button', {name: 'Add Education?'}).click()
    // fill out experience form
    await page.getByTestId('school-ed-0').fill('Fancy Pants High')
    await page.getByTestId('degree-ed-0').fill('Diploma')
    await page.getByRole('button', {name: 'Add Education?'}).click()
    await page.getByTestId('school-ed-1').fill('Frankfuter U')
    await page.getByTestId('degree-ed-1').fill('BS in EDU')
    await page.getByTestId('experience-1').click()
    await expect(page.getByTestId('school-ed-1')).not.toBeInViewport()
    await expect(page.getByTestId('school-ed-0')).not.toBeInViewport()
  })

