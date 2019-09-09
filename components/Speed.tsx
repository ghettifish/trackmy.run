import DataField from "./DataField";

interface Props {
    speed: number;
}

const Speed = (props: Props) => <DataField label="Speed">{(props.speed).toFixed()} mph</DataField>
export default Speed