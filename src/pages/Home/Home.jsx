import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
    const { connectWallet, currentAccount } = useAuth();
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Hacker Match App</Title>
            <Subtitle>Find your ideal hackathon partners!</Subtitle>
            {!currentAccount ? (
                <Button onClick={connectWallet}>Connect Wallet</Button>
            ) : (
                <Button onClick={() => navigate("/register")}>Continue</Button>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #3498db;
    color: white;
`;

const Title = styled.h1`
    font-size: 3rem;
`;

const Subtitle = styled.h2`
    margin-top: 1rem;
    font-size: 1.5rem;
`;

const Button = styled.button`
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: white;
    color: #3498db;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.2rem;
`;

export default Home;
