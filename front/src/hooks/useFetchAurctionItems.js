import { useState, useEffect } from 'react';
import instance from '../api/axiosInstance';  // axios 인스턴스를 설정한 파일 경로

const useFetchAurctionItems = (itemNames) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const requests = itemNames.map((itemName) =>
            instance.post("auctions/items", {
                Sort: "BUY_PRICE",
                CategoryCode: 210000,
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
    }, [itemNames]);
    return items;
    // const res = instance({
    //   method: "post",
    //   url: "auctions/items",
    //   data: {
    //     Sort: "BUY_PRICE",
    //     CategoryCode: 210000,
    //     ItemName: itemName,
    //     PageNo: 0,
    //     SortCondition: "ASC",
    //   },
    // }).then((data) => {
    //   const data2 = data.data;
    //   console.log(data2);
    //   return data2;
    // });
  };

  export default useFetchAurctionItems;