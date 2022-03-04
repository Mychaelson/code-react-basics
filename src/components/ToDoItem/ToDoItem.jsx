import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useState } from "react";
import moment from "moment";

const ToDoItem = (props) => {
  return (
    <Card className="my-2">
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>
            <CardTitle tag="h5" className="fw-bold">
              {moment(props.date).format("DD MMMM YYYY")}
            </CardTitle>
            <CardText>{props.action}</CardText>
          </div>
          <div>
            {props.status ? (
              <Button
                onClick={props.editStatus}
                color="success"
                className="px-4"
              >
                Done
              </Button>
            ) : (
              <Button
                onClick={props.editStatus}
                color="warning"
                className="px-4"
              >
                On Going
              </Button>
            )}
            <Button onClick={props.deleteTodo} color="danger" className="ms-1">
              Delete
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ToDoItem;
