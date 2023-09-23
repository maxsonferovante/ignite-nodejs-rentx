import fs from 'fs';
import csvParse from 'csv-parse';
import { inject, injectable } from 'tsyringe';
import { PostgresCategoriesRespository } from '../../repositories/implementations/PostgresCategoriesRespository';



interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
export class ImportCategoryUseCase {

    constructor(
        @inject('PostgresCategoriesRespository')
        private categoriesRepository: PostgresCategoriesRespository
    ) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const parseFile = csvParse();
            const categories: IImportCategory[] = [];

            stream.pipe(parseFile)

            parseFile.on("data", async (line) => {
                const [name, description] = line;
                categories.push({
                    name,
                    description
                });
            })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                })
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async (category) => {
            const { name, description } = category;

            const existCategory = await this.categoriesRepository.findByName(name);

            if (!existCategory) {
                await this.categoriesRepository.create({
                    name,
                    description
                });
            }
        });
    }
}