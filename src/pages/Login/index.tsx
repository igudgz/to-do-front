import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Container,
  Button,
  Text,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

export default function Login() {
  return (
    <>
      <Header logged={false} />
      <Main>
        <Text fontSize="5xl">Bem vindo! =)</Text>
        <Box w="20%" display="flex">
          <FormControl display="flex" flexDirection="column">
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              borderColor="#6b357a"
              _focus={{ borderColor: "#6b357a" }}
              _hover={{ borderColor: "#6b357a" }}
              name="email"
            />
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              borderColor="#6b357a"
              _focus={{ borderColor: "#6b357a" }}
              _hover={{ borderColor: "#6b357a" }}
              name="password"
            />
            <FormHelperText fontSize="12px">
              Nunca compartilhe a sua senha.
            </FormHelperText>
            <Button
              _hover={{ bg: "#6b357a" }}
              color="#FFFFFF"
              backgroundColor="#6D597A"
              marginTop="10px"
            >
              Login
            </Button>
          </FormControl>
        </Box>
      </Main>
      <Footer />
    </>
  );
}
