import {
  Table,
  Button
} from 'reactstrap';
import toDate from '../lib/toDate';
import PaginationApp from './PaginationApp';

function List(props) {
  const query = props.query;
  const search = props.search;

  if (query && query.length) {
    const searchQuery = query.filter((query) => (
      query.descricao.toLowerCase().includes(search)
      
    ));
    if (searchQuery != 0) {
      const url = process.env.NEXT_PUBLIC_API_URL || "https://legislacao-backend-app.herokuapp.com";

      const date = new Date()
      return (
        <>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Data de Publicação</th>
                <th>Baixar</th>
              </tr>
            </thead>
            <tbody>
              { searchQuery.map((pub) => (
                <tr key={ pub.id }>
                  <th scope="row" >{ pub.id }</th>
                  <td>{ pub.tipo }</td>
                  <td>{ pub.descricao }</td>
                  <td>{ toDate(pub.data_publicacao) }</td>
                  <td>
                    { pub.arquivo[0] != undefined && <Button outline color="danger" href={ url + pub.arquivo[0].url }>Arquivo PDF</Button> }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      );
    } else {
      return <h1>Sem resultado</h1>;
    }
  } else {
    return <h1>Sem resultado</h1>;
  }
}

export default List;