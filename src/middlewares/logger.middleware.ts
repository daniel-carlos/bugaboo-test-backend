import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { method, originalUrl, ip, headers: { 'user-agent': userAgent } } = req;
    console.log(`[${new Date().toISOString()}] ${method} ${originalUrl} from ${ip} using ${userAgent}`);
    next();
};

export default loggerMiddleware;
