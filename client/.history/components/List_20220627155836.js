import { Table, Button } from "reactstrap";
import toDate from "../lib/toDate";
import PaginationApp from "./PaginationApp";

function List(props) {
  const data = props.data;

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
          {data.forEach((pub) => (
            <tr key={pub.id}>
              <th scope="row">{pub.id}</th>
              <td>{pub.documento}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default List;
