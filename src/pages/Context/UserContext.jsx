import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState({}); // Stores user data by wallet address.

    const registerUser = (walletAddress, profileData) => {
        setUsers((prev) => ({
            ...prev,
            [walletAddress]: { ...profileData, isVerified: false },
        }));
    };

    const verifyUser = (walletAddress) => {
        setUsers((prev) => ({
            ...prev,
            [walletAddress]: { ...prev[walletAddress], isVerified: true },
        }));
    };

    const getUser = (walletAddress) => users[walletAddress];

    return (
        <UserContext.Provider value={{ registerUser, verifyUser, getUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
