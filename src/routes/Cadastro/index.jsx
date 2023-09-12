export default function PaginaCadastro(){
    return (
<>
<header>
    <h1>Cadastro da bike</h1></header>

<main>

    <section className="cadastro">
            <div className="box">
                <p>Tire uma foto da bicicleta</p>
                <button className="btnEnviar">Enviar</button>
            </div>
            <div className="box">
                <p>Tire uma foto do guidão</p>
                <button className="btnEnviar">Enviar</button>
                </div>
            <div className="box">
                <p>Tire uma foto da bicicleta</p>
                <button className="btnEnviar">Enviar</button>
                </div>
            <div className="box">
                <p>Tire uma foto das rodas</p>
                <button className="btnEnviar">Enviar</button>
            </div>
            <div className="box">
                <button className="btnEnviar">Sair</button>
            </div>
    </section>
</main>
</>
    )
}