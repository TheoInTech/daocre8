import { ESidebar } from "@/lib/schema/creator.schema";
import { Dispatch, SetStateAction } from "react";

export interface IProjectDetailContext {
  activeSidebar: ESidebar;
  setActiveSidebar: Dispatch<SetStateAction<ESidebar>>;
}
