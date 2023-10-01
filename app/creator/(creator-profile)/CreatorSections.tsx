import { ReactNode } from "react";

interface ICreatorSections {
  children: ReactNode;
  title?: string;
}

export const CreatorSections = ({ title, children }: ICreatorSections) => {
  return (
    <div className="w-full h-fit">
      <div className="card-glass flex flex-col gap-4 overflow-hidden break-all">
        {title && (
          <h4 className="text-xl font-semibold text-gradient-yellow">
            {title}
          </h4>
        )}
        {children}
      </div>
    </div>
  );
};
