import { useEffect, useState } from "react"

const useReview = () => {
    const [reviewCart, setReviewCart] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviewCart(data))
    }, [])
    return [reviewCart, setReviewCart];
}
export default useReview;
