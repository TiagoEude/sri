import { Table, Button } from "reactstrap";
import toDate from "../lib/toDate";
import PaginationApp from "./PaginationApp";

function List(props) {
  const data = props.data;
  const query = props.query;

  if (data && data.length) {
    const dataFiltered = data.filter((doc) =>
      doc.attributes.text.toLowerCase().includes(query)
    );
  }

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
          {data.map((doc) => (
            <tr key={doc.id}>
              <th scope="row">{doc.id}</th>
              <td>{doc.attributes.texto}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default List;
