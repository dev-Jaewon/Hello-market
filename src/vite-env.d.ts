/// <reference types="vite/client" />

declare namespace NodeJS {
    interface ProcessEnv {
        [key: string]: any;
    }
}
