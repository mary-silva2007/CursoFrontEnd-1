// Pega a String de Conexão nas Variaveis de Ambente do Projeto(Environment)


//RESUMO DOS PASSOS:

//1 passo - criar o endereço de conexão
//2 passo - criar o cache (armazenar a conexão ao longo do projeto)
//3 passo - verificar se já existe uma conexão estabelecida com o DATABASE
//4 passo - verifica se não existe uma promessa de conexão em andamento, E CRIA UMA PROMESSA
//5. com a promise criada, estabele uma conexão com o banco


import mongoose from "mongoose";
import { cache } from "react";

//transforma texto em uma endereço URL (URI)
const MONGODB_URI = process.env.DATABASE_URL; //1

if (!MONGODB_URI) {
  throw new Error("Defina o DATABASE_URL no .env.local");
}

//2 passo 

// cache do sistema (mongoose), armazenar a as conexões já estabelecidads
let cached = (global as any).mongoose; 

//se cached não existir (primeira vez que acesso ao site)
if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectMongo() {
  //Verificar se Conexão já existe, se já existe retorna a propria conexão

  //3 passo
  if (cached.conn) return cached.conn; //3
  //verificar se não existe uma promessa de conexão em andamento
  if (!cached.promise) { //4
    //isso é nulo - se for nulo, cria uma nova conexão
    //se não for nulo, aguarda a promessa ser resolvida
    //se for nulo, cria uma nova conexão
    const aguard = { bufferCommands: false };
    //crio uma promisa de conexão
    cached.promise = mongoose.connect(MONGODB_URI!, aguard).then((mongoose) => {
      console.log("Conectado ao Mongo");
      return mongoose;
    });
  }

  //aguardar a conexão ser criada
  //pra aguardar a promessa ser resolvida

  try { //5
    //cria a conexão A PARTIR da promessa que estava pendente
    cached.conn = await cached.promise;
  } catch (error) {
    //se conexão falhar
    cached.promise = null;
    throw error; // lança o erro para o view
  }

  return cached.conn;
}

//transforma em um componente reutilizável
//função que conecta ao MongoDB
//se já estiver conectado, retorna a conexão existente
//se não estiver conectado, cria uma nova conexão
export default connectMongo; 


