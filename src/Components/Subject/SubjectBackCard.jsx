import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row';

export const SubjectBackCard = ({accreditation, children}) => {
    return (
        <CardCapsule title={"Akreditace"}>
            <Row>
                <ProxyLink to={"/accreditation/view/2766fc9a-b095-11ed-9bd8-0242ac110002"}>{children?children:accreditation?.name}Akreditace</ProxyLink>
            </Row>
        </CardCapsule>
    )
}

