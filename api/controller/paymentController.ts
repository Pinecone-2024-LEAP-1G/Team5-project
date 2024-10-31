import { Request, Response } from "express";

import { paymentModel } from "../model/payment.model";

export const addBlog = async (_req: Request, res: Response) => {
  console.log("duudagdaj bna");
  try {
    const blog = await paymentModel.create({
      orderName: "heh",
      paymentStatus: "ahgri",
      paymentType: "uhsg",
      userId: "",
    });

    res.json(blog);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
