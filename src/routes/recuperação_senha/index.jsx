import './recuperação_senha.css';

export default function Rec_senha() {
  return (
    <>
      <div className="hero">


        <section className="mainContent">

          <div className="Images">

            <a href="#"><img src="./img/portoseguro.png" alt="Logo da Porto"/></a>
            <a href="#"><img src="./img/sair.png" alt="foto sair"/></a>
            <a href="#"><img src="./img/perfil.png" alt="foto perfil"/></a>
          </div>

          <div className="card">
            <form name="frm01" method="get">

              <input type="hidden" name="txtOculto" value="ValorOculto" />

              <fieldset>

                <legend>Recuperação Senha</legend>

                <div>
                  <label htmlFor="idEmail">Email Cadastrado:</label>
                  <input type="text" name="txtEmail" id="idEmail" placeholder="Email Cadastrado" />
                </div>

               
                <div id="buttons">
                  <button type="submit" id="btnReenviar">Reenviar Senha</button>
                </div>

              </fieldset>

            </form>

            <nav>
              <a href="./Login/index.jsx">Sair</a>
            </nav>
            
          </div>
        </section>
      </div>
    </>
  );
}

