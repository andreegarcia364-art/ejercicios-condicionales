{
  const temperatura = 18; // °C

  if (temperatura < 10) {
    console.log("6. Hace frío");
  } else if (temperatura < 25) {
    // Aquí ya sabemos que es 10 o más, así que cubre de 10 a 24
    // (y también decimales como 24.5)
    console.log("6. Clima templado");
  } else {
    console.log("6. Hace calor");
  }
}
