import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import { SortableTable } from "../Misc/SortableTable.jsx";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";
import { Col, Dropdown } from "react-bootstrap";

export const SubjectLinkCard = ({ subject }) => {
    const columns = [
        { key: 'name', label: 'Semestr' }
    ];

    const renderRow = (row, columnKey) => {
        switch (columnKey) {
            case 'name':
                return (
                    <Col>
                        <Dropdown className="d-inline mx-2" autoClose="outside" size="sm">
                            <ProxyLink to={`/semester/view/${row.id}`}>
                                {row.subject.name} {row.index + 1}
                            </ProxyLink>
                            <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm" />
                            <Dropdown.Menu>
                                <Dropdown.Item as={"div"}>
                                    <ProxyLink to={`/semester/view/${row.id}`}>Zobrazit</ProxyLink>
                                </Dropdown.Item>
                                <Dropdown.Item as={"div"}>
                                    <ProxyLink to={`/semester/edit/${row.id}`}>Editovat</ProxyLink>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
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