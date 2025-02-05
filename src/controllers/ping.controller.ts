import { NextFunction, Request, Response } from "express";

export const pingCheck = (_req: Request, res: Response, _next: NextFunction): void => {
    res.status(200).json({
        message: 'Ping check is up'
    });
}