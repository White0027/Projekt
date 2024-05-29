import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import { SortableTable } from '../Misc/SortableTable.jsx';

const UserShort = ({ fullname }) => {
    return (
        <>
            {fullname} <br />
        </>
    );
};

export const AccreditationStudentsCard = ({ accreditation, title = "Studenti", valid = true }) => {
    const columns = [
        { key: 'fullname', label: 'Celé jméno' }
    ];

    const students = accreditation?.students || [];
    const data = students.map(student => ({
        fullname: student?.student?.fullname
    }));

    const renderRow = (row, columnKey) => {
        return <UserShort fullname={row.fullname} />;
    };

    return (
        <CardCapsule title={title}>
            <SortableTable
                columns={columns}
                data={data}
                renderRow={renderRow}
            />
        </CardCapsule>
    );
};
