import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

//https://api.github.com/orgs/rocketseat/repos

/* const repository = {
    name: 'uniform',
    description: 'Forms is React',
    link:'https://github.com/unform/unform'
    
} */

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  
  const [ repositories, setRepositoriess ] = useState<Repository[]>([]);
  
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositoriess(data))
  }, [])

    return (
       <section className="repository-list">
          <h1>Lista de repositórios</h1>
          <ul>
            {repositories.map(repository =>{
              return  <RepositoryItem key={repository.name} repository={repository} />
            })}
          </ul> 
       </section>
    )
}
