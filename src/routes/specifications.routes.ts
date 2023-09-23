import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();


const specificationsController = new CreateSpecificationController();

specificationsRoutes.post('/create', specificationsController.handle);


export { specificationsRoutes };