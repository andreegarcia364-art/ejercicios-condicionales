{
  const totalCompra = 120000;
  const esCliente = true; // true o false
  let descuento = 0;      // porcentaje

  if (totalCompra > 100000) {
    if (esCliente) {
      descuento = 20;
    } else {
      descuento = 10;
    }
  } else {
    if (esCliente) {
      descuento = 5;
    } else {
      descuento = 0;
    }
  }

  const valorDescuento = totalCompra * descuento / 100;
  const totalFinal = totalCompra - valorDescuento;

  console.log(`10. Descuento aplicado: ${descuento}% ($${valorDescuento.toLocaleString("es-CO")})`);
  console.log(`    Total final: $${totalFinal.toLocaleString("es-CO")}`);
}
