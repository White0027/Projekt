/**
 * Formats a date string for display.
 *
 * This function takes a date string in ISO 8601 format (e.g., '2024-05-25'),
 * Converts it to a localized Czech format: "DD. MM. YYYY". 
 * If invalid or empty date string is provided, it returns an empty string.
 *
 * @function
 * 
 * @param {string} [dateString] - The date string in ISO 8601 format to be formatted 
 *                                (e.g., '2024-05-25').
 * 
 * @returns {string} The formatted date string in the format "DD. MM. YYYY"
 *                                or an empty string if not valid
 */

export const formatDate = (dateString) => {
    if (!dateString) return ""; // If dateString is null or undefined, return empty string
    
    const date = new Date(dateString); // Parse dateString into a Date object

    // Extract day, month, and year components from the Date object
    const day = date.getDate().toString().padStart(2, "0"); // Ensure two digits for day
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Ensure two digits for month (January is 0)
    const year = date.getFullYear();

    return `${day}. ${month}. ${year}`;
};