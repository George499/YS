import { Row, Col, Form, Button, Label, Input } from "reactstrap";
import Stars from "./Stars";

export default function DetailMain({ product }) {
  return (
    <>
      <h1 className="mb-4">{product.name}</h1>

      <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4 ">
        <div className="h4 font-weight-light mb-0 mb-sm-0 mr-5">
          {product.price} руб
        </div>
        <div className="d-flex align-items-center">
          <Stars
            stars={3}
            secondColor="gray-300"
            starClass="mr-1"
            className="mr-2"
          />

          <span className="text-muted text-uppercase text-sm mt-1">
            {/* {product.reviewscount} reviews */}
          </span>
        </div>
      </div>
      {/* <p className="mb-4 text-muted">{product.description.short}</p> */}

      <Row>
        <Col sm="6" lg="12" xl="6" className="detail-option mb-4">
          <h6 className="detail-option-heading">Услуги</h6>
          {product.uslugis.map((service, index) => (
            <Button
              outline
              color="secondary"
              className="mr-3"
              size="sm"
              key={index}
            >
              {service.name}
            </Button>
          ))}
        </Col>
      </Row>
    </>
  );
}