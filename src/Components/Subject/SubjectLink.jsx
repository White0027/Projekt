import { Dropdown } from "react-bootstrap";
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';

export const SubjectLink_ = ({subject, children}) => {
    return (
        <ProxyLink to={"/granting/subject/view/" + subject?.id}>{children?children:subject?.name}</ProxyLink>
    )
}

export const SubjectLink = ({subject, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <SubjectLink_ subject={subject}>
                    {children}
                </SubjectLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/subject/view/" + subject?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/subject/edit/" + subject?.id} >Editovat</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>         
            )
    } else {
        return (
            <SubjectLink_ subject={subject}>{children}</SubjectLink_>
        )
    }
}

export const SujbectCreateLink = ({menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                Předmět:
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={"div"} ><ProxyLink to={"/subject/create"} >Vytvořit</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    } else {
        return (
            <div>Error</div>
        )
    }
}