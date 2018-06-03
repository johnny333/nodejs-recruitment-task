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
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
      next();
    };
  }
}
