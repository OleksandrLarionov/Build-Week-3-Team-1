import { Col, Row } from 'react-bootstrap'
import People from './People'
import Setup from './Setup'
import InLearning from './InLearning'
import Advertising from './Advertising'

const Aside = () => {
  return (
    <>
      <Row>
        <Col sm={10} md={4} lg={3} xl={2}>
          <Setup />
          <People />
          <InLearning />
          <Advertising />
        </Col>
      </Row>
    </>
  )
}

export default Aside
