import mongoose from "mongoose";
// import { File } from "../__model/file";

export const GET = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    // const titles = await File.find({}, { title: 1, _id: 0 }); // только title, исключая _id
    // const titleArray = titles.map((item) => item.title);
    return Response.json({ message: "OK", data: ["welcome", "first-post"] });
  } catch (error) {
    return Response.json({
      message: "[GET Files]: Something went wrong",
      error: error,
    });
  }
};
