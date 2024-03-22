interface RestaurantData {
    restaurant_id: number
    restaurant_name: string
    restaurant_address: string
    restaurant_phone: string
    restaurant_category: [string]
    restaurant_rating: number
    restaurant_revenue: number
    restaurant_hero_image: string
}

interface CustomerData {
    customer_id: number
    customer_name: string
    customer_phone: string
    customer_address: string
    vip_status: "0" | "1"
    vip_expire: Date
}

interface MenuItemData {
    item_id: number
    item_name: string
    item_category: string
    item_description?: string
    item_price: number
    item_image: string
}

interface OrderData {
    order_id: number
    customer_id: number
    restaurant_id: number
    // order_items: [MenuItemData]
    order_status: "confirmed" | "accepted" | "rejected" | "delivered"
    order_subtotal: number
    comment: string
    order_service_fee: number
    order_rating: number
    order_review: string
}