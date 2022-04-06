import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home.js"
import { LocationList } from "./location/LocationList.js"
import { CustomerList } from "./customer/CustomerList.js" 
import { EmployeeList } from "./employee/EmployeeList.js"
import { AnimalList } from "./animal/AnimalList.js"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />
                
                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/locations" element={<LocationList />} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerList />} />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={<EmployeeList />} />
            </Routes>
        </>
    )
}
