/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const GroupLink = ({group}) => {
    return (
        <Link to={"/group/" + group?.id}>{group?.name}</Link>
    )
}