import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface ISection {
  children: ReactNode;
  id: string;
  title: string;
  description: string;
  background?: string;
  className?: string;
  containerClassName?: string;
}

export const Section = ({
  children,
  id,
  title,
  description,
  background,
  className,
  containerClassName = "",
  ...props
}: ISection) => {
  const defaultSectionClassName =
    "relative text-muted w-full flex flex-col items-center px-4 gap-4 pt-32 pb-24 xl:py-32 z-20 overflow-hidden xl:overflow-auto";
  const sectionClassName = cn(defaultSectionClassName, className, background);

  const defaultContainerClassName =
    "relative flex flex-col mt-8 xl:mt-16 gap-4 xl:gap-8 max-w-[95%] md:max-w-[80%] 2xl:max-w-[65%] w-full h-full items-center justify-start";

  return (
    <section id={id} className={sectionClassName} {...props}>
      <div className="flex flex-col font-heading gap-4 max-w-[95%] md:max-w-[65%] 2xl:max-w-[55%] text-center">
        <div className="text-muted font-heading tracking-[0.5rem] uppercase text-[12px] lg:text-[18px] leading-[16px] lg:leading-[22px]">
          {title}
        </div>
        <h4 className="text-muted text-[28px] lg:text-[48px] leading-[30px] lg:leading-[54px] px-0 md:px-8 lg:px-10 font-extrabold font-heading">
          {description}
        </h4>
      </div>

      <div className={cn(defaultContainerClassName, containerClassName)}>
        {children}
      </div>
    </section>
  );
};
