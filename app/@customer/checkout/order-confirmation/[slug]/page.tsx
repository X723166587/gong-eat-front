import React from 'react'
import {Button} from "@/app/components/button";
import Link from "next/link.js";

export default function OrderConfirmationPage({params}: { params: { slug: string } }) {
    // TODO: Refine the UI of this page

    // TODO: Get the order data from the server

    // Get order number from the URL
    console.log(params.slug)
    // Regex to get the order number
    const orderNumber = params.slug.match(/(\d+)/g)

    return (
        <div className="container mx-auto p-8">
            <h1 className="font-semibold text-6xl tracking-tighter py-12">Thank you for you order!</h1>
            <h2 className="font-semibold text-2xl mb-4 tracking-tight">Thank you for your order. We appreciate your
                business and look forward to delivering your delicious meal.</h2>
            <div className="grid grid-cols-5 gap-4">
                <section className="col-span-3 flex flex-col gap-2">
                    <div className="bg-surface p-6 rounded-3xl text-onSurface">
                        <h2 className="font-semibold text-2xl mb-4 tracking-tight">Order Detail</h2>
                        <div className="flex flex-col justify-between gap-4">
                            <div>
                                <h3 className="font-semibold text-lg">Order Number</h3>
                                <p className="font-normal text-base">#{orderNumber}</p>
                            </div>
                        </div>
                    </div>
                    <Link href={"/"}>
                        <Button icon={{iconName: "arrow_forward"}} label="Back to Home"/>
                    </Link>
                </section>
            </div>
        </div>
    )
}