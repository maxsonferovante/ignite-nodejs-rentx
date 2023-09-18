import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post('/create',
    (request, response) => {
        const { name, description } = request.body;
        const CreatecategoryService = new CreateCategoryService(categoriesRepository);
        CreatecategoryService.execute({ name, description });
        return response.status(201).send();
    }
);

categoriesRoutes.get('/list',
    (request, response) => {
        return response.status(200).json(categoriesRepository.list());
    }
);


export { categoriesRoutes };
