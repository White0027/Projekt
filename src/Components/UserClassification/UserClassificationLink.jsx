import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';

export const UserClassificationLink_ = ({userclassification, children}) => {
    return (
        <ProxyLink to={"/UserClassification/view/" + userclassification?.id}>{children?children:userclassification?.name}</ProxyLink>
    )
}

export const UserClassificationLink = ({userclassification, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <UserClassificationLink_ userclassification={userclassification}>
                    {children}
                </UserClassificationLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/UserClassification/view/" + userclassification?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>         
            )
    } else {
        return (
            <UserClassificationLink_ UserClassification={UserClassification}>{children}</UserClassificationLink_>
        )
    }
}
