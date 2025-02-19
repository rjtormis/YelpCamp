import express, { Request, Response, NextFunction } from "express";

const app = express();

export function wrapper(fn: Function) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}

export default app;
