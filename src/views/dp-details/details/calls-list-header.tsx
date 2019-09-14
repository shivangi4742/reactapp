// import { Row, Col, Button } from "antd";
// import { Modal } from 'antd';
// import { List } from 'antd';
// import { Checkbox } from 'antd';
// import { Input } from 'antd';
import {  useState, useCallback } from "react";
import { useDispatch } from 'redux-react-hook';
import { addCall } from "./details.actions";

// const { TextArea } = Input;

type modalProps = {
    showModal: boolean,
    handler: () => void
}
const data: string[] = ['Remarks 1', 'Remarks 2', 'Remarks 3', 'Remarks 4', 'Other Remarks'];
const Content = ({ showModal = false, handler = () => {} } : modalProps) => {
    // Maintain a local statCheckboxe for remarks list
    const initialRemarks: string []  = [];
    const [isOtherRemarksEnabled, setOtherRemarks] = useState(true);
    const [remarks, setRemarks] = useState(initialRemarks);

    const onChange = (item: string) => {
        if (item === 'Other Remarks'){
           // Enable/Disable textarea 
            setOtherRemarks(!isOtherRemarksEnabled);
        }
        if (remarks.indexOf(item) === -1) {
            setRemarks([...remarks, item]);
        }
    }
    const dispatch = useDispatch();
    const okHandler = useCallback(
        () => {
            dispatch(addCall(remarks))
            handler();
        },
        [remarks]
    )
    // on Save use that local remarks list and dispatch action with array of remark strings
    return (
        <div></div>
        // <Row>
        //     <Col span={6} className='text-left'>Date & Time</Col>
        //     <Col span={6} className='text-left'>Disposition/Remarks</Col>
        //     <Col span={6} className='text-left'>Entered by</Col>
        //     <Col span={6} className='text-right'>
        //         <Button onClick={handler}>ADD NEW</Button>
        //     </Col>
        //     {showModal && <Modal
        //         title="Remarks"
        //         visible={showModal}
        //         onOk={okHandler}
        //         onCancel={() => handler() }
        //     >
        //         <List dataSource={data} renderItem={(item: string) => (
        //             <List.Item>
        //                 <Checkbox onChange={() => onChange(item)} />
        //                 <span>{item}</span>
        //             </List.Item>)}
        //         />
        //         <TextArea rows={4} disabled={isOtherRemarksEnabled} />
        //     </Modal>}
        // </Row>
    )
}
export default Content;