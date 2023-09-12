<link rel="stylesheet" href="/cadastro_pessoa.css"></link>
export default function PaginaCadastro() {
    return (
        <>
            <header>
                <h1>Cadastro Proprietário</h1>
            </header>
            <main>
                <section className="Cadastro_Prop">
                    <h2>Cadastre-se</h2>
                    <input type="text" id="Name" className="custom-input" placeholder="Digite seu Nome Completo" />
                    <input type="text" id="cpf" className="custom-input" placeholder="Digite seu CPF" />
                    <input type="text" id="rg" className="custom-input" placeholder="Digite seu RG" />
                    <input type="text" id="endereco" className="custom-input" placeholder="Digite seu Endereço" />
                    <input type="email" id="email" className="custom-input" placeholder="Confirme seu Email" />
                    <input type="password" id="senha" className="custom-input" placeholder="Digite sua Senha" />
                    <input type="email" id="conf_email" className="custom-input" placeholder="Confirme seu Email" />
                    <input type="password" id="conf_senha" className="custom-input" placeholder="Confirme sua Senha" />
                    <img src="./img/pefil.png" alt="Perfil" />
                    <h1>Tire Sua Foto</h1>
                    <img src="./img/sair.png" alt="Sair" />
                </section>
            </main>
        </>
    )
}