import * as main from "./main";

test('debe devolver un saludo', () => {
    expect(main.saludar()).toBe('Buenas tardes');
  });