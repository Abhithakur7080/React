import styled from 'styled-components'

export const Container = styled.div`
flex: ${(props) => props.flex};
display: flex;
flex-direction: column;
gap: 30px;
`;

export const Button = styled.button`
outline: none;
border: none;
cursor: pointer;
margin: 10px;
padding: 7px 15px;
color: #fff;
font-weight: bold;
background-color: ${(props) => props.bg};
`;