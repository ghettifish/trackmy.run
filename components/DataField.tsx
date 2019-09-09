import styled from "./styles/theme";

interface Props {
    label?: string;
    children?: any;
}

const DataField  = (props: Props) => 
    <Styled>
        <p className="label">{props.label}</p>
        {props.children}
    </Styled>

const Styled = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    font-size: 52px;
    font-weight: 100;
    color: ${props => props.theme.light};
    .label {
        font-size:24px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
`

export default DataField;