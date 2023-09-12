import './perfil.css'; // Importe seu arquivo CSS

export default function PaginaPerfil() {
  return (
    <>
      <h2 className="ola">Olá, Nome</h2>
      <section className="PgnPerf">
        <img
          className="imagem-perfil"
          src="./img/perfil.png"
          alt="Imagem de perfil"
        />
        <h2 className="status-seguro">Status do Seguro</h2>
        <h1 className="ajuda">Ajuda ?</h1>
        <h2 className="dados-pessoais">Dados Pessoais</h2>
        <h2 className="detalhes-seguro">Detalhes do Seguro</h2>
        <h2 className="contato">Contato</h2>
        <h2 className="termos-uso">Termos de Uso</h2>
        <img
          className="imagem-sair"
          src="./img/sair.png"
          alt="Imagem de sair"
        />
        <h2 className="texto-sair">Sair</h2>
      </section>
    </>
  );
}