import { ESidebar } from "@/lib/schema/creator.schema";
import { IFormData } from "@/lib/schema/raise.schema";
import { Dispatch, SetStateAction } from "react";

export interface IProject {
  address: string;
  balance: number;
  project_ipfs_hash: IFormData;
}

export interface IProjectDetailContext {
  activeSidebar: ESidebar;
  setActiveSidebar: Dispatch<SetStateAction<ESidebar>>;
  project: IProject | null | undefined;
}
