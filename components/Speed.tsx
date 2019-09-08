interface Props {
    speed: number;
}

const Speed = (props: Props) => <p><strong>Speed: </strong>{(props.speed).toFixed()} mph</p>
export default Speed