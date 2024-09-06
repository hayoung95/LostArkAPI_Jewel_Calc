export const UPDATE_JEWEL_PRICE = "UPDATE_JEWEL_PRICE";
export const UPDATE_GOLD_PRICE = "UPDATE_GOLD_PRICE";
export const UPDATE_LOW_JEWELS_CASH_VALUE = "UPDATE_LOW_JEWELS_CASH_VALUE";
export const UPDATE_TIME = "UPDATE_TIME";

// 보석 가격 업데이트 액션 생성자
export const updateJewelPrice = (jewelLevel, lowestPrice, avgPrice) => ({
    type: UPDATE_JEWEL_PRICE,
    payload: { jewelLevel, lowestPrice, avgPrice }
});

// 낮은레벨 보석 현금가격 업데이트 액션 생성자
export const updateLowJewelsCaheValue = (jewelLevel, cashValue) => ({
    type: UPDATE_LOW_JEWELS_CASH_VALUE,
    payload: { jewelLevel, cashValue }
});


// 골드 가격 업데이트 액션 생성자
export const updateGoldPrice = (goldPrice) => ({
    type: UPDATE_GOLD_PRICE,
    payload: goldPrice
});


// 마지막 업데이트 시간 설정 액션 생성자
export const updateTime = (time) => ({
    type: UPDATE_TIME,
    payload: time
});