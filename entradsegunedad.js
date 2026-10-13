{
  const edad = 20;
  const tieneEntrada = true; // true o false

  if (edad < 18) {
    console.log("8. No puedes entrar");
  } else {
    // Es mayor de edad: ahora se revisa si tiene entrada
    if (tieneEntrada) {
      console.log("8. Bienvenido");
    } else {
      console.log("8. Debes comprar una entrada");
    }
  }
}
