interface RepositoryItemProps {
    repository:{
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return(
        <li>
            <strong>Repositório: {props.repository?.name ?? 'Default'}</strong>
            <p>Descrição: {props.repository.description}</p>
            <a href={props.repository.html_url} target="_blank">
             Link de acesso ao repositório
            </a>
        </li>
    );
}