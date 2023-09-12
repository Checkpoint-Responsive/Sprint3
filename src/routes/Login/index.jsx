import './login.css';

export default function PaginaLogin() {
  return (
    <>
      <div className="hero">


        <section className="mainContent">

          <div className="Images">

            <a href="#"><img src="./img/portoseguro.png" alt="Logo da Porto"/></a>
            <a href="#"><img src="./img/perfil.png" alt="foto perfil"/></a>
          </div>

          <div className="card">
            <form name="frm01" method="get">

              <input type="hidden" name="txtOculto" value="ValorOculto" />

              <fieldset>

                <legend>Login</legend>

                <div>
                  <label htmlFor="idUserName">Username:</label>
                  <input type="text" name="txtUserName" id="idUserName" placeholder="UserName" />
                </div>

                <div>
                  <label htmlFor="idPassword">Senha:</label>
                  <input type="text" name="txtpassword" id="idpassword" placeholder="Senha" />
                </div>

                <div id="buttons">
                  <button type="submit" id="btnEntrar">Entrar</button>
                </div>

              </fieldset>

            </form>

            <nav>
              <a href="#">Esqueci minha senha</a>
              <a href="#">Cadastre-se</a>
            </nav>
            
          </div>
        </section>
      </div>
    </>
  );
