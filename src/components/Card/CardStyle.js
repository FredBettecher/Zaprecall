import styled from "styled-components";

export const CardStyle = styled.div`
    margin-top: 3rem;
    display: flex;
    border: 1px solid #FFFFFF;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 18.75rem;
    height: 4rem;
    justify-content: space-between;
    align-items: center;

    h1  {
        margin-left: 0.9rem;
        font-family: "Recursive";
        font-size: 1rem;
        font-weight: bold;
    }

    img {
        margin-right: 0.9rem;
        cursor: pointer;
    }
`;

export const CardSelected = styled.div`
    background-color: #FFFFD4;
    margin-top: 3rem;
    display: flex;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 18.75rem;
    height: 8.2rem;
    justify-content: space-between;
    align-items: top;
    position: relative;

    p {
        font-family: "Recursive";
        font-size: 1.13rem;
        margin-left: 0.9rem;
        margin-top: 1.13rem;
    }

    img {
        width: 2rem;
        position: absolute;
        bottom: 0.8rem;
        right: 0.8rem;
        cursor: pointer;
    }
`;

export const CardTurned = styled.div`
    background-color: #FFFFD4;
    margin-top: 3rem;
    display: flex;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 18.75rem;
    height: 8.2rem;
    justify-content: space-between;
    align-items: top;
    position: relative;
`;