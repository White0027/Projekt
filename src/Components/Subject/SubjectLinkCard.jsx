import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row'
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

export const SubjectLinkCard = ({subject, children}) => {
    return (
        <CardCapsule title={"Předměty"}>
        <div>
            <Row>
            <ProxyLink to={"/subject/view/ce250a68-b095-11ed-9bd8-0242ac110002"}>Programování</ProxyLink>
            </Row>
            <Row>
            <ProxyLink to={"/subject/view/3ed497ea-ab40-4e94-a93e-9d9627497652" }>Databáze</ProxyLink>
            </Row>
        </div>
        </CardCapsule> 
    )
}