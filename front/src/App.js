import React, { useEffect } from 'react';
import instance from './api/axiosInstance';  // axios 인스턴스를 설정한 파일 경로

function App() {
  let sumPrice = 0;

  const getAPIData = async () => {
    const res = instance({
      method: "post",
      url: "auctions/items",
      data: {
        Sort: "BUY_PRICE",
        CategoryCode: 210000,
        ItemTier: 3,
        ItemGrade: "전설",
        ItemName: "7레벨",
        PageNo: 0,
        SortCondition: "ASC",
      },
    }).then((data) => {
      if (data.data && Array.isArray(data.data.Items)) {
        for(var i = 0 ; i < data.data.Items.length; i++){
          sumPrice += data.data.Items[i].AuctionInfo.BuyPrice;
        }
        console.log(sumPrice/data.data.Items.length);
        console.log(data.data.Items);
      }
    });
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <div>
      <h1>Lostark API Jewel Calc</h1>
      {/* 여기에 더 많은 UI 컴포넌트를 추가하세요 */}
    </div>
  );
}

export default App;