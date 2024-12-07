import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useUserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const { currentAccount } = useAuth();
    const { registerUser } = useUserContext();
    const navigate = useNavigate();

    const handleRegister = () => {
        registerUser(currentAccount, { name, bio });
        navigate("/anon-login");
    };

    return (
        <Container>
            <Title>Register</Title>
            <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />
            <Button onClick={handleRegister}>Register</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Title = styled.h1`
    margin-bottom: 2rem;
`;

const Input = styled.input`
    margin-bottom: 1rem;
    padding: 1rem;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
`;

const Button = styled.button`
    padding: 1rem 2rem;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
`;

export default Register;
