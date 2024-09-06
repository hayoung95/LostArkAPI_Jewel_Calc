import { UPDATE_JEWEL_PRICE, UPDATE_LOW_JEWELS_CASH_VALUE, UPDATE_GOLD_PRICE, UPDATE_TIME } from './actions';

const initialState = {
    jewels: {
        t3Lv5: { jewelName: "5레벨 멸화,홍염", lowestPrice: 0, avgPrice: 0, cashValue: 0 },
        t3Lv6: { jewelName: "6레벨 멸화,홍염", lowestPrice: 0, avgPrice: 0, cashValue: 0 },
        t3Lv7: { jewelName: "7레벨 멸화,홍염", lowestPrice: 0, avgPrice: 0, cashValue: 0 },
        t3Lv8: { jewelName: "8레벨 멸화,홍염", lowestPrice: 0, avgPrice: 0, cashValue: 0 },
        t3Lv9: { jewelName: "9레벨 멸화,홍염", lowestPrice: 0, avgPrice: 0, cashValue: 65000 },
        t3Lv10Att: { jewelName: "10레벨 멸화", lowestPrice: 0, avgPrice: 0, cashValue: 210000 },
        t3Lv10Wt: { jewelName: "10레벨 홍염", lowestPrice: 0, avgPrice: 0, cashValue: 175000 },
        t4Lv5: { jewelName: "5레벨 겁화,작열", lowestPrice: 0, avgPrice: 0, cashValue: 0 },
        t4Lv6: { jewelName: "6레벨 겁화,작열", lowestPrice: 0, avgPrice: 0, cashValue: 0 },
        t4Lv7: { jewelName: "7레벨 겁화,작열", lowestPrice: 0, avgPrice: 0, cashValue: 65000 },
        t4Lv8Att: { jewelName: "8레벨 겁화", lowestPrice: 0, avgPrice: 0, cashValue: 195000 },
        t4Lv8Wt: { jewelName: "8레벨 작열", lowestPrice: 0, avgPrice: 0, cashValue: 175000 },
        t4Lv9Att: { jewelName: "9레벨 겁화", lowestPrice: 0, avgPrice: 0, cashValue: 540000 },
        t4Lv9Wt: { jewelName: "9레벨 작열", lowestPrice: 0, avgPrice: 0, cashValue: 400000 },
        t4Lv10Att: { jewelName: "10레벨 겁화", lowestPrice: 0, avgPrice: 0, cashValue: 1600000 },
        t4Lv10Wt: { jewelName: "10레벨 작열", lowestPrice: 0, avgPrice: 0, cashValue: 900000 },
    },
    goldPrice: { previous: 70, current: 73.66},
    lastUpdateTime: null
};

// 리듀서
const jewelReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_JEWEL_PRICE: {
            const { jewelLevel, lowestPrice, avgPrice } = action.payload;
            return {
                ...state,
                jewels: {
                    ...state.jewels,
                    [jewelLevel]: {
                        ...state.jewels[jewelLevel],
                        lowestPrice,
                        avgPrice }
                }
            };
        }
        case UPDATE_LOW_JEWELS_CASH_VALUE: {
            const { jewelLevel, cashValue } = action.payload;
            return {
                ...state,
                jewels: {
                    ...state.jewels,
                    [jewelLevel]: {
                        ...state.jewels[jewelLevel],
                        cashValue}
                }
            };
        }
        case UPDATE_TIME: {
            return {
                ...state,
                lastUpdateTime: action.payload // lastUpdateTime을 업데이트
            };
        }
        case UPDATE_GOLD_PRICE: {
            return {
                ...state,
                goldPrice: {
                    previous: state.goldPrice.current,
                    current: action.payload
                }
            };
        }
        default:
            return state;
    }
};

export default jewelReducer;