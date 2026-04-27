import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEmployees } from '../App';
import { useParams } from 'react-router-dom';

export default function Employee() {

  const { data, status } = useQuery(
    { queryKey: ['employees'], queryFn: fetchEmployees, }
  );

  let { employeeId } = useParams();

  return (
    <>
      <section aria-labelledby='employeeIdCard'>
        <h2 id='employeeIdCard'>Status: {status}</h2>
        <article>Woomy ID: { employeeId }</article>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
    </>
  );
}
