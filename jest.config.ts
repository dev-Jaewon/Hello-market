import nextJest from "next/jest";

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};

export default async () => ({
    ...(await createJestConfig(customJestConfig)()),
    transformIgnorePatterns: ["node_modules/(?!(swiper|ssr-window|dom7)/)"],
});
