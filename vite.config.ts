import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    return {
        plugins: [react()],
        define: {
            "process.env": loadEnv(mode, "."),
        },
    };
});
