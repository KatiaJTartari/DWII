//import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

const repository = {
    name: "Atividade",
    description: "Descrição da Atividade",
    link: "https://github.com/KatiaJTartari"
  //link: "https://github.com/santicioli"
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
            </ul>
        </section>       
    )
}


/* Esse trecho não será mais usado, pois o arquivo Counter.jsx foi desabilitado:
export function RepositoryList(){
    return(
        <>
        <RepositoryItem repository={repository} />
        <Counter /> 
        </ >       
    )
}
*/