// import { Row, Col } from 'antd';
// import { Select } from 'antd';
// import { Icon } from 'antd';

// const Option = Select.Option;

type props = { month: string, handler: (val: string) => void }

const Header = ({ month, handler }: props) => {
    return (
        <div></div>
        // <Row>
        //     <Col span={12}>
        //         <h4 className='text-left'>Remarks & Call History</h4>
        //     </Col>
        //     <Col span={11}>
        //         <span onClick={(event) => { event.stopPropagation(); }}>
        //             <Select defaultValue={month} style={{ padding: '0 15px' }} onChange={val => { 
        //                     console.log(val);
        //                     handler(val);
        //                 }}>
        //                 <Option value="last1">Last 1 Month</Option>
        //                 <Option value="last2">Last 2 Months</Option>
        //                 <Option value="last3">Last 3 Months</Option>
        //                 <Option value="last6">Last 6 months</Option>
        //             </Select>
        //         </span>
        //     </Col>
        //     <Col span={1}>
        //         <Icon type="down" />
        //     </Col>
        // </Row>
    )
    
}
export default Header;