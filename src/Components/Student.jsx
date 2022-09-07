import React from 'react'

const Student = () => {
  return (
    <>
    <button className='student-progress'>Add New Student</button>
    <div className='tablecon'>
    <p className='studentD'>Student Details</p>
    <table class="table1">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sairam</th>
      <td>24</td>
      <td>MERN</td>
      <td>May</td>
      <td>Edit</td>
    </tr>
    <tr>
      <th scope="row">Gtv</th>
      <td>26</td>
      <td>MERN</td>
      <td>June</td>
      <td>edit</td>
    </tr>
    <tr>
      <th scope="row">Akash</th>
      <td>24</td>
      <td>MERN</td>
      <td>August</td>
      <td>edit</td>
    </tr>
    <tr>
      <th scope="row">Vineeth</th>
      <td>23</td>
      <td>MERN</td>
      <td>September</td>
      <td>edit</td>
    </tr>
  </tbody>
</table>

    </div>
    </>
  )
}

export default Student