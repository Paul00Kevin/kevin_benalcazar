// Funcionamiento del test
const suma = (a, b) => a + b;

test('la suma de 2 + 3 debe ser 6', () => {
  expect(suma(2, 3)).toBe(6);
});

test('la suma de números negativos funciona correctamente', () => {
  expect(suma(-2, -3)).toBe(-5);
});
