import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

describe('Componente Navbar.astro', () => {
  const filePath = path.resolve(__dirname, '../../src/shared/components/Navbar.astro');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  it('debe existir el archivo del componente', () => {
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it('debe incluir la ruta correcta del logotipo blanco de KASI', () => {
    expect(fileContent).toContain('/assets/logos/kasi_white.png');
  });

  it('debe contener el botón de CTA para consultoría gratuita', () => {
    expect(fileContent).toContain('Consultoría Gratuita');
    expect(fileContent).toContain('/contact');
  });

  it('debe contener las secciones del menú de navegación base', () => {
    expect(fileContent).toContain('Inicio');
    expect(fileContent).toContain('Servicios');
    expect(fileContent).toContain('Sistemas AI');
    expect(fileContent).toContain('Casos');
    expect(fileContent).toContain('Nosotros');
  });

  it('debe poseer las clases y estructuras de diseño responsive', () => {
    expect(fileContent).toContain('navbar');
    expect(fileContent).toContain('nav-menu');
    expect(fileContent).toContain('menu-toggle');
    expect(fileContent).toContain('bar');
  });
});
