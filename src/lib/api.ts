import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import errorMiddleware from "../middlewares/error";
import cors from "cors";

export default function apiHandler() {
    return nc<NextApiRequest, NextApiResponse>({
        onError: errorMiddleware,
        onNoMatch: (req, res, next) => {
            res.status(404).end();
        },
    }).use(cors({
        origin: process.env.CORS_ALLOWED_ORIGINS || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true
    }));
}
