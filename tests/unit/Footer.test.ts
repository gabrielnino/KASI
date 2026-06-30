import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Componente Footer.astro', () => {
  const filePath = path.resolve(__dirname, '../../src/shared/components/Footer.astro');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  it('debe existir el archivo del componente', () => {
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it('debe incluir la ruta correcta del logotipo blanco de KASI', () => {
    expect(fileContent).toContain('/assets/logos/kasi_white.png');
  });

  it('debe contener el aviso de propiedad intelectual legal de Kroma AI Systems Inc.', () => {
    expect(fileContent).toContain('Kroma AI Systems Inc.');
    expect(fileContent).toContain('new Date().getFullYear()'); // Validamos que el año sea dinámico
  });

  it('debe reflejar la presencia geográfica en Vancouver, BC, Canadá', () => {
    expect(fileContent).toContain('Vancouver');
    expect(fileContent).toContain('BC');
    expect(fileContent).toContain('Canadá');
  });

  it('debe mostrar el lema o lema corporativo en español con el adverbio "KASI"', () => {
    expect(fileContent).toContain('No somos perfectos, pero KASI siempre lo logramos.');
  });
});
