import React, { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../../modules/EmployeeManager";
import { EmployeeCard } from "./EmployeeCard";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

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
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard 
            employee={employee} 
            key={employee.id} 
            handleDeleteEmployee={handleDeleteEmployee}/>)}
        </div>
    )
}