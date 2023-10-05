import { cn } from "@/lib/utils/cn";
import { Dispatch, SetStateAction } from "react";

export const OptionsTabs = ({
  handleCurrentTab,
  currentTab,
  options,
  className,
}: {
  handleCurrentTab: Dispatch<SetStateAction<any | undefined>>;
  currentTab: any;
  options: Array<[string, any]>;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "text-xs font-medium text-center text-muted border-b border-gray-200 card-glass p-0 w-full flex items-center justify-center",
        className
      )}
    >
      <ul className="flex flex-wrap -mb-px">
        {options.map(([key, value]) => (
          <li key={key} className="mr-2">
            <button
              className={`inline-block p-2 lg:p-4 rounded-t-lg ${
                currentTab === value
                  ? "text-primary border-b-2 border-primary"
                  : "border-b-2 border-transparent hover:text-primary "
              }`}
              onClick={() => handleCurrentTab(value)}
              disabled={currentTab === value}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
