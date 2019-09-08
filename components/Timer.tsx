interface Props {
    time: number;
}
const getSeconds = (time:number) =>  (
    (time % 60) < 10 
        ? "0"+(time % 60).toFixed() 
        : (time % 60).toFixed()
)

const getMinutes = (time: number) => (
    Math.floor(time / 60) < 10 
        ? "0"+(time / 60).toFixed() 
        : (time / 60).toFixed()
)

const getHours = (time: number) => (
    Math.floor(time / 3600) < 10 
        ? "0"+(time / 3600).toFixed() 
        : (time / 3600).toFixed()
)

const getTimestamp = (time: number) => `${getHours(time)}:${getMinutes(time)}:${getSeconds(time)}`

const Timer = (props: Props) => <p><strong>Time: </strong>{getTimestamp(props.time)}</p>
export default Timer