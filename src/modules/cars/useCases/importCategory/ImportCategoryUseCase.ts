import fs from 'fs';
import csvParse from 'csv-parse';

import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';



interface IImportCategory {
    name: string;
    description: string;
}

export class ImportCategoryUseCase {
    private categoriesRepository: CategoriesRepository;


    constructor(categoriesRepository: CategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

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
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                })
        });
    }
    deleteFile(file: Express.Multer.File): Promise<void> {
        return new Promise((resolve, reject) => {
            fs.unlink(file.path, (err) => {
                if (err) reject(err);
                resolve();
            })
        })
    }
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async (category) => {
            const { name, description } = category;

            const existCategory = this.categoriesRepository.findByName(name);

            if (!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description
                });
            }
        });
        await this.deleteFile(file);
    }
}