import { Request, Response } from "express";
import { ListCategoriesService } from "./ListCategoriesService";

class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {
    
  }

  handle(request: Request, response: Response): Response {
    return response.json(this.listCategoriesService.execute());
  } 
}

export { ListCategoriesController }; 