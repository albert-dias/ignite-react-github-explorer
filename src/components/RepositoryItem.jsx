export function RepositoryItem ({repository}) {
  return (
    <li key={repository.name}>
      <strong>{repository.name ?? 'Default'}</strong>
      <p>{repository.description}t</p>
      <a href={repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}
