import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectStyle } from './select.styles';
import { SelectProps } from './select.typings';

const Select = ({ ...props }: SelectProps) => {
    const p = props.menus;
    // const [p, setmenu] = React.useState(["Last 3 month", "Last week", "Yesterday", "Today"]);

    const [state, setState] = React.useState({
        age: '10',
        name: 'hai',
        labelWidth: 0,
    });
    const inputLabelRef = React.useRef(null);

    React.useEffect(() => {
        setState({
            ...state,
            labelWidth: 180,
        });
    }, []);

    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <SelectStyle {...props}
            value={state.age}
            onChange={handleChange}>
            {p.map((t, idx) =>
                <MenuItem value={10} key={idx}>{t}</MenuItem>
            )}
        </SelectStyle>

    );
}

export default Select;