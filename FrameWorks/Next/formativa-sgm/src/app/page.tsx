"use client";

//direcionar par página de login

export default function Home(){
  
  //useeffect - criar um usuario admin para carregar o site
  return(
    <div>
      <h1>Bem-Vindo ao Sistema De Gestão de Manutenção</h1>
      <p>Por favor, faça login para continuar.</p>
      <a href="/login">Ir para Login</a>
    </div>
  );
}