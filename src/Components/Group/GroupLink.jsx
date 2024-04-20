/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

export const GroupLink_ = ({group}) => {
    return (
        <Link to={"/group/view/" + group?.id}>{group?.name}</Link>
    )
}