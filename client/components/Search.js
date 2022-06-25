import { useState } from "react";
import {
  Row,
  Col,
  Input,
  InputGroupAddon,
  InputGroup
} from "reactstrap";

function Search(props) {
  const updateQuery = props.search;
  const queryValue = props.searchValue;
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="search">
            <InputGroup>
              <InputGroupAddon addonType="append">Buscar</InputGroupAddon>
              <Input
                onChange={e => updateQuery(e.target.value.toLocaleLowerCase())}
                value={ queryValue }
              />
            </InputGroup>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  );
}

export default Search;