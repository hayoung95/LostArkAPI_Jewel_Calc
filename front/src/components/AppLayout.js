import useFetchAuctionItems from '../hooks/useFetchAuctionItems';
import { useSelector, useDispatch } from 'react-redux';
import { updateJewelPrice, updateLowJewelsCaheValue, updateTime } from '../redux/actions';
import { useEffect } from 'react';
import { Collapse } from "antd"

function AppLayout() {
  const reqItemList = [{itemName : "5레벨", itemTier : 3}, {itemName : "6레벨", itemTier : 3}, {itemName : "7레벨", itemTier : 3},
    {itemName : "8레벨", itemTier : 3}, {itemName : "9레벨", itemTier : 3}, {itemName : "10레벨 멸화", itemTier : 3},
    {itemName : "10레벨 홍염", itemTier : 3}, {itemName : "5레벨", itemTier : 4}, {itemName : "6레벨", itemTier : 4},
    {itemName : "7레벨", itemTier : 4}, {itemName : "8레벨 겁화", itemTier : 4}, {itemName : "8레벨 작열", itemTier : 4},
    {itemName : "9레벨 겁화", itemTier : 4}, {itemName : "9레벨 작열", itemTier : 4}, {itemName : "10레벨 겁화", itemTier : 4}, {itemName : "10레벨 작열", itemTier : 4}];
  const jewelList = ["t3Lv5", "t3Lv6", "t3Lv7", "t3Lv8", "t3Lv9", "t3Lv10Att", "t3Lv10Wt", "t4Lv5",
                     "t4Lv6", "t4Lv7", "t4Lv8Att", "t4Lv8Wt", "t4Lv9Att", "t4Lv9Wt", "t4Lv10Att", "t4Lv10Wt"];

  // fetch Response
  const { res, loading } = useFetchAuctionItems(reqItemList);

  const jewels = useSelector(state => state.jewels);
  const goldPrice = useSelector(state => state.goldPrice);
  const lastUpdateTime = useSelector(state => state.lastUpdateTime);
  const dispatch = useDispatch();

  const formatNumber = (number) => {
    return new Intl.NumberFormat('ko-KR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };
  
  const t3LowJewelsSetCashValue = (standardPrice) => {
    const lowJewelsList = jewelList.slice(0, 4).reverse();
    lowJewelsList.forEach((jewelKey, index) => {
      console.log("test : " + jewelKey, standardPrice/Math.pow(3, index));
      dispatch(updateLowJewelsCaheValue(jewelKey, standardPrice/Math.pow(3, (index+1))))
    });
  };

  const t4LowJewelsSetCashValue = (standardPrice) => {
    const lowJewelsList = jewelList.slice(7, 9).reverse();
    lowJewelsList.forEach((jewelKey, index) => {
      console.log("test : " + jewelKey, standardPrice/Math.pow(3, index));
      dispatch(updateLowJewelsCaheValue(jewelKey, standardPrice/Math.pow(3, (index+1))))
    });
  };

  // fetch Response > jewel price 계산 > redux
    useEffect(() => {

      if (!loading && res && res[0] && res[0].Items) {
        try{
          let count = 0;

          for(const itemList of res){
            //console.log("jl : " + JSON.stringify(itemList.Items, null, 2));
            const prices = itemList.Items.map(item => item.AuctionInfo.BuyPrice);
            const totalSum = prices.reduce((acc, price) => acc + price, 0);
            const average = totalSum / prices.length;
  
          
            dispatch(updateJewelPrice(jewelList[count], Math.min(...prices), average));
            count++
          }
        } finally {
          dispatch(updateTime(new Date().toISOString()));
          t3LowJewelsSetCashValue(jewels["t3Lv9"].cashValue);
          t4LowJewelsSetCashValue(jewels["t4Lv7"].cashValue);
        }
      }
    }, [loading, res, dispatch]);

    if (loading) {
      return <div>로딩중입니다...</div>;
    }
    
    if (!res || !res[0] || !res[0].Items) {
      return <div>데이터가 없습니다.</div>;
    }
    const getPreviousCashPrice = (lowestPrice) => formatNumber(lowestPrice * 0.01 * goldPrice.previous);
    const getCurrentCashPrice = (lowestPrice) => formatNumber(lowestPrice * 0.01 * goldPrice.current);

    const array = jewelList.map((jewelKey, index) => {
      return {
        key: index,
        label: jewels[jewelKey]?.jewelName,
        children: (
          <>
            <div>
              <p>평균가격: {formatNumber(jewels[jewelKey]?.avgPrice)}    최저가: {formatNumber(jewels[jewelKey]?.lowestPrice)}</p>
            </div>
            <div>
              <p>현금가: {getPreviousCashPrice(jewels[jewelKey].lowestPrice)}(이전)  {getCurrentCashPrice(jewels[jewelKey].lowestPrice)}(현재)</p>
            </div>
          </>
        ) ,
      };
    });

    return (
      <div>
        <div>마지막 업데이트 시간 : {lastUpdateTime}</div>
        <Collapse defaultActiveKey={['1']} expandIconPosition={"end"} ghost items={array} />
      
        {jewelList.map((jewelKey, index) => (
          <div key={index}>{jewelKey}: {jewels[jewelKey]?.avgPrice}</div>
        ))}
      </div>
    );
  }

export default AppLayout;