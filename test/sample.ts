import logger from "../utils/logger";

test("example test case", () => {
    logger.debug("doing some testing");
    expect(5).toBe(5);
});
