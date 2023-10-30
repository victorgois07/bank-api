import { Request, Response } from 'express';

export interface ITransactionController {
  create(req: Request, res: Response): Promise<Response>;
  read(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
  findById(req: Request, res: Response): Promise<Response>;
  findByAccountId(req: Request, res: Response): Promise<Response>;
}
