/* eslint-disable @typescript-eslint/no-explicit-any */
import { PaginatedResponse } from "@/types";

interface Url {
  url: string;
  type: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  urls: Url[];
  rating: number;
  status: number;
  reviews: number;
  overviews: string[];
  tripDuration: string;
  tag: string[];
  location: string;
  isDelete: boolean;
  pageSite: number;
  createdDate: string;
  latestUpdate: string;
  routing?: string;
  tourStyle?: string;
  tourStart?: string;
  tourEnd?: string;
}

export interface ProductResponse extends PaginatedResponse<Product> {}

// You can also create a more generic type for any paginated API response
export type PaginatedProductResponse = PaginatedResponse<Product>;
