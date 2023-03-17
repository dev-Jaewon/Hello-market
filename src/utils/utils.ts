export const addCommaToNumber = (price: number | string): number | string => {
    const priceToString = typeof price === "number" ? price.toString() : price;

    return price < 1000
        ? priceToString
        : `${addCommaToNumber(
              priceToString.slice(0, priceToString.length - 3)
          )},${priceToString.slice(-3)}`;
};
