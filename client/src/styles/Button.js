import styled, { css } from 'styled-components';

const Button = styled.button`
    padding: 0.4rem 1rem;
    background: linear-gradient(90deg, ${(props) => props.theme.purple}, ${(props) => props.theme.pink});
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.white};
    border-radius: 3px;
    letter-spacing: 1.1px;

    ${(props) =>
        props.grey &&
        css`
            background: ${(props) => props.theme.darkGrey};
            border: 1px solid ${(props) => props.theme.darkGrey};
            color: ${(props) => props.theme.secondaryColor};
        `
    }
`;

export default Button;