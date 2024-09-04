import { useState, useEffect } from 'react';
import instance from '../api/axiosInstance';

const useFetchAuctionItems = (reqItemList) => {
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const requests = reqItemList.map(({itemName, itemTier}) =>
                    instance.post("auctions/items", {
                        Sort: "BUY_PRICE",
                        CategoryCode: 210000,
                        ItemTier: itemTier,
                        ItemName: itemName,
                        PageNo: 0,
                        SortCondition: "ASC",
                    })
                );
                const responses = await Promise.all(requests);

                
                const allData = responses.map((response) => response.data);
                console.log("API Responses:", allData);
                setRes(allData);
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    return { res, loading };
  };

  export default useFetchAuctionItems;