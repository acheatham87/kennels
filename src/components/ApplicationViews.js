import React from "react"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./location/LocationDetail"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home.js"
import { LocationList } from "./location/LocationList.js"
import { CustomerList } from "./customer/CustomerList.js" 
import { EmployeeList } from "./employee/EmployeeList.js"
import { AnimalList } from "./animal/AnimalList.js"
import { AnimalForm } from './animal/AnimalForm'
import { CustomerForm } from './customer/CustomerForm'
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />
                
                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
                <Route path="/locations/create" element={<LocationForm />} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/create" element={<CustomerForm />} />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="employees/create" element={<EmployeeForm />} />
            </Routes>
        </>
    )
}
