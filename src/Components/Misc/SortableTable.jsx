import { useState } from 'react';
import { formatDate } from "../Misc/FormatDate.jsx"; // Ensure you import the formatDate function
import { DeleteButton } from '@hrbolek/uoisfrontend-shared/src/Components/DeleteButton.jsx'

/**
 * SortableTable Component
 *
 * Renders a table with sortable columns and optional row editing capabilities.
 * table data is sorted based on the clicked column header, and
 * rows are styled based on date comparisons (overdue = red, "active" eg current date before end of project = green
 * inactive eg, current date otuside of bouns, white).
 *
 * @component
 *
 * @param {Object[]} columns - array of column objects
 * @param {string} columns[].key - unique key for the column
 * @param {string} columns[].label - column headers
 * @param {Object[]} data - array of objects representing the table rows. The properties of 
 *                         each object matches the `key` values in the `columns` array.
 * @param {function} renderRow - function that takes a row object and a column key 
 *                              and returns the JSX element to be rendered in that cell.
 * @param {boolean} [edit=false] - if true, adds delete buttons to.
 *
 * @returns {JSX.Element} A table element with sortable headers and customizable row content.
 */

export const SortableTable = ({ columns, data, renderRow, edit = false }) => {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const getValueByPath = (obj, path) => {
        return path.split('.').reduce((acc, key) => acc[key], obj);
    };

    const sortedData = () => {
        if (!sortBy) return data;

        return data.slice().sort((a, b) => {
            const aValue = getValueByPath(a, sortBy);
            const bValue = getValueByPath(b, sortBy);

            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    };

    const handleSort = (column) => {
        if (sortBy === column) {
            toggleSortOrder();
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    const getRowClass = (startdate, enddate) => {
        const today = new Date();
        const startDate = new Date(startdate);
        const endDate = new Date(enddate);

        if (endDate < today) {
            return 'table-danger';
        } else if (startDate <= today && endDate >= today) {
            return 'table-success';
        } else {
            return '';
        }
    };

    return (
        <table className="table">
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.key} onClick={() => handleSort(column.key)} className="sortable-header">
                        {column.label}
                    </th>
                ))}
                {edit && (
                    <td>
                        <DeleteButton onClick={"#"}>Smazat vše</DeleteButton>
                    </td>
                )}
            </tr>
            </thead>
            <tbody>
            {sortedData().map((row, index) => (
                <tr key={index} className={getRowClass(row.startdate, row.enddate)}>
                    {columns.map((column) => (
                        <td key={column.key}>{renderRow(row, column.key)}</td>
                    ))}
                    {edit && (
                        <td>
                            <DeleteButton onClick={"#"}>Smazat</DeleteButton>
                        </td>
                    )}

                </tr>
            ))}
            </tbody>
        </table>
    );
};