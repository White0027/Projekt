/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

export const SubjectsRawCard = ({subjects}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={subjects} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}