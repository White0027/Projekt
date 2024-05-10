export const formatDate = (dateString) => {
    if (!dateString) return ""; // If dateString is null or undefined, return empty string
    
    const date = new Date(dateString); // Parse dateString into a Date object

    // Extract day, month, and year components from the Date object
    const day = date.getDate().toString().padStart(2, "0"); // Ensure two digits for day
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Ensure two digits for month (January is 0)
    const year = date.getFullYear();

    return `${day}. ${month}. ${year}`;
};