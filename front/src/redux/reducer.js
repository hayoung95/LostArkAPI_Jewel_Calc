import { UPDATE_JEWEL_PRICE, UPDATE_TIME } from './actions';

const initialState = {
    jewels: {
        t3Lv5: { lowestPrice: 0, avgPrice: 0 },
        t3Lv6: { lowestPrice: 0, avgPrice: 0 },
        t3Lv7: { lowestPrice: 0, avgPrice: 0 },
        t3Lv8: { lowestPrice: 0, avgPrice: 0 },
        t3Lv9: { lowestPrice: 0, avgPrice: 0 },
        t3Lv10Att: { lowestPrice: 0, avgPrice: 0 },
        t3Lv10Wt: { lowestPrice: 0, avgPrice: 0 },
        t4Lv5: { lowestPrice: 0, avgPrice: 0 },
        t4Lv6: { lowestPrice: 0, avgPrice: 0 },
        t4Lv7: { lowestPrice: 0, avgPrice: 0 },
        t4Lv8Att: { lowestPrice: 0, avgPrice: 0 },
        t4Lv8Wt: { lowestPrice: 0, avgPrice: 0 },
        t4Lv9Att: { lowestPrice: 0, avgPrice: 0 },
        t4Lv9Wt: { lowestPrice: 0, avgPrice: 0 },
    },
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
                    [jewelLevel]: { lowestPrice, avgPrice }
                }
            };
        }
        case UPDATE_TIME: {
            return {
                ...state,
                lastUpdateTime: action.payload // lastUpdateTime을 업데이트
            };
        }
        default:
            return state;
    }
};

export default jewelReducer;