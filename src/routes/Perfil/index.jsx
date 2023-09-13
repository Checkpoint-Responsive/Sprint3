import React from 'react';
import './perfil.css';

export default function PaginaPerfil() {
    return (
        <>
            <h2>Olá, Nome</h2>
            <section className="PgnPerf">
                <img src="./img/perfil.png" alt="Perfil" />
                <h2>Status do Seguro</h2>
                <h1>Ajuda?</h1>
                <h2>Dados Pessoais</h2>
                <h2>Detalhes do Seguro</h2>
                <h2>Contrato</h2>
                <h2>Termos de Uso</h2>
                <img src="./img/sair.png" alt="Sair" />
                <h2>Sair</h2>
            </section>
        </>
    )
}