import { useQuery } from "react-query"
import api from "../api/api";

export const useFetchTotalClicks = (token, onError) => {
    // fst param: query key - identify the query in this cache
    // 2nd param: async func - make an api call
    // 3rd param: options object - 
    return useQuery("", 
        async () => {
            return await api.get(
                "/api/urls/analytics/totalClicks?startDate=2025-01-01&endDate=2025-12-31", // fetch whole year
            {
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer "+ token,
                },
            });
        }, 
        {
            // transform/manipulate data returned by query function 
            // before storing it in cache / passed to consuming component

            //RAW DATA from api
            // data.data =>
                    //  {
                    //     "2024-01-01": 120,
                    //     "2024-01-02": 95,
                    //     "2024-01-03": 110,
                    //   };

            select: (data) => {
                const convertToArr = Object.keys(data.data).map((key) => ({
                    clickDate: key,
                    count: data.data[key]
                }))
            },
                // FINAL:
                //   [
                //     { clickDate: "2024-01-01", count: 120 },
                //     { clickDate: "2024-01-02", count: 95 },
                //     { clickDate: "2024-01-03", count: 110 },
                //   ]

            onError,
            /*duration in ms in which query is considered to be fresh, 
            RQ will not refetch it automatically in background 
            even if its accessed/triggered */
            staleTime: 5000 
        })
}