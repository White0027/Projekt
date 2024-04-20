import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { rowFilterUpdateValue } from './_filterFunctions';

export const BooleanFilterRow = ({ filter = { "name": { "": "" } }, onChange }) => {
    const [id] = useState(crypto.randomUUID());

    const onChangeValueE = (e) => {
        const value = e.target.value
        const newFilter = rowFilterUpdateValue(filter, value)
        console.log("FilterRow.onChangeValue", newFilter);
        if (onChange) {
            onChange(newFilter);
        }
    };

    let opValue = "";

    if (filter) {
        [opValue] = Object.values(filter);
    }

    return (
        <Row>
            <Col>
                <div className="form-floating">
                    <select className="form-select" id={"select1" + id} value={opValue} onChange={onChangeValueE} aria-label="">
                        <option value=""></option>
                        <option value={true}>Pravda</option>
                        <option value={false}>Nepravda</option>
                    </select>
                    <label htmlFor={"select1" + id}>{"FloatFilterDialog"}</label>
                </div>            
            </Col>
        </Row>
    );
};
