import { Request, Response } from "express";
import { paymentModel } from "../model/payment.model";

export const getBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await paymentModel.find().populate("userId");
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
