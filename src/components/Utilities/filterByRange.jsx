import { Form } from "react-bootstrap";

export default function FilterByRange({
  value,
  options,
  defaultValue,
  onChange,
}) {
  
  return (
     <div className="headerProduct">
          <Form.Select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="productSelect-2"
          >
    
            <option selected="selected">{defaultValue}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
      </Form.Select>
          </div>
        );
          };



         
