export const addCommaToNumber = (price: number | string): number | string => {
    const priceToString = typeof price === "number" ? price.toString() : price;

    return price < 1000
        ? priceToString
        : `${addCommaToNumber(
              priceToString.slice(0, priceToString.length - 3)
          )},${priceToString.slice(-3)}`;
};

export const getPropertyInArray = <T extends Object>(
    list: Array<any>,
    getKeyList: Array<string>
): T[] => {
    return list.map((obj) => {
        return getKeyList.reduce((acc, key) => {
            return { ...acc, [key]: obj[key] };
        }, {} as T);
    });
};
