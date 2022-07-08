import styled from 'styled-components/macro';


export const Inner = styled.div `

display : flex;
align-items : center;
flex-direection : ${({direction}) => direction};
justify-content:space-between;
max-width: 1100px;
margin : auto;
width : 100%;

    @media(max-width : 1000px){
        flex-direction : column;
    }
`;

export const Container = styled.div`

`

export const Pane = styled.div`


`;


export const SubTitle = styled.div`


`;
export const Title = styled.div`


`;