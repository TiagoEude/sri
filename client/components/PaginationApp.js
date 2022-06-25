import React from 'react';
import { 
  Container, 
  Pagination, 
  PaginationItem, 
  PaginationLink,
  Col
} from 'reactstrap';

function PaginationApp (props) {
  return (
    <Container >
    <Col sm="12" md={{ size: 12, offset: 5 }}>
      <Pagination aria-label="Page navigation">

      <PaginationItem>
        <PaginationLink first href="/municipio/1/page/1" />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink previous href="/municipio/1/page/2" />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink href="/municipio/1/page/3">
          3
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink next href="/municipio/1/page/4" />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink last href="/municipio/1/page/5" />
      </PaginationItem> 
      
    </Pagination>
    </Col>
      
  </Container >
  );
}

export default PaginationApp;
