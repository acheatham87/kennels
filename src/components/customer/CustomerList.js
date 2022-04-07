import React, { useEffect, useState } from "react";
import { CustomerCard } from "./CustomerCard";
import { getAllCustomers, deleteCustomer } from "../../modules/CustomerManager";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        })
    }

    const handleDeleteCustomer = id => {
        deleteCustomer(id)
        .then(() => getAllCustomers().then(setCustomers))
    }

    useEffect(() => {
        getCustomers();
    }, [])

    return (
        <div className="container-cards">
            {customers.map(customer => <CustomerCard 
            customer={customer} 
            key={customer.id}
            handleDeleteCustomer={handleDeleteCustomer} />)}
        </div>
    )
}