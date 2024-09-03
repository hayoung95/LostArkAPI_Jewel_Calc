import { useCallback } from 'react';
import useFetchAuctionItems from '../hooks/useFetchAuctionItems';

function AppLayout() {
  //const itemNames = ["7레벨 홍염", "8레벨 멸화", "9레벨 멸화"];
  const itemsList = [{itemName : "5레벨", itemTier : 3}, {itemName : "6레벨", itemTier : 3}, {itemName : "7레벨", itemTier : 3},
                     {itemName : "8레벨", itemTier : 3}, {itemName : "9레벨", itemTier : 3}, {itemName : "10레벨 멸화", itemTier : 3},
                     {itemName : "10레벨 홍염", itemTier : 3}, {itemName : "5레벨", itemTier : 4}, {itemName : "6레벨", itemTier : 4},
                     {itemName : "7레벨", itemTier : 4}, {itemName : "8레벨 겁화", itemTier : 4}, {itemName : "8레벨 작열", itemTier : 4},
                     {itemName : "9레벨 겁화", itemTier : 4}, {itemName : "9레벨 작열", itemTier : 4}];
  const items = useFetchAuctionItems(itemsList);
  console.log("조회 성공 : " + JSON.stringify(items, null, 2));
}

export default AppLayout;