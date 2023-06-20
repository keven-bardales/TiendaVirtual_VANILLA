export const Registrarse = (desdeCarrito) => {
  return `
      <section>  
        <form id="registrationForm">
        ${desdeCarrito ? '<h3>Debes Iniciar Sesion Para comprar</h3>' : ''}
          <input class="inputRegister"  placeholder="Usuario"  required>
          <input class="inputRegister"  type="password" placeholder="Contraseña" required>
          <input class="inputRegister"  placeholder="Nombre" required>
          <input class="inputRegister"  type="email" placeholder="Email"  required>
          <button id="btnRegistrarse" type="submit">Registrarse</button>
        </form>
        
        <p>¿Ya tienes una cuenta? <a data-sesion='login' id="btnInicioSesion" href="#">Inicia sesión</a></p>
      </section>
    `
}

/* { username, password, nombre, email } */
