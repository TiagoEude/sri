import { Table, Button } from "reactstrap";
import toDate from "../lib/toDate";
import PaginationApp from "./PaginationApp";

function List(props) {
  const query = props.query;
  const search = props.search;

  if (query && query.length) {
    const searchQuery = query.filter((query) =>
      query.descricao.toLowerCase().includes(search)
    );

    return (
      <>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {searchQuery.map((pub) => (
              <tr key={pub.id}>
                <th scope="row">{pub.id}</th>
                <td>{pub.descricao}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  } else {
    return <h1>Sem resultado</h1>;
  }
}

export default List;
