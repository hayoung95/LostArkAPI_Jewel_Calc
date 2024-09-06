import { InputNumber, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateGoldPrice } from "../redux/actions";
import { useState } from "react";

function GoldPrice() {
  const [inputValue, setInputValue] = useState(60);
  const goldPrice = useSelector((state) => state.goldPrice);
  const dispatch = useDispatch();

  const saveGoldPrice = () => {
    console.log(inputValue);
    console.log(goldPrice?.previous);
    dispatch(updateGoldPrice(inputValue));
  }

  return (
    <>
      <div>이전가격 : {goldPrice?.previous}</div>
      <div>현재가격 : {goldPrice?.current}</div>
      <div>
        <InputNumber min={40} max={99} defaultValue={60} onChange={(value) => setInputValue(value)}/>
        <Button type="primary" size={"medium"} style={{marginLeft: 4}} onClick={saveGoldPrice}>
          저장
        </Button>
      </div>
    </>
  );
}

export default GoldPrice;
