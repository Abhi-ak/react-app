import { ButtonWrapper } from "./style";

const Button = ({ label, onClick }) => {
  return (
    <ButtonWrapper variant="contained" onClick={onClick}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;
