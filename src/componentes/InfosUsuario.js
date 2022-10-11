import React from "react"
import Perfil from "./download.png"

export function InfosUsuario(){
    const usuario = "Lucas"
    return (
        <>
        <p>
    <img src={Perfil} id="foto"/>
    <h3>Nome de usuário: {usuario}</h3>
    </p>
        </>
    )
}