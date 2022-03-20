import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
