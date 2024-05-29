import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import { SortableTable } from "../Misc/SortableTable.jsx";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

export const SubjectLinkCard = ({ subject }) => {
    const columns = [
        { key: 'name', label: 'Semestr' }
    ];

    const renderRow = (row, columnKey) => {
        switch (columnKey) {
            case 'name':
                return (
                    <ProxyLink to={`/semester/view/${row.id}`}>
                        {row.subject.name} {row.index + 1}
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

    return (
        <CardCapsule title={<>Semestry pro: {subject?.name}</>}>
            <SortableTable
                columns={columns}
                data={data}
                renderRow={renderRow}
            />
        </CardCapsule>
    );
};
