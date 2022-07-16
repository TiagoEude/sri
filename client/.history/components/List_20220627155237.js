import { Table, Button } from "reactstrap";
import toDate from "../lib/toDate";
import PaginationApp from "./PaginationApp";

function List(props) {
  const data = props.data;

  if (data && data.length) {
    return (
      <>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Documento</th>
            </tr>
          </thead>
          <tbody>
            {searchQuery.map((pub) => (
              <tr key={pub.id}>
                <th scope="row">{pub.id}</th>
                <td>{pub.documento}</td>
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
