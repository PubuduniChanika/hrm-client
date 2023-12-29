
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddEmployee() {
  let navigate = useNavigate()
  const [employee, setEmployee] = useState({
    name: "",
    nic: "",
    pfn: "",
    mobile: "",
    whatsapp: "",
    emergency: "",
    email: "",
    status: "",
    division: ""
  });
  const [divisionList, setDivisions] = useState([]);
  const [statusList, setStatus] = useState([]);
  const { name, nic, pfn, mobile, whatsapp, emergency, email, status, division } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/employee/v1/save", employee);
    navigate("/");
  };


  useEffect(() => {
    // Fetch divisions from the Spring Boot API
    fetch('http://localhost:8080/employee/v1/get-all-divisions')
      .then((response) => response.json())
      .then((data) => {
        setDivisions(data);
      })
      .catch((error) => {
        console.error('Error fetching divisions:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once after the initial render
  useEffect(() => {
    // Fetch divisions from the Spring Boot API
    fetch('http://localhost:8080/employee/v1/get-all-status')
      .then((response) => response.json())
      .then((data) => {
        setStatus(data);
      })
      .catch((error) => {
        console.error('Error fetching divisions:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className='container'>
      <div className='row'>
        <div className='com-md-6 border rounded p-4 mt-2 shadow'>
          <h2>Add Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nic" className="form-label">
                NIC
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your NIC"
                name="nic"
                value={nic}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pfn" className="form-label">
                Personal File No
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Personal File No"
                name="pfn"
                value={pfn}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile No
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Mobile"
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="whatsapp" className="form-label">
                WhatsApp
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your WhatsApp"
                name="whatsapp"
                value={whatsapp}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emergency" className="form-label">
                Emergency
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your emergency"
                name="emergency"
                value={emergency}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                aria-label="Select Status"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
                required
              >
                <option value="" disabled>
                  Select Status
                </option>
                {statusList.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.status}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="division" className="form-label">
                Division
              </label>
              <select
                className="form-select"
                aria-label="Select Division"
                name="division"
                value={division}
                onChange={(e) => onInputChange(e)}
                required
              >
                <option value="" disabled>
                  Select Division
                </option>
                {divisionList.map((division) => (
                  <option key={division.id} value={division.id}>
                    {division.division}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>

        </div>

      </div>
    </div>
  )
}
