import {Context} from "aws-lambda";

export default (event: any, context: Context) => {
    context.done(undefined, "Function is finished yes2");
};
