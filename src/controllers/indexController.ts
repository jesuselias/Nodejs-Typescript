import { Request, Response } from 'express'

class IndexController {

    public index (req: Request, res: Response) {
        res.render('index', { title: 'welcome to Book App' });
    }

}

export const indexController = new IndexController();

