import React, { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../../modules/EmployeeManager";
import { EmployeeCard } from "./EmployeeCard";
import { useNavigate } from "react-router-dom";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        })
    }

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
        .then(() => getAllEmployees().then(setEmployees))
    };

    useEffect(() => {
        getEmployees();
    }, [])

    return (
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {navigate("/employees/create")}}>
                    Add Employee
                </button>
            <div className="container-cards">
                {employees.map(employee => <EmployeeCard 
                employee={employee} 
                key={employee.id} 
                handleDeleteEmployee={handleDeleteEmployee}/>)}
            </div>
        </section>
    )
}