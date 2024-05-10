export const formatNumber = (numberFloat) => {
    if (!numberFloat) return "";
    
    return numberFloat.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true
    });
};