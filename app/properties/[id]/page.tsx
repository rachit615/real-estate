import { useSelector } from "react-redux";
import Container from "../../components/Container";
import PropertyDimensions from "./PropertyDimensions";
import PropertyGallery from "./PropertyGallery";
import SimilarProperties from "./SimilarProperties";
import PropertyClient from "./PropertyClient";

interface IParams {
  id?: number;
}

export default function PropertyDetail({ params }: { params: IParams }) {
  return (
    <Container>
      <PropertyClient id={params?.id} />
    </Container>
  );
}
