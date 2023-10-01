import { StyledCard } from "./style";
import useMediaQuery from "@mui/material/useMediaQuery";

const Card = ({ country }) => {
  const smallScreen = useMediaQuery("(max-width:720px)");
  return (
    <StyledCard>
      <div className="imageWrap">
        <img
          src={country.flag || null}
          alt="flag"
          height={smallScreen ? 48 : 96}
          width={smallScreen ? 48 : 127}
        />
      </div>
      <div className="details">
        <div className="country">{country.name}</div>
        <div className="region">{country.region}</div>
      </div>
    </StyledCard>
  );
};

export default Card;
