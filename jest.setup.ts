import "@testing-library/jest-dom/extend-expect";
const { server } = require("./src/__mocks__/server");

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
