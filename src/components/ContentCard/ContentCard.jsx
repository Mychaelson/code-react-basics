import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardText,
  Button,
} from "reactstrap";
import newyork from "./newyork.jpeg";
import { FaRegThumbsUp } from "react-icons/fa";

const username = "seto";
const location = "BSD";
const likes = 1234;
const caption =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nesciunt dicta magni necessitatibus suscipit voluptas deserunt officiis aspernatur quibusdam veniam optio voluptate asperiores, ab qui accusantium facere quaerat? Placeat, doloremque itaque! Expedita iusto quis aliquam quisquam! Et ducimus, dignissimos possimus in quae ullam labore fugiat odio exercitationem impedit deserunt quasi commodi modi repellat iste, totam officia assumenda asperiores. Dolores illum molestiae excepturiquidem asperiores ex ipsum beatae dicta esse doloremque.";

const ContentCard = () => {
  const likePost = (amount) => {
    alert(`Liked Post ${amount}`);
  };

  return (
    <Card className="my-2">
      <CardBody>
        <CardTitle tag="h5" className="fw-bold">
          {username}
        </CardTitle>

        <CardSubtitle tag="h6" className="text-muted mb-4">
          {location}
        </CardSubtitle>

        <img
          style={{
            width: "100%",
          }}
          src={newyork}
          alt="User's Content"
          className="rounded img-fluid "
        />

        <CardText tag="h6" className="fw-bold mt-3">
          {likes.toLocaleString()} likes
        </CardText>

        <CardText className="fs-5">
          <span className="fw-bold">{username}</span> -{" "}
          {caption.length > 140 ? caption.slice(0, 140) + " ..." : caption}
        </CardText>

        <Button
          onClick={() => likePost(14)}
          color="danger"
          // size="lg"
          className="d-flex-justify-content-center align-items-center"
        >
          Like &nbsp;
          <FaRegThumbsUp className="mx-1" />
        </Button>
      </CardBody>
    </Card>
  );
};

export default ContentCard;
