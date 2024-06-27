import { Dropdown } from "react-bootstrap";
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';

export const AccreditationLink_ = ({accreditation, children}) => {
    return (
        <ProxyLink to={"/accreditation/view/" + accreditation?.id}>{children?children:accreditation?.name}</ProxyLink>
    )
}

export const AccreditationLink = ({accreditation, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <AccreditationLink_ accreditation={accreditation}>
                    {children}
                </AccreditationLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/accreditation/view/" + accreditation?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/accreditation/edit/" + accreditation?.id} >Editovat</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/subjects/edit/" + accreditation?.subjects?.id} >Editovat Předměty</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>         
            )
    } else {
        return (
            <AccreditationLink_ accreditation={accreditation}>{children}</AccreditationLink_>
        )
    }
}

export const AccreditationCreateLink = ({menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                Akreditace:
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={"div"} ><ProxyLink to={"/accreditation/create"} >Vytvořit</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    } else {
        return (
            <div>Error</div>
        )
    }
}