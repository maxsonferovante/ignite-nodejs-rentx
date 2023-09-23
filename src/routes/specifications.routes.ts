import { Router } from 'express';
import "reflect-metadata"

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/listCategoriesController';

const specificationsRoutes = Router();


const specificationsController = new CreateSpecificationController();

const listCategoriesController = new ListCategoriesController();

specificationsRoutes.post('/create', specificationsController.handle);

specificationsRoutes.get('/list', listCategoriesController.handle);

export { specificationsRoutes };