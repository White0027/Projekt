import { Dropdown } from "react-bootstrap";
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';

export const SemesterLink_ = ({semester, children}) => {
    return (
        <ProxyLink to={"/semester/view/" + semester?.id}>{children?children:semester?.name}</ProxyLink>
    )
}

export const SemesterLink = ({semester, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <SemesterLink_ semester={semester}>
                    {children}
                </SemesterLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/semester/view/" + semester?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/semester/edit/" + semester?.id} >Editovat</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>         
            )
    } else {
        return (
            <SemesterLink_ semester={semester}>{children}</SemesterLink_>
        )
    }
}

export const SemesterCreateLink = ({menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                Semestr:
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={"div"} ><ProxyLink to={"/semester/create"} >Vytvořit</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    } else {
        return (
            <div>Error</div>
        )
    }
}