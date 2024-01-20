import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 20px;
    gap: 10px;
    
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    background: #111111;
    font-size: 20px;
    color: white;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    background: #e50914;
    color: white;
    padding: 18px 30px;
    font-size: 20px;
    font-weight: 600;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    
    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 20px;
        
        @media (max-width: 1000px) {
            
        }
    }

    &:hover {
        background: #f40612;
    }
    
    @media (max-width: 1000px) {
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

export const Text = styled.p`
    font-size: 19px;
    color: white;
    text-align: center;
    
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;