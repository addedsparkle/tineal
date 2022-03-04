import { CatalogSection } from "./Catalog";

enum RequestAction {
  load
}

interface CatalogRequest {
  sections: CatalogSection[];
  action: RequestAction;
}

export { RequestAction, CatalogRequest };
