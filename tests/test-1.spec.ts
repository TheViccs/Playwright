import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dmercadolibre%26oq%3Dmercadolibre%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDUzMzdqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DLR5XaP7ZA-CMvMcP3KL0eQ&q=EhAoBhA-ABsYRg20LAIU2AXmGK283MIGIjBwyQYVejYJYe96J6whWWQ7p6GagAehKNYOrS6hL-nVHpSFh4vodPy6c77qI8fvuNsyAVJaAUM');
  await page.locator('iframe[name="a-did7yrfnhngr"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().getByRole('button', { name: 'Next' }).click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(4)').click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(4)').click();
  await page.locator('iframe[name="c-did7yrfnhngr"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('button', { name: 'Ahora no' }).click();
  await page.getByRole('link', { name: 'Mercado Libre México - Envíos' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('iphone');
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).press('Enter');
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).press('Enter');
  await page.getByRole('search').locator('button').click();
  await page.getByRole('link', { name: 'Apple iPhone 13 (128 GB) -' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
});