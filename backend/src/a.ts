import express from "express";
import { z } from "zod";

const app = express();

const userProfileSchema = z.object({
  name: z.string().min(2, { message: "at least two characters required" }),
  email: z.string().email({ message: "invalid email format" }),
  age: z.number().min(18, { message: "age must be at least 18" }),
});

type fianlUserSchema = z.infer<typeof userProfileSchema>;
app.use(express.json());
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
