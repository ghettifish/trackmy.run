import DataField from "./DataField";

interface Props {
    meters: number;
}
function convertMetersToMiles(meters: number) {
    return (meters / 1609.344).toFixed(4)
}
const Distance = (props: Props) => 
    <DataField label="Distance">
        {convertMetersToMiles(props.meters)} miles
    </DataField>
    
export default Distance