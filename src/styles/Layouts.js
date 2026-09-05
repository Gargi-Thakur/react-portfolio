import { styled } from "styled-components";

export const MainLayout = styled.div`
    padding: 1rem 1.5rem 4rem;
    max-width: 80rem;
    margin: 0 auto;
    width: 100%;

    @media screen and (max-width: 642px){
        padding: .5rem 1rem 3rem;
    }
`;

export const InnerLayout = styled.div`
    padding: .5rem 0 1rem;
`;
