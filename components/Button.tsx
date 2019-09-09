import styled from './styles/theme';

const Button = styled.button`
    padding: 10px 30px ;
    background: none;
    color: ${props => props.theme.green};
    border: solid 1px ${props => props.theme.green};
    margin: 15px;
    font-family: sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 2px;
`;

export default Button;