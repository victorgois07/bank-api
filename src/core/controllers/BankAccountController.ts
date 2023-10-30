import { Request, Response } from 'express';

interface IBankAccountController {
  create(req: Request, res: Response): Promise<Response>;
  findById(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
  list(req: Request, res: Response): Promise<Response>;
  deposit(req: Request, res: Response): Promise<Response>;
  withdraw(req: Request, res: Response): Promise<Response>;
}

export { IBankAccountController };
