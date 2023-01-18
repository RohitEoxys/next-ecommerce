import Card from "react-bootstrap/Card";
import Image from "next/image";
import { useRouter } from "next/router";

const CategoryBox = (props) => {
  const router = useRouter();

  const categoryClickHandler = () => {
    router.push(`./${props.title}`);
  };

  return (
    <Card
      border="info"
      style={{ margin: "1rem", cursor: "pointer" }}
      onClick={categoryClickHandler}>
      <Image
        src={require(`../../../../Assets/Categories/CategoryBox/${props.imagePath}.jpg`)}
        width={350}
        height={300}
        alt={props.title}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryBox;
