import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2rem 1.5rem 3rem;
    max-width: 72rem;
    margin: 0 auto;
    width: 100%;

    @media screen and (max-width: 642px){
        padding: 1.5rem 1rem 2.5rem;
    }
`;

export const InnerLayout = styled.div`
    padding: 1rem 0 2rem;
`;
