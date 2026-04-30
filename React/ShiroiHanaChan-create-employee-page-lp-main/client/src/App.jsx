import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Employee from "./components/Employee";
import { Header } from "./components/Header";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// TODO: Refactor
export async function fetchEmployees() {
    const response = await fetch('http://localhost:3030/employees');
    return response.json();
}

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={
          <>
            <Header />
            <Container pt="6" maxW="container.md">
            {/* add non-header content here */}
            </Container>
          </>
        } />

        <Route path="/employees/:employeeId" element={
          <>
            <Header />
              <Container pt="6" maxW="container.md">
              {/* add non-header content here */}
              <Employee />
            </Container>
          </>
        } />

      </Routes>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
