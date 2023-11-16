import { Col } from "react-bootstrap";
import People from "../../AsideComponents/People";
import Setup from "../../AsideComponents/Setup";
import InLearning from "../../AsideComponents/InLearning";
import Advertising from "../../AsideComponents/Advertising";

const Aside = () => {
  return (
    <>
      <Col xs={12} sm={12} md={3} lg={3} xl={3} className="px-0 position-relative">
        <Setup />
        <People />
        <InLearning />
        <Advertising />
      </Col>
    </>
  );
};

export default Aside;
