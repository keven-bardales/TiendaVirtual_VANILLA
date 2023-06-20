export const InicioSesion = () => {
  return `
  <section>  
  <form id="loginForm">
  <input class="inputLogin"  placeholder="Usuario" required>
  <input class="inputLogin"  type="password" placeholder="Contraseña" required>
  <button type="submit">Iniciar sesión</button>
</form>

<p>¿No tienes una cuenta? <a id="btnRegistrarse" href="#">Regístrate</a></p>
  </section>
    `
}
