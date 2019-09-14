import { CallList } from './details.typings';

type Props = {
    list: CallList
}
const CallsList = ({ list }: Props) => {
    return (
        <ul>
            { list.map((item, idx) => <li key={idx}>{JSON.stringify(item.remarks)}</li>) }
        </ul>
    )
}
export default CallsList;