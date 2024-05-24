
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './subhead.css';

function SubHead() {
  return (
    <Container col4>
      <Row>
        <Col className='title-subhead'> Hãy nâng lên bản pro nào!</Col>
      </Row>
    </Container>
  );
}

export default SubHead;