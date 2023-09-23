import { Router } from "express";
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoutes)
router.use('/users', usersRoutes)


router.get('/', (req, res) => {
    return res.json({
        'categories': 'http://localhost:3333/categories',
        'specifications': 'http://localhost:3333/specifications',
        'users': 'http://localhost:3333/users'
    })
})

export { router }
