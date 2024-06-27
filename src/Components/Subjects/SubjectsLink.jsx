import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';

export const SubjectsLink = ({accreditation}) => {
export const SubjectsLink = ({accreditation}) => {
        return (
            <ProxyLink to={"/subjects/edit/" + accreditation?.subjects?.id}>{"Editace předmětů:"}</ProxyLink>     
            <ProxyLink to={"/subjects/edit/" + accreditation?.subjects?.id}>{"Předměty:"}</ProxyLink>     
            )
        }

// export const SujbectCreateLink = ({menu=true}) => {
//     if (menu) {
//         return (
//             <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
//                 Předmět:
//                 <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                     <Dropdown.Item as={"div"} ><ProxyLink to={"/subject/create"} >Vytvořit</ProxyLink></Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>
//         )
//     } else {
//         return (
//             <div>Error</div>
//         )
//     }
// }