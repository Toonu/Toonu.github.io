import Select from "react-select";
import { useState } from 'react';

function NumberInput({ name, label, value, onChange }) {
    return <label htmlFor={name}>
        {label}
        <input onChange={onChange} id={name} value={value} type="number" name={name} required/>
    </label>
}

function Result({ value1: v1, value2: v2, operation }) {
    if (v1 === null || v2 === null || operation === null) return <div className="Result">Result: </div>;

    let result;
    switch (operation.value) {
        case "scitani":
            result = parseFloat(v1) + parseFloat(v2);
            break;
        case "odcitani":
            result = parseFloat(v1) - parseFloat(v2);
            break;
        default:
            result = "Invalid operation";
    }

    return <div className="Result">Result: {result}</div>;
}

export default function CalculatorForm() {
    const [value1, setV1] = useState("");
    const [value2, setV2] = useState("");
    const [operation, setOperation] = useState(null);

    return (
        <div>
            <form className="CalculatorForm" onSubmit={(e) => e.preventDefault()}>
                <NumberInput label="První číslo:" value={value1} onChange={(e) => setV1(e.target.value)}/>
                <NumberInput label="Druhé číslo:" value={value2} onChange={(e) => setV2(e.target.value)}/>
                <Select 
                    options={[
                        { value: "scitani", label: "Sčítání" }, 
                        { value: "odcitani", label: "Odčítání" }
                    ]} 
                    onChange={(selectedOption) => setOperation(selectedOption)} 
                />
            </form>
            <Result value1={value1} value2={value2} operation={operation} />
        </div>
    );
}