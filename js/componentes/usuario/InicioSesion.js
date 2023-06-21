export const InicioSesion = () => {
  return `
  <section class="sectionLogin">  

  <div class="contenedor">
  <form id="loginForm">
  <input class="inputLogin"  placeholder="Usuario" required>
  <input class="inputLogin"  type="password" placeholder="Contraseña" required>
  <button type="submit">Iniciar sesión</button>
</form>
<p>¿No tienes una cuenta?</p>
<a id="btnRegistrarse" href="#">Regístrate</a>
</div>
  </section>
    `
}
