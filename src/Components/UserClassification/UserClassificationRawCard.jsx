import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

export const UserClassificationRawCard = ({userclassification}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={userclassification} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}