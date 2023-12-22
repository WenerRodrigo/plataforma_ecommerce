import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #021e29;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 17px;
`;

export const ButtonLink = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin: 10px;
    cursor: pointer;

    &:hover {
        background-color: #ccc;
    }
`;




// @media (max-width: 320px) {
//     .content {
//         width: 100%;
//     }

//     .title {
//         font-size: 12px;
//     }

//     .link {
//         width: 80px;
//         height: 20px;
//         font-size: 10px;
//     }
// }

// @media (max-width: 375px) {
//     .content {
//         width: 100%;
//     }

//     .title {
//         font-size: 12px;
//     }

//     .link {
//         width: 70px;
//         height: 20px;
//         font-size: 10px;
//     }
// }

// @media (max-width: 425px) {
//     .content {
//         width: 100%;
//     }

//     .title {
//         font-size: 12px;
//         text-align: center;
//     }

//     .link {
//         width: 60px;
//         height: 25px;
//         font-size: 10px;
//     }
// }