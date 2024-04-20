/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

export const GroupLink_ = ({group}) => {
    return (
        <Link to={"/group/view/" + group?.id}>{group?.name}</Link>
    )
}


// const composeLink()

export const GroupLink = ({group, children, menu=true}) => {
    let [searchParams, setSearchParams] = useSearchParams()
    const asDict = {}
    for (const [key, value] of searchParams) {
        asDict[key] = value
        
    }
    console.log(asDict)
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <GroupLink_ group={group}>
                    {children}
                </GroupLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                {/* ⋮ */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><Link to={"/group/view/" + group?.id} >Zobrazit</Link></Dropdown.Item>
                    {/* <Dropdown.Item href={"/group/view/" + group?.id} >Zobrazit</Dropdown.Item> */}
                    <Dropdown.Item href={"/events/groupevents/view/" + group?.id}>Rozvrh</Dropdown.Item>

                    <Dropdown.Item ><Link to={"/group/edit/" + group?.id} >Editovat</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={"/grouproles/edit/" + group?.id} >Editovat role</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <GroupLink_ group={group}>{children}</GroupLink_>
        )
    }
}