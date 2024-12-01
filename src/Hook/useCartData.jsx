import { useQuery } from "@tanstack/react-query";
import useIntance from "./useIntance";
import useAuthContext from "./useAuthContext";

const useCartData = () => {
    const axionSecure = useIntance()
    const { user } = useAuthContext()
    const { refetch, data = [], isPending } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axionSecure.get(`/cart?email=${user?.email}`)
            return res.data
        }
    })
    return { refetch, data, isPending }
};

export default useCartData;