{
  const usuario = "admin";
  const password = "1234";

  if (usuario === "admin") {
    if (password === "1234") {
      console.log("9. Acceso concedido");
    } else {
      console.log("9. Password incorrecta");
    }
  } else {
    console.log("9. Usuario no encontrado");
  }
}
