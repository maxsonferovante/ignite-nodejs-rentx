import { Router } from 'express';
import multer from 'multer';
import "reflect-metadata"

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/listCategoriesController';


import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/create',
    ensureAuthenticated,
    createCategoryController.handle);

categoriesRoutes.post('/import',
    ensureAuthenticated,
    upload.single('file'),
    importCategoryController.handle);

categoriesRoutes.get('/list',
    ensureAuthenticated,
    listCategoriesController.handle
);


export { categoriesRoutes };
