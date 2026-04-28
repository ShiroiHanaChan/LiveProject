import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEmployees } from '../App';
import { useParams } from 'react-router-dom';
import { border } from '@chakra-ui/react';

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

  const requestedEmployee = data.find((employee) => {
            return employee.id === Number(employeeId)
        });

  const { firstName, lastName, jobTitle, teamName } = requestedEmployee;
  
  return (
    <>
      <section aria-labelledby='employeeIdCard'>
        <h2 id='employeeIdCard'>Status: {status}</h2>
        <article>Woomy ID: { employeeId }</article>
        <span>
          { JSON.stringify( requestedEmployee) }
        </span>
        {/* <img src={ 'http://localhost:3030/' + requestedEmployee.imageFilePath } alt="" /> */}
        <img src={ ['http://localhost:3030/', requestedEmployee.imageFilePath].join('') } alt="" style={ { width: '170px', } } />
        <p>{ `${firstName} ${lastName}` }</p>
        <p>{ `${jobTitle} | ${teamName}` }</p>
      </section>
    </>
  );
}