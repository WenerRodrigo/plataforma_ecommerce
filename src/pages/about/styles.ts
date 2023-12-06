import styled from "styled-components";

export const AboutContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 30px;
    padding: 40px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

export const AboutTitle = styled.h1`
    font-size: 35px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #333;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
`;

export const AboutContent = styled.p`
    font-size: 1.2em;
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
`;

export const OurServices = styled.div`
    margin-top: 40px;
`;

export const ServicesTitle = styled.h2`
    font-size: 30px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #333;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
`;

export const ServicesList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
        font-size: 1.2em;
        color: #666;
        margin-bottom: 10px;
    }
`;

export const CompanyValues = styled.div`
    margin-top: 40px;
`;

export const ValuesTitle = styled.h2`
    font-size: 30px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #333;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
`;

export const ValuesList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
        font-size: 1.2em;
        color: #666;
        margin-bottom: 10px;
    }
`;
