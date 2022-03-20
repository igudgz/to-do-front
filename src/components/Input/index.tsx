import react, { InputHTMLAttributes } from "react";
import { Input as InputStyled, FormLabel } from "@chakra-ui/react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
}

const Input = ({ label, name, type }: Props) => {
  return (
    <>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputStyled
        type={type}
        borderColor="#6b357a"
        _focus={{ borderColor: "#6b357a" }}
        _hover={{ borderColor: "#6b357a" }}
        name={name}
      />
    </>
  );
};

export default Input;
