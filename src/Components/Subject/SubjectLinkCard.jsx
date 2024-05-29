import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import { SortableTable } from "../Misc/SortableTable.jsx";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

export const SubjectLinkCard = ({ subject }) => {
    const columns = [
        { key: 'index', label: 'Pořadí' },
        { key: 'name', label: 'Semestr' }
    ];

    const renderRow = (row, columnKey) => {
        switch (columnKey) {
            case 'index':
                return <div style={{ textAlign: 'center' }}>{row.index + 1}</div>;
            case 'name':
                return (
                    <ProxyLink to={`/semester/view/${row.id}`}>
                        {row.subject.name}
                    </ProxyLink>
                );
            default:
                return row[columnKey];
        }
    };

    const data = subject?.semesters.map((semester, index) => ({
        ...semester,
        index
    })) || [];

    const renderHeader = (column) => {
        if (column.key === 'index') {
            return <div style={{ textAlign: 'center' }}>{column.label}</div>;
        }
        return column.label;
    };

    return (
        <CardCapsule title={<>Semestry pro: {subject?.name}</>}>
            <SortableTable
                columns={columns}
                data={data}
                renderRow={renderRow}
                renderHeader={renderHeader}
            />
        </CardCapsule>
    );
};
