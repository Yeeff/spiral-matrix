import { Router } from 'express';
import { getCaracol } from '../controllers/caracol.controller';

const router = Router();

router.get('/:n', getCaracol);

export default router;