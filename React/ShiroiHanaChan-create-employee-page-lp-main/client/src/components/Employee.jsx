import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEmployees } from '../App';
import { useParams } from 'react-router-dom';
import { border } from '@chakra-ui/react';
import '../css/employee-card.css'

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
      <h1>Status: {status}</h1>
      <article>Woomy ID: { employeeId }</article>
      <span>
        { JSON.stringify( requestedEmployee) }
      </span>

      <section className='employee-id-card' aria-labelledby='employeeIdCard'>
        <img src={ ['http://localhost:3030/', requestedEmployee.imageFilePath].join('') } alt="" />
        <span>
          <h2 id='employeeIdCard'>{ `${firstName} ${lastName}` }</h2>
          <p>{ `${jobTitle} | ${teamName}` }</p>
        </span>
      </section>
    </>
  );
}
{/* <img src={ 'http://localhost:3030/' + requestedEmployee.imageFilePath } alt="" /> */}