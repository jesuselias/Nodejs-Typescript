import { Router } from 'express';

const router: Router = Router();

import { booksController } from '../controllers/booksController';

router.route('/').get(booksController.index)

router.route('/add').get(booksController.renderFormBook).post(booksController.saveBooks)

export default router;