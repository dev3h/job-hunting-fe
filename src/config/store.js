import { create } from 'zustand'
import axiosInstance from './axios'

const useJobSeekerStore = create((set) => ({
    token: localStorage.getItem('jse_token') || null,
    isRefreshing: false,
    setToken: (token) => {
        set({ token })
        localStorage.setItem('jse_token', token)
    },
    logout: () => {
        set({ token: null })
        localStorage.removeItem('jse_token')
    },
    getUser: async () => {
        try {
            if(!useJobSeekerStore.getState().token) return null;
            const response = await axiosInstance.get('/me');
            if (response?.data?.status === 200) {
                return response?.data?.data;
            }
        } catch (error) {
            if(error.status === 401) {
                await useJobSeekerStore.getState().refreshToken();
                return useJobSeekerStore.getState().getUser();
            }
        }
    },
    refreshToken: async () => {
        try {
            set({ isRefreshing: true });
            const response = await axiosInstance.post('/refresh');
            if (response?.data?.status === 200) {
                set({ token: response?.data?.data?.access_token })
                localStorage.setItem('jse_token', response?.data?.data?.access_token)
            }
        } catch (error) {
            set({ token: null })
            localStorage.removeItem('jse_token')
        } finally {
            set({ isRefreshing: false });
        }
    }
}))

const useEmployeeStore = create((set) => ({
    token: localStorage.getItem('emp_token') || null,
    isRefreshing: false,
    setToken: (token) => {
        set({ token })
        localStorage.setItem('emp_token', token)
    },
    logout: () => {
        set({ token: null })
        localStorage.removeItem('emp_token')
    },
    getUser: async () => {
        try {
            if(!useEmployeeStore.getState().token) return null;
            const response = await axiosInstance.get('/employee/me');
            if (response?.data?.status === 200) {
                return response?.data?.data;
            }
        } catch (error) {
            if(error.status === 401) {
                if (!useEmployeeStore.getState().isRefreshing) {
                    await useEmployeeStore.getState().refreshToken();
                }
                return useEmployeeStore.getState().getUser();
            }
        }
    },
    refreshToken: async () => {
        try {
            set({ isRefreshing: true });
            const response = await axiosInstance.post('/employee/refresh');
            if (response?.data?.status === 200) {
                set({ token: response?.data?.data?.access_token })
                localStorage.setItem('emp_token', response?.data?.data?.access_token)
            }
        } catch(error) {
            set({ token: null })
            localStorage.removeItem('emp_token')
        } finally {
            set({ isRefreshing: false });
        }
    }
}))

export { useJobSeekerStore, useEmployeeStore }