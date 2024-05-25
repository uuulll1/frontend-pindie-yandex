import { create } from "zustand";
import { getJWT, getMe, removeJWT, setJWT } from "../api/api-utils";
import { endpoints } from "../api/config";

export const useStore = create((set) => ({
    isAuth: false,
    user: null,
    token: null,
    login: (user, token) => {
        set({ isAuth: true, user, token });
        setJWT(token);
    },
    register: () => {},
    logout: (user, token) => {
        set({ isAuth: false, user: null, token: null });
        removeJWT();
    },
    checkAuth: async () => {
        const jwt = getJWT();
        if (jwt) {
            const user = await getMe(endpoints.me, jwt);
            if (user) {
                /* Сохраняем полученные данные и токен */
                set({
                    isAuth: true,
                    user: { ...user, id: user._id },
                    token: jwt,
                });
                setJWT(jwt);
            } else {
                /* Возвращаем изначальные состояния и удаляем токен */
                set({ isAuth: false, user: null, token: null });
                removeJWT();
            }
        } else {
            set({ isAuth: false, user: null, token: null });
        }
    },
}));
