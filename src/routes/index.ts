import { Router } from "express";
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';
import { authenticateRouter } from './authenticate.routes';

const router = Router();

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoutes)
router.use('/users', usersRoutes)
router.use('/sessions', authenticateRouter)

router.get('/', (req, res) => {
    return res.json({
        'categories': 'http://localhost:3333/categories',
        'specifications': 'http://localhost:3333/specifications',
        'users': 'http://localhost:3333/users',
        'sessions': 'http://localhost:3333/sessions',
    })
})

export { router }
