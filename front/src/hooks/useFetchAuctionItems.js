import { useState, useEffect } from 'react';
import instance from '../api/axiosInstance';

const useFetchAuctionItems = (itemsList) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const requests = itemsList.map(({itemName, itemTier}) =>
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
        setItems(allData);
        }
        fetchData();
    }, []);
    return items;
  };

  export default useFetchAuctionItems;