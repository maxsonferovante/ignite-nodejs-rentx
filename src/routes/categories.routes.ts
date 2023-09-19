import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp',
});

categoriesRoutes.post('/create',
    (request, response) => {
        return createCategoryController.handle(request, response);
    }
);

categoriesRoutes.get('/list',
    (request, response) => {
        return listCategoriesController.handle(request, response);
    }
);
categoriesRoutes.post('/import',
    upload.single('file'),
    (request, response) => {
        return createCategoryController.handle(request, response);
    });

export { categoriesRoutes };
