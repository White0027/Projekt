import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import { SortableTable } from '../Misc/SortableTable.jsx';

export const SemesterLinkCard = ({ semester }) => {
    const columns = [
        { key: 'index', label: 'Pořadí' },
        { key: 'name', label: 'Téma' }
    ];

    const renderRow = (row, columnKey) => {
        switch (columnKey) {
            case 'index':
                return row.index + 1;
            case 'name':
                return row.name;
            default:
                return row[columnKey];
        }
    };

    const data = semester?.topics.map((topic, index) => ({
        ...topic,
        index
    })) || [];

    return (
        <CardCapsule title={"Téma Semestru"}>
            <SortableTable
                columns={columns}
                data={data}
                renderRow={renderRow}
            />
        </CardCapsule>
    );
};
