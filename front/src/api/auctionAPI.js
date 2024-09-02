import instance from "./axiosInstance";

export const getAuctionItems = async (itemName) => {
  const response = await instance.post("/auctions/items", {
    ItemName: itemName,
  });
  return response.data;
};