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

    p  {
        margin-left: 0.9rem;
        font-family: "Recursive";
        font-size: 1rem;
        font-weight: bold;
        color: #333333;
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

    .turn-button {
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
    flex-direction: column;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 18.75rem;
    justify-content: space-between;
    align-items: top;

    p {
        font-family: "Recursive";
        font-size: 1.13rem;
        margin-left: 0.9rem;
        margin-top: 1.13rem;
    }

    .options {
        display: flex;
        justify-content: space-between;
        margin: 0.9rem 0.9rem 0.9rem 0.9rem;
        font-family: "Recursive";
        color: #FFFFFF;
        font-size: 0.75rem;
        text-align: center;
    }

    .not-remember {
        background-color: #FF3030;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 2rem;
        padding: 0 1rem;
        border: 1px transparent;
        border-radius: 5px;
        cursor: pointer;
    }

    .almost-remember {
        background-color: #FF922E;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 2rem;
        border: 1px transparent;
        border-radius: 5px;
        cursor: pointer;
    }

    .zap {
        background-color: #2FBE34;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 2rem;
        border: 1px transparent;
        border-radius: 5px;
        cursor: pointer;
    }
`;

export const NotRemember = styled.div`
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

    p {
        margin-left: 0.9rem;
        font-family: "Recursive";
        font-size: 1rem;
        font-weight: bold;
        text-decoration: line-through;
        color: #FF3030;
    }

    img {
        margin-right: 0.9rem;
    }
`;

export const AlmostRemember = styled.div`
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

    p {
        margin-left: 0.9rem;
        font-family: "Recursive";
        font-size: 1rem;
        font-weight: bold;
        text-decoration: line-through;
        color: #FF922E;
    }

    img {
        margin-right: 0.9rem;
    }
`;

export const Zap = styled.div`
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

    p {
        margin-left: 0.9rem;
        font-family: "Recursive";
        font-size: 1rem;
        font-weight: bold;
        text-decoration: line-through;
        color: #2FBE34;
    }

    img {
        margin-right: 0.9rem;
    }
`;