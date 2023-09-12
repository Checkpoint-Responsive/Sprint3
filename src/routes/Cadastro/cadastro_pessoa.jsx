export default function PaginaCadastro(){
    return (
<>
<header>
    <h1>Cadastro Proprietário</h1></header>

<main>
        <section className="Cadastro_Prop">
        <h2>Cadastre-se</h2>
        <input type="text" id="Name" >Digite seu Nome Completo</input>
        <input type="text" id="cpf">Digite seu CPF</input>
        <input type="text" id="rg">Digite seu RG</input>
        <input type="text" id="endereco">Digite seu Endereço</input>
        <input type="email" id="email">Digite seu Email</input>
        <input type="password" id="senha">Digite sua Senha</input>
        <input type="email" id="conf_email">Confirme seu Email</input>
        <input type="password" id="conf_senha">Confirme sua Senha</input>
        </section>
</main>


</>
    )
}