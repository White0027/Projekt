import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import { SortableTable } from '../Misc/SortableTable.jsx';
import { UserLink } from '@hrbolek/uoisfrontend-users/src';

export const AccreditationStudentsCard = ({ accreditation, title = "Studenti" }) => {
    const columns = [
        { key: 'fullname', label: 'Celé jméno' }
    ];

    const students = accreditation?.students || [];
    const data = students.map(student => ({
        id: student?.student?.id,
        user: student?.student
    }));

    const renderRow = (row) => {
        return (
            <UserLink user={row.user} />
        );
    };

    return (
        <CardCapsule title={title}>
            <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.user.fullname}</td>
                            <td>{row.user.fullname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>	
        </CardCapsule>
    );
};
