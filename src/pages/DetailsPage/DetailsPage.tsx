import { Back } from "../../components/styles/Styled";
import { useNavigate } from "react-router-dom";
import CharacterComp from "../../components/CharacterComp/CharacterComp";

const DetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <Back
        onClick={() => {
          navigate(-1);
        }}
      >
        <span>&#8678;</span>
        <span>Back</span>
      </Back>

      <CharacterComp />
    </div>
  );
};

export default DetailsPage;
