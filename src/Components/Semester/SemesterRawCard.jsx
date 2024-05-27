/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

export const SemesterRawCard = ({semester}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={semester} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}