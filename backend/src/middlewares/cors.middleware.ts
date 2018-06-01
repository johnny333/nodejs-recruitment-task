/**
 * Created by jakubkolecki on 02.06.2018.
 */
import { Injectable } from '@nestjs/common';
import { NestMiddleware } from '@nestjs/common/interfaces/middleware';
import { ExpressMiddleware } from '@nestjs/common/interfaces/middlewares/express-midleware.interface';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  resolve(): ExpressMiddleware {
    return (req, res, next) => {
      let allowedOrigins = ['http://localhost:3000', 'http://localhost:4200'];
      if (allowedOrigins.indexOf(req.header('Origin')) > -1) {
        res.header('Access-Control-Allow-Origin', req.header('Origin'));
        res.header('Access-Control-Allow-Headers', 'content-type');
        res.header('Access-Control-Allow-Methods', 'POST');
      }

      next();
    };
  }
}