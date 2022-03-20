import react from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Input from "../../components/Input";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Box width="30%" h="500px">
          <FormControl display="flex" flexDirection="column">
            <Input type="text" label="Nome da tarefa:" name="initTaskDate" />
            <Input type="date" label="Início da tarefa:" name="initTaskDate" />
            <Input
              type="date"
              label="Data limite para finalizar a tarefa:"
              name="endTaskDate"
            />
            <FormLabel htmlFor="descriptionTask">
              Descrição da tarefa:
            </FormLabel>
            <Textarea
              borderColor="#6b357a"
              _focus={{ borderColor: "#6b357a" }}
              _hover={{ borderColor: "#6b357a" }}
              name="descriptionTask"
            />
            <Button
              _hover={{ bg: "#6b357a" }}
              color="#FFFFFF"
              backgroundColor="#6D597A"
              marginTop="10px"
              width="30%"
              alignSelf="flex-end"
            >
              Criar
            </Button>
          </FormControl>
        </Box>
        <Box
          h="460px"
          display="flex"
          w="40%"
          flexWrap="wrap"
          justifyContent="flex-start"
        >
          <Box
            h="150px"
            w="150px"
            textAlign="center"
            border="2px solid #6b357a"
            borderRadius="20%"
            margin="10px"
          >
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              h="80%"
            >
              <p>Nome da tarefa</p>
              <p>Detalhes</p>
            </Box>
            <Box h="20%" display="flex" justifyContent="space-around">
              <CheckIcon color="#6b357a" />
              <DeleteIcon color="#6b357a" />
            </Box>
          </Box>
        </Box>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
