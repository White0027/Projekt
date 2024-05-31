import { formatDate } from "../Misc/FormatDate.jsx";
import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import { SortableTable } from "../Misc/SortableTable.jsx";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';


export const AccreditationSubjectCard = ({ accreditation }) => {
    const columns = [
        { key: 'name', label: 'Předměty' },
    ];

const renderRow = (row, columnKey) => {
    if (columnKey === 'name') {
        return (
            <Col>
                <Dropdown className="d-inline mx-2" autoClose="outside" size="sm">
                    <ProxyLink to={`/subject/view/${row.id}`}>
                        {row[columnKey]}
                    </ProxyLink>
                    <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm" />
                    <Dropdown.Menu>
                        <Dropdown.Item as={"div"}>
                            <ProxyLink to={`/subject/view/${row.id}`}>Zobrazit</ProxyLink>
                        </Dropdown.Item>
                        <Dropdown.Item as={"div"}>
                            <ProxyLink to={`/subject/edit/${row.id}`}>Editovat</ProxyLink>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
