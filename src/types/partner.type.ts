/* eslint-disable @typescript-eslint/no-explicit-any */
import { PaginatedResponse } from "@/types";

export interface Partner {
  name: string;
  logo: string;
  pageSite: number;
  isDelete: boolean;
  createdDate: string;
  latestUpdate: string;
  id: string;
}

export interface PartnerResponse extends PaginatedResponse<Partner> {}

// You can also create a more generic type for any paginated API response
export type PaginatedPartnerResponse = PaginatedResponse<Partner>;
