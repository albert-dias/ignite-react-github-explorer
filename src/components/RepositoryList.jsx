import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/albert-dias/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []); //



  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem repository={repository}/>
        })}
      </ul>
    </section>
  )
}
