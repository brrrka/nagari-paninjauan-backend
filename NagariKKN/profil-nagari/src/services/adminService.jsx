// src/services/adminService.js
const API_URL = '/api/admin';

class AdminService {
    async login(username, password) {
        const response = await fetch(`${API_URL}/login.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }

        // Store admin data in localStorage
        localStorage.setItem('admin', JSON.stringify(data.admin));
        return data;
    }

    async checkSession() {
        try {
            const response = await fetch(`${API_URL}/check_session.php`, {
                method: 'GET',
                credentials: 'include',
            });

            const data = await response.json();
            return data;
        } catch (error) {
            return { authenticated: false };
        }
    }

    async logout() {
        try {
            const response = await fetch(`${API_URL}/logout.php`, {
                method: 'POST',
                credentials: 'include',
            });

            // Clear localStorage
            localStorage.removeItem('admin');
            return await response.json();
        } catch (error) {
            // Clear localStorage even if request fails
            localStorage.removeItem('admin');
            throw error;
        }
    }

    getCurrentAdmin() {
        const admin = localStorage.getItem('admin');
        return admin ? JSON.parse(admin) : null;
    }

    isAuthenticated() {
        return !!this.getCurrentAdmin();
    }
}

export const adminService = new AdminService();