'use client'

import React, {useEffect} from "react";
import useStore from "@/app/api/useStore";
import { useCustomerStore } from "@/app/store/customer-store";
import { CustomerState} from "@/app/store/customer-store";
import { CustomerData } from "@/app/api/definitions";
import Link from "next/link.js";
import {Button} from "@/app/components/button";
import {MaterialIcon} from "@/app/components/material-icon";

export const CustomerProfile = ({ initialData }: {initialData: CustomerData}) => {
    console.log(initialData)
    const customerStore = useStore(useCustomerStore, (state: CustomerState) => state.customerData)

    useEffect(() => {
        useCustomerStore.setState({customerData: initialData})
    }, [initialData])

    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <h2 className="font-semibold text-2xl tracking-tight">{customerStore?.customer_name}</h2>
                {customerStore?.vip_status === "active" && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-onPrimary font-semibold text-sm">
                        Plus Member
                    </div>
                )}
            </div>
            <div className="border-b border-outlineVariant my-4"/>
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="font-normal text-base">{customerStore?.customer_phone}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Delivery Address</h3>
                    <p className="font-normal text-base">{customerStore?.customer_address}</p>
                </div>
            </div>
            <div className="border-b border-outlineVariant my-4"/>
            <div className="flex flex-col gap-4">
                <Link href={"/update-profile"}>
                    <div className="inline-flex flex-row justify-between items-center gap-4 text-primary">
                        <MaterialIcon iconName={"edit"}/>
                        <h4 className="font-semibold text-base ">Update Profile</h4>
                    </div>
                </Link>
                <div className="border-b border-outlineVariant-50"/>
                <Link href={"/manage-membership"}>
                    <div className="inline-flex flex-row justify-between items-center gap-4 text-primary">
                        <MaterialIcon iconName={"star"}/>
                        <h4 className="font-semibold text-base ">Manage Membership</h4>
                    </div>
                </Link>
            </div>
        </>
    )
}