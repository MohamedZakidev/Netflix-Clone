import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    margin: 5em auto;
`;

export const Title = styled.h1`
    text-align: center;
    width: 100%;
    letter-spacing: 2px;
    color: #fff;
    font-size: 55px;
    font-weight: 500;
    
    @media(max-width: 1000px) {
        font-size: 34px;
    }
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`;

export const Name = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;
    
    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`;

export const Picture = styled.img`
    width: 100%;
    max-width: 180px;
    height: auto;
    border: 3px solid black;
    border-radius: 5px;
    cursor: pointer;
        
    @media(max-width: 1000px) {
        max-width: 130px;
    }
`;

export const Item = styled.li`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;
    
    &:hover > ${Picture} {
        border: 3px solid white;
    }
    
    &:hover ${Name} {
        font-weight: bold;
        color: white;
    }
    
    &:last-of-type {
        margin-right: 0;
    }
`;