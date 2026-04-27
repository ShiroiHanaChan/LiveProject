import { Container } from "@chakra-ui/react";
import { Header } from "./components/Header";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Employee from "./components/Employee";

const queryClient = new QueryClient();

// TODO: Refactor
export async function fetchEmployees() {
    const response = await fetch('http://localhost:3030/employees');
    return response.json();
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Container pt="6" maxW="container.md">
          {/* add non-header content here */}
          <Employee />
        </Container>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
