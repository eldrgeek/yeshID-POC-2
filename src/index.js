import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import { ChakraProvider } from "@chakra-ui/react";
import Page from "./Components/Page";
function App() {
  return (
    <ChakraProvider>
      <Header />
      <Page />
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
