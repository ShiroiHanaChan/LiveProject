import React from 'react'

export default function EmployeeResult(props) {

  const { imageFilePath, firstName, lastName, jobTitle, teamName } = props.employee;

  return (
    <>
      <article className='employee-id-card-results'>
        <img src={ ['http://localhost:3030/', imageFilePath].join('') } alt="" />
        <span>
          <p>{ `${firstName} ${lastName}` }</p>
          <p>{ `${jobTitle} | ${teamName}` }</p>
        </span>
      </article>
    </>
  )
}
