import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import { SortableTable } from '../Misc/SortableTable.jsx';
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';
import { UserLink } from '@hrbolek/uoisfrontend-users/src'

const UserShort = ({user}) => {
    return (
        <>
            <UserLink user={user} /> <br/>
        </>
    )
}

export const AccreditationStudentsCard = ({ accreditation, title = "Studenti" }) => {
    const columns = [
        { key: 'fullname', label: 'Celé jméno' }
    ];

    const students = accreditation?.students || [];
    const data = students.map(student => ({
        id: student?.student?.id,
        fullname: student?.student?.fullname
    }));

    const renderRow = (row, columnKey) => {
        return (
            <ProxyLink to={`/user/${row.id}`}>
                <UserShort fullname={row.fullname} />
            </ProxyLink>
        );
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