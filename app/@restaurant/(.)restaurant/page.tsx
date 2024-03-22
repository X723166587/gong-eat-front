import RestaurantPage from "@/app/restaurant/[slug]/page";
import Modal from "@/app/components/modal";

export default function RestaurantModal({params}: { params: { slug: string } }) {
    return (
        <Modal>
            <RestaurantPage params={params}/>
        </Modal>

    )
}