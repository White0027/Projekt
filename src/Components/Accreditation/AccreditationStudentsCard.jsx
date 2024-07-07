import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
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

    return (
        <CardCapsule title={title}>
            <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Celé Jméno</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <UserLink user={row.user}>{row.user.fullname}</UserLink>
                            </td>
                            <td>{row.user.fullname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>	
        </CardCapsule>
    );
};

