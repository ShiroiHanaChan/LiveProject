import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchEmployees } from '../App';
import EmployeeResult from './EmployeeResult';
import '../css/employee-search-cascade.css';

export default function SearchResults() {

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") ?? '';

  const { data: results, isLoading } = useQuery(
    { queryKey: ["employees", searchTerm], queryFn: 
      async () => {
        const response = await fetch(['http://localhost:3030/employees', searchTerm].join('?q='));
        return response.json();
      }
    }
  ); 

  if (isLoading) return <h2>Loading | searchTerm: {searchTerm}</h2>;
  return (
    <>
      <section aria-labelledby='employeeSearchResultsCascade' className='employee-search-results-cascade'>
      <h2 id='employeeSearchResultsCascade'>Results: {results?.length ?? 0} | searchTerm: {searchTerm}</h2>
        {
          results?.map((employee) => (
                <EmployeeResult key={employee.id} employee={employee} />
              )
            )
          };
        )
      </section>
    </>
  )
}
