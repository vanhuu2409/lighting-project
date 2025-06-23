/* eslint-disable @typescript-eslint/no-explicit-any */
import { PaginatedResponse } from "@/types";

export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  pageSite: number;
  isDelete: boolean;
  createdDate: string;
  latestUpdate: string;
  author: string;
  excerpt: string;
}

export interface BlogResponse extends PaginatedResponse<Blog> {}

// You can also create a more generic type for any paginated API response
export type PaginatedBlogResponse = PaginatedResponse<Blog>;
