import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center px-6 py-3 text-lg justify-center shadow-lg font-bold hover:scale-[102%] duration-300 ease-in-out rounded-[10rem] transition-transform hover:-translate-y-[0.5px] text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "primary-gradient text-white hover:brightness-110",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-background text-muted-foreground hover:bg-muted/10",
        secondary:
          "bg-secondary text-secondary-foreground text-muted hover:bg-secondary/80",
        ghost: "text-muted hover:text-muted/70",
        link: "text-primary underline-offset-4 hover:underline",
        calendar:
          "border border-border shadow-lg bg-muted text-muted-foreground p-4 text-lg font-normal rounded-[10rem]",
      },
      size: {
        default: "px-8 py-4 text-lg",
        xs: "h-7 px-3 text-xs",
        sm: "h-9 px-5 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const childProps = asChild ? { disabled: isLoading || disabled } : {};

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
        {...childProps}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
