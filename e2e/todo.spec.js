// @ts-check
const { test, expect } = require('@playwright/test');

const URL = 'http://localhost:3000';

test('has title', async ({ page }) => {
  await page.goto(URL);

  // Expect a title "to contain" a substring.
  await expect(page.getByTestId('app-title')).toContainText('My todos');
});

test('add and remove todo', async ({ page }) => {
  await page.goto(URL);

  // focus the todo input
  await page.getByTestId('add-todo-input').focus();

  // fill in todo title
  await page.getByTestId('add-todo-input').fill('This is a demo todo title');

  // click the add-todo button
  await page.getByTestId('add-todo-btn').click();

  // expects that there are now two list items
  await expect(page.getByRole('listitem')).toHaveCount(2);

  // expects that the list item contains the given text
  await expect(page.getByRole('listitem').nth(1)).toContainText(
    'This is a demo todo title'
  );

  // delete the first todo
  await page.getByTestId('remove-todo-btn').nth(0).click();

  // expects that there are now one list item
  await expect(page.getByRole('listitem')).toHaveCount(1);

  // expects that the remaining list item is the previously added one
  await expect(page.getByRole('listitem').nth(0)).toContainText(
    'This is a demo todo title'
  );

  // delete the last todo
  await page.getByTestId('remove-todo-btn').nth(0).click();

  // expect that the list is not rendered
  await expect(page.getByTestId('todo-list')).not.toBeVisible();

  await expect(page.getByRole('paragraph')).toContainText('Nothing todo...');
});
