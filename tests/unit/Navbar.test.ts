import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Navbar.astro Component', () => {
  const filePath = path.resolve(__dirname, '../../src/shared/components/Navbar.astro');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  it('should exist', () => {
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it('should include correct path for white logo', () => {
    expect(fileContent).toContain('/assets/logos/kasi_white.png');
  });

  it('should contain CTA button for free consultation', () => {
    expect(fileContent).toContain('Free Consultation');
    expect(fileContent).toContain('/contact');
  });

  it('should contain primary navigation sections in English', () => {
    expect(fileContent).toContain('Home');
    expect(fileContent).toContain('Services');
    expect(fileContent).toContain('AI Systems');
    expect(fileContent).toContain('Cases');
    expect(fileContent).toContain('About Us');
  });

  it('should possess responsive structure classes and elements', () => {
    expect(fileContent).toContain('navbar');
    expect(fileContent).toContain('nav-menu');
    expect(fileContent).toContain('menu-toggle');
    expect(fileContent).toContain('bar');
  });
});
