import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEmployees } from '../App';
import { useParams } from 'react-router-dom';

export default function Employee() {

  let { employeeId } = useParams();

  const { data, status, error } = useQuery(
    { queryKey: ['employees'], queryFn: fetchEmployees, }
  );

  if (status === 'loading') {
    return <article>Loading...</article>
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>
  }
  
  return (
    <>
      <section aria-labelledby='employeeIdCard'>
        <h2 id='employeeIdCard'>Status: {status}</h2>
        <article>Woomy ID: { employeeId }</article>
        <span>
          { JSON.stringify( data.find((employee) => {
            return employee.id === Number(employeeId)
        }) ) }
        </span>
      </section>
    </>
  );
}