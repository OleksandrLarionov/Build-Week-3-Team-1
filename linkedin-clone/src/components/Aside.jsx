import { Col } from "react-bootstrap";
import People from "./AsideComponents/People";
import Setup from "./AsideComponents/Setup";
import InLearning from "./AsideComponents/InLearning";
import Advertising from "./AsideComponents/Advertising";

const Aside = () => {
  return (
    <>
      <Col sm={10} md={4} lg={3} xl={2}>
        <Setup />
        <People />
        <InLearning />
        <Advertising />
      </Col>
    </>
  );
};

export default Aside;
