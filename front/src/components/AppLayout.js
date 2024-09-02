import { useCallback } from 'react';
import useFetchAurctionItems from '../hooks/useFetchAurctionItems';

function AppLayout() {
  const itemNames = useCallback( () => ["7레벨 홍염", "8레벨 멸화", "9레벨 멸화"], []); // 조회할 itemName 배열
  const items = useFetchAurctionItems(itemNames());

  console.log(items);
}

export default AppLayout;