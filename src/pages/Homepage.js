// import React from 'react';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "bootstrap";

export default function Home() {
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employee/v1/get-all-employees");
    console.log(result.data);
    setEmployees(result.data.data);
  };
  return (
    <div className='container'>
      <div className='py-4'>
        <table class="table border show">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">NIC</th>
              <th scope="col">PFN</th>
              <th scope="col">Mobile</th>
              <th scope="col">EMERGENCY</th>
              <th scope="col">email</th>
              <th scope="col">STATUS</th>
              <th scope="col">DIVISION</th>
              {/* <th scope="col">ACTION</th> */}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employee.name}</td>
                <td>{employee.nic}</td>
                <td>{employee.pfn}</td>
                <td>{employee.mobile}</td>
                <td>{employee.emergency}</td>
                <td>{employee.email}</td>
                <td>{employee.status}</td>
                <td>{employee.division}</td>
                {/* <td>
                  <button
                    className="btn btn-primary mx-2"

                  >
                    View
                  </button>
                  <button
                    className="btn btn-outline-primary mx-2"

                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"

                  >
                    Delete
                  </button>
                </td> */}

              </tr>))
            }


          </tbody>
        </table>
      </div>
    </div>
  )
}
