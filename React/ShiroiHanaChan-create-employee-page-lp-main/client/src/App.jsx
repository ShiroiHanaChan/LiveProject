import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Employee from "./components/Employee";
import SearchResults from "./components/SearchResults";
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
      <Header />
          {/* add non-header content here */}
          <Routes>
            <Route path="/" element={ <SearchResults /> } />
            <Route path="/employees/:employeeId" element={ <Employee /> } />
          </Routes>
      <ReactQueryDevtools />
    </>
  );
}

export default App;

/*  */