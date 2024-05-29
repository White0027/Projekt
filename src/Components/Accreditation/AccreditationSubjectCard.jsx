// import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';
// import Row from 'react-bootstrap/Row'
// import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

// export const AccreditationSubjectCard = ({subject, children}) => {
//     return (
//         <CardCapsule title={"Předměty"}>
//         <div>
//             <Row>
//             <ProxyLink to={"/subject/view/ce250a68-b095-11ed-9bd8-0242ac110002"}>Programování</ProxyLink>
//             </Row>
//             <Row>
//             <ProxyLink to={"/subject/view/3ed497ea-ab40-4e94-a93e-9d9627497652" }>Databáze</ProxyLink>
//             </Row>
//         </div>
//         </CardCapsule> 
//     )
// }

import { AccreditationCreateLink, AccreditationLink } from "../Accreditation/AccreditationLink";
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