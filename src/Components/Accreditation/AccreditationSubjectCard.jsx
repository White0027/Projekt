import { formatDate } from "../Misc/FormatDate.jsx";
import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import { SortableTable } from "../Misc/SortableTable.jsx";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";
import Col from 'react-bootstrap/Col';


export const AccreditationSubjectCard = ({ accreditation }) => {
    const columns = [
        { key: 'name', label: 'Předměty' },
    ];

    const renderRow = (row, columnKey) => {
        if (columnKey === 'name') {
            return (
                <Col>
                    <ProxyLink to={`/subject/view/${row.id}`}>
                        {row[columnKey]}
                    </ProxyLink>
                </Col>
            );
        } else {
            return formatDate(row[columnKey]);
        }
    };

    return (
        <CardCapsule title={<>Přeměty pro: {accreditation?.name}</>}>
            <SortableTable
                columns={columns}
                data={accreditation?.subjects}
                renderRow={renderRow}
            />
        </CardCapsule>
    );
};