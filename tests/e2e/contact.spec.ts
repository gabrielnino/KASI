import { test, expect } from '@playwright/test';

test.describe('Intake Flow and Contact Form', () => {
  test('should load contact page, allow filling out the form, and display success message', async ({ page }) => {
    // 1. Navigate to contact page
    await page.goto('/contact');

    // 2. Verify header is visible and correct
    const mainHeader = page.locator('.contact-info-block h1');
    await expect(mainHeader).toBeVisible();
    await expect(mainHeader).toContainText("Let's talk real engineering");

    // 3. Fill form inputs
    await page.fill('#name', 'Luis Gabriel Nino');
    await page.fill('#email', 'gabriel@kroma.ai');
    await page.fill('#company', 'Kroma AI Systems Inc.');
    await page.selectOption('#service', 'ai');
    await page.fill('#message', 'We need to engineer a fault-tolerant data pipeline with massive daily data volume processing.');

    // 4. Submit form
    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeEnabled();
    await submitBtn.click();

    // 5. Verify success container is visible
    const successContainer = page.locator('#success-container');
    await expect(successContainer).toBeVisible();
    await expect(successContainer).toContainText('Requirements Received!');

    // 6. Verify original form is hidden
    const formContainer = page.locator('#form-container');
    await expect(formContainer).toBeHidden();
  });

  test('should block submission with incomplete fields due to native HTML validation', async ({ page }) => {
    await page.goto('/contact');

    // Fill only name, leave email empty
    await page.fill('#name', 'Test User');
    
    // Attempt submit
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();
    
    // Success container should not be shown
    const successContainer = page.locator('#success-container');
    await expect(successContainer).toBeHidden();
  });
});
