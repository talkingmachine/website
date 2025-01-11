import mongoose from "mongoose";
import { File } from "../__model/file";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title"); // Получаем название из параметров запроса

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const file = await File.findOne({ title });
    return file
      ? Response.json({
          message: "OK",
          data: file,
        })
      : Response.json({
          message: "No file found with the given title",
        });
  } catch (error) {
    console.error("[GET File]: ", error);
    return Response.json({
      message: "[GET File]: Something went wrong",
      error: error,
    });
  }
};

// export const POST = async (req: Request) => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI as string);

//     const { content, title } = await req.json();

//     return Response.json({ message: "OK", data: posts });
//   } catch (error) {
//     console.log("[POST File]: ", error);
//     return Response.json({
//       message: "Something went wrong",
//       error: error,
//     });
//   }
// };
