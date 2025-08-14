import React, { createContext, useContext, useState, useEffect } from 'react';
import { adminService } from '../services/adminService';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const storedAdmin = adminService.getCurrentAdmin();
            if (storedAdmin) {
                const sessionData = await adminService.checkSession();
                if (sessionData.authenticated) {
                    setIsAuthenticated(true);
                    setAdmin(sessionData.admin);
                } else {
                    localStorage.removeItem('admin');
                    setIsAuthenticated(false);
                    setAdmin(null);
                }
            }
        } catch (error) {
            setIsAuthenticated(false);
            setAdmin(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (username, password) => {
        try {
            const data = await adminService.login(username, password);
            setIsAuthenticated(true);
            setAdmin(data.admin);
            return data;
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await adminService.logout();
        } catch (error) {
            // Continue with logout even if request fails
        } finally {
            setIsAuthenticated(false);
            setAdmin(null);
        }
    };

    const value = {
        isAuthenticated,
        admin,
        loading,
        login,
        logout,
        checkAuthStatus
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};