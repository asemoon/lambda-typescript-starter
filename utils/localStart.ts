import {handler} from "../index";

const contextMock: any = { done: (input: string) => (input)};
const eventMock: any = {};
handler(eventMock, contextMock);
