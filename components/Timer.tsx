interface Props {
    time: number;
}
const Timer = (props: Props) => <p><strong>Time: </strong>{props.time}</p>
export default Timer