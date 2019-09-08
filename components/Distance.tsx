interface Props {
    meters: number;
}
function convertMetersToMiles(meters: number) {
    return (meters / 1609.344).toFixed(4)
}
const Distance = (props: Props) => <p><strong>Distance: </strong>{convertMetersToMiles(props.meters)} miles</p>
export default Distance