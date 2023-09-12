import './login.css';
import { Link } from 'react-router-dom'
import {perfil} from '../../img/perfil.png';
import {logoporto} from '../../img/portoSeguro.png';
import {sair} from '../../img/sair.png';


export default function Login() {
  return (
    <>
    <main className="container">
      <div className="head">
          <img src={logoporto} alt="Logo da porto"/>
          <img src={perfil} alt="foto perfil"/>
      </div>
  
      <div>
          <form action="#">
              <div className="divInput">
                  <input type="text"  class="input"  name="txtRecSenha" id="idRecSenha" placeholder="Recuperação de Senha" />
              </div>
              <div className="divInput">
                  <input type="password"  class="input"  name="txtpassword" id="idpassword" placeholder="Senha" />
                </div>
  
                <div className="btn">
                  <button type="submit" class="btnEntrar">Entrar</button>
                </div>
                
                <div className="pLinks">
                  <p className="primeiroLink"><Link to="/recuperacao-senha">Esqueci minha senha</Link></p>
                  <p><Link to="/cadastro-pessoa">Cadastre-se</Link>
</p>
                </div>
          </form>
  
          
      </div>
      
  </main>
  <footer className="footer">
      <img src={logoporto} alt="logo porto seguro"/>
  </footer>
    </>
  )};