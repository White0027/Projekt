import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { rowFilterUpdateOp, rowFilterUpdateValue } from './_filterFunctions';

export const DateFilterRow = ({ filter = { "name": { "": "" } }, onChange }) => {
    const [id] = useState(crypto.randomUUID());

    const onChangeOp = (e) => {
        const opName = e.target.value;
        const newFilter = rowFilterUpdateOp(filter, opName)
        console.log("FilterRow.onChangeOp", opName, newFilter);
        if (onChange) {
            onChange(newFilter);
        }
    };

    const onChangeValueE = (e) => {
        const value = e.target.value
        const newFilter = rowFilterUpdateValue(filter, value)
        console.log("FilterRow.onChangeValue", newFilter);
        if (onChange) {
            onChange(newFilter);
        }
    };

    let opName = "";
    let opValue = "";

    if (filter) {
        [opName] = Object.keys(filter);
        [opValue] = Object.values(filter);
    }

    return (
        <Row>
            <Col>
                <div className="form-floating">
                    <select className="form-select" id={"select1" + id} value={opName} onChange={onChangeOp} aria-label="">
                        <option value=""></option>
                        <option value="_eq">Je rovno</option>
                        <option value="_gt">Je větší než</option>
                        <option value="_ge">Je větší než nebo rovno</option>
                        <option value="_lt">Je menší než</option>
                        <option value="_le">Je menší než nebo rovno</option>
                    </select>
                    <label htmlFor={"select1" + id}>{"FloatFilterDialog"}</label>
                </div>
            </Col>
            <Col>
                <div className="form-floating">
                    <input type="date" className="form-control" id={"input1" + id} value={opValue} onChange={onChangeValueE}/>
                    {/* <TextInput value={opValue} onChange={onDateChange} /> */}
                    <label htmlFor={"input1" + id}>{"Hodnota"}</label>
                </div>
            </Col>
        </Row>
    );
};
