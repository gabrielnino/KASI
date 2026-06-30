import { test, expect } from '@playwright/test';

test.describe('Flujo de Captación y Formulario de Contacto', () => {
  test('debe cargar la página de contacto, permitir rellenar el formulario de admisión y mostrar el mensaje de éxito', async ({ page }) => {
    // 1. Navegar a la página de contacto
    await page.goto('/contact');

    // 2. Verificar que la cabecera e información inicial cargan correctamente en el bloque de contenido
    const mainHeader = page.locator('.contact-info-block h1');
    await expect(mainHeader).toBeVisible();
    await expect(mainHeader).toContainText('Hablemos de ingeniería real');

    // 3. Rellenar los campos del formulario
    await page.fill('#name', 'Luis Gabriel Niño');
    await page.fill('#email', 'gabriel@kroma.ai');
    await page.fill('#company', 'Kroma AI Systems Inc.');
    await page.selectOption('#service', 'ai');
    await page.fill('#message', 'Necesitamos instrumentar un pipeline de datos tolerante a fallas con procesamiento de volumen masivo diario.');

    // 4. Enviar el formulario
    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeEnabled();
    await submitBtn.click();

    // 5. Validar que aparece el contenedor de éxito
    const successContainer = page.locator('#success-container');
    await expect(successContainer).toBeVisible();
    await expect(successContainer).toContainText('¡Requerimientos Recibidos!');

    // 6. Validar que el formulario original se ha ocultado
    const formContainer = page.locator('#form-container');
    await expect(formContainer).toBeHidden();
  });

  test('debe bloquear envíos con campos incompletos por validación HTML nativa', async ({ page }) => {
    await page.goto('/contact');

    // Rellenamos solo el nombre y dejamos los demás vacíos
    await page.fill('#name', 'Usuario de Prueba');
    
    // Al intentar enviar, el validador nativo debería bloquear el submit (el éxito no debe aparecer)
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();
    
    const successContainer = page.locator('#success-container');
    await expect(successContainer).toBeHidden();
  });
});
