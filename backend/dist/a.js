"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
const userProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, { message: "at least two characters required" }),
    email: zod_1.z.string().email({ message: "invalid email format" }),
    age: zod_1.z.number().min(18, { message: "age must be at least 18" }),
});
app.use(express_1.default.json());
app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    // const updateBody: fianlUserSchema  = req.body;
    if (!success) {
        res.status(411).json({});
        return;
    }
    // update database here
    res.json({
        message: "User updated",
    });
});
app.listen(3000, () => {
    console.log("the server is running on the port 3000");
});
//# sourceMappingURL=a.js.map