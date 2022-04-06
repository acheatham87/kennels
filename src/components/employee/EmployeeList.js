import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../../modules/EmployeeManager";
import { EmployeeCard } from "./EmployeeCard";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        })
    }

    useEffect(() => {
        getEmployees();
    }, [])

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard employee={employee} key={employee.id} />)}
        </div>
    )
}