import React from 'react';
import AppLayout from './components/AppLayout';
import { Layout, Collapse } from "antd"

function App() {

  return (
    <Layout>
      <h1>Lostark API Jewel Calc</h1>
      <Collapse defaultActiveKey={['1']} expandIconPosition={"end"} ghost items={
        [
          {
            key: '1',
            label: '보석 시세',
            children: <AppLayout />,
          },
          {
            key: '2',
            label: '보석 현황',
            children: <p>{""}</p>,
          },
          {
            key: '3',
            label: '즐겨찾기',
            children: <p>{""}</p>,
          },
        ]
      } />
    </Layout>
  );
}

export default App;