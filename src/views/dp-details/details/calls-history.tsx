import { ReactNode, useState, useCallback } from 'react';
import { Collapse, Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import Button from '../../../components/button/button';
import { CallHistoryProps } from './details.typings';
import { Link } from 'react-router-dom';
// const Panel = Collapse.Panel;
const customPanelStyle = {
    borderRadius: 0,
    border: 0,
    align: 'left'
};

const CallHistory = ({ header, children }: CallHistoryProps) => {
    const [inputText, setInputText] = useState('');

    const [paraText, setParaText] = useState(false);
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputText(e.currentTarget.value);
        },
        [inputText]
    )

    const handleClick = useCallback(
        () => {
            setParaText(!paraText)
        }, [paraText])

    return (
        <Card className='p40'>
            {children}

            <p><Link to='/dplist'> Back to List</Link></p>
            <hr />

            <h4>This one is for test cases</h4>
            <Grid container spacing={24}>
                <Grid item sm={6}>
                    <h2 className='buttonText'>{paraText ? 'Yes' : 'No'}</h2>
                    <Button className='toggleBtn' onClick={handleClick}>Toggle para text</Button>
                </Grid>
                <Grid item sm={6}>
                    <h3 className="inputText">{inputText}</h3>
                    <input className='inputBox' type="text" onChange={handleChange} />
                </Grid>
            </Grid>

            {/* <Collapse bordered={false} >
                <Panel showArrow={false} header={header} key="1" style={customPanelStyle}>
                    <div>{children}</div>
                </Panel>
            </Collapse> */}
        </Card>
    );
}

export default CallHistory;