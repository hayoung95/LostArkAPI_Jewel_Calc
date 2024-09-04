import useFetchAuctionItems from '../hooks/useFetchAuctionItems';
import { useSelector, useDispatch } from 'react-redux';
import { updateJewelPrice, updateTime } from '../redux/actions';
import { useEffect } from 'react';

function AppLayout() {
  const reqItemList = [{itemName : "5레벨", itemTier : 3}, {itemName : "6레벨", itemTier : 3}, {itemName : "7레벨", itemTier : 3},
    {itemName : "8레벨", itemTier : 3}, {itemName : "9레벨", itemTier : 3}, {itemName : "10레벨 멸화", itemTier : 3},
    {itemName : "10레벨 홍염", itemTier : 3}, {itemName : "5레벨", itemTier : 4}, {itemName : "6레벨", itemTier : 4},
    {itemName : "7레벨", itemTier : 4}, {itemName : "8레벨 겁화", itemTier : 4}, {itemName : "8레벨 작열", itemTier : 4},
    {itemName : "9레벨 겁화", itemTier : 4}, {itemName : "9레벨 작열", itemTier : 4}];
  const jewelList = ["t3Lv5", "t3Lv6", "t3Lv7", "t3Lv8", "t3Lv9", "t3Lv10Att", "t3Lv10Wt", "t4Lv5",
                     "t4Lv6", "t4Lv7", "t4Lv8Att", "t4Lv8Wt", "t4Lv9Att", "t4Lv9Wt"];

  const { res, loading } = useFetchAuctionItems(reqItemList);

  const jewels = useSelector(state => state.jewels);
  const dispatch = useDispatch();
  let count = 0;

    useEffect(() => {
      if (!loading && res && res[0] && res[0].Items) {
        for(const itemList of res){
          console.log("rr : " + JSON.stringify(itemList.Items, null, 2));
          const prices = itemList.Items.map(item => item.AuctionInfo.BuyPrice);
          const totalSum = prices.reduce((acc, price) => acc + price, 0);
          const average = totalSum / prices.length;

        //dispatch(updateTime(new Date().toISOString()));
          dispatch(updateJewelPrice(jewelList[count], Math.min(...prices), average));
          console.log("jewels[" + count + "] : " +  Object.values(jewels)[count]);
          count++
        }
      }
    }, [loading, res, dispatch]);

    if (loading) {
      return <div>로딩중입니다...</div>;
    }
    
    if (!res || !res[0] || !res[0].Items) {
      return <div>데이터가 없습니다.</div>;
    }

    return (
      <div>
        {jewelList.map((jewelKey, index) => (
          <div key={index}>{jewelKey}: {jewels[jewelKey]?.avgPrice}</div>
        ))}
      </div>
    );
  }

export default AppLayout;