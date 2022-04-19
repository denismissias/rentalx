import fs from "fs";
import { parse } from "csv-parse";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { Category } from "../../model/Category";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  loadCategories(file: Express.Multer.File) : Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      
      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile.on("data", async (line) => {
        const [name, description] = line;
        categories.push({
          name,
          description
        });
      }).on("end", () => {
        resolve(categories);
      }).on("error", (error) => {
        reject(error);
      })
    });
  }

  async execute(file: Express.Multer.File) : Promise<void> {
    const categories = await this.loadCategories(file);
    
    categories.map(category => {
      const { name, description } = category;
      const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (!categoryAlreadyExists) {
          this.categoryRepository.create({ name, description });   
        }
    });
  }
}

export { ImportCategoryService }