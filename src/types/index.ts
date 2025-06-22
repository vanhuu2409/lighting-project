export interface PaginatedResponse<T> {
  list: T[];
  total: number;
  totalPages: number;
  page: number;
  limit: number;
}

export * from "./partner.type";
export * from "./product.type";
export * from "./blog.type";
