/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";

/**
 * Card encapsulator as simple as possible
 * @param {*} param0 
 * @returns 
 */
export const CardCapsule = ({title="", children=null}) => 
    <Card>
        <Card.Header>
            <Card.Title>
                {title}
            </Card.Title>
        </Card.Header>
        <Card.Body>
            {children}
        </Card.Body>
    </Card>