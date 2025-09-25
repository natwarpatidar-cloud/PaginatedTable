import { useQuery } from "@tanstack/react-query"
import { getPaginatedUsers } from "../api"

export const useGetUsers = ({ page, limit }) => {
    const { data: users, isFetching, isSuccess, isError, error } = useQuery({
        queryFn: () => getPaginatedUsers({ page, limit }),
        queryKey: ['get-paginated-books', page, limit],
        staleTime: 1000 * 60 * 2,
    });

    return {
        users,
        isFetching,
        isError,
        isSuccess,
        error
    }        
}