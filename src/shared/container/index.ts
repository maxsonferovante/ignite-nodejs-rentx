import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { PostgresCategoriesRespository } from '../../modules/cars/repositories/implementations/PostgresCategoriesRespository';

import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';
import { PostgresSpecificationsRepository } from '../../modules/cars/repositories/implementations/PostgresSpecificationsRepository';


import { IUserRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { PostgresUserRepository } from '../../modules/accounts/repositories/implementations/PostgresUsersRespository';

container.registerSingleton<ICategoriesRepository>(
    'PostgresCategoriesRespository',
    PostgresCategoriesRespository
);

container.registerSingleton<ISpecificationsRepository>(
    'PostgresSpecificationsRepository',
    PostgresSpecificationsRepository
);

container.registerSingleton<IUserRepository>(
    'PostgresUserRepository',
    PostgresUserRepository
);