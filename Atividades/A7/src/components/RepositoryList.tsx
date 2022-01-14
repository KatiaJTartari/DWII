//import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useState, useEffect } from "react"

interface Repository{
    id: number;
    name: string;
    description: string;
    html_url: string;
}

/*Essa constante não será mais usada
const repository = {
    name: "Atividade",
    description: "Descrição da Atividade",
    link: "https://github.com/KatiaJTartari"
  //link: "https://github.com/santicioli"
}*/

export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/KatiaJTartari/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
            //Para testar: .then(data => console.log(data))
    }, [])

    //Para testar: console.log(repositories);

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map( repository => {
                    return <RepositoryItem repository={repository} key={repository.id}/>
                })}
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