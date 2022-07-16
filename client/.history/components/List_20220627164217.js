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
          {data.forEach((doc) => (
            <tr key={.id}>
              <th scope="row">{doc.id}</th>
              <td>{doc.attributes.text}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default List;
