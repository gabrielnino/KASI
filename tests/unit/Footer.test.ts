import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Footer.astro Component', () => {
  const filePath = path.resolve(__dirname, '../../src/shared/components/Footer.astro');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  it('should exist', () => {
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it('should include correct path for white logo', () => {
    expect(fileContent).toContain('/assets/logos/kasi_white.png');
  });

  it('should contain copyright notice for Kroma AI Systems Inc.', () => {
    expect(fileContent).toContain('Kroma AI Systems Inc.');
    expect(fileContent).toContain('new Date().getFullYear()');
  });

  it('should reflect corporate headquarters location via translation lookup', () => {
    expect(fileContent).toContain("t('footer.location')");
  });

  it('should display the bilingual corporate motto in English', () => {
    expect(fileContent).toContain('We are not perfect, but we KASI always deliver.');
  });
});
