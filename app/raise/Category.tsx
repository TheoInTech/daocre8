import { FormButtons } from "@/app/raise/FormButtons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Category = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-between h-full">
      <h4 className="font-semibold text-4xl">
        Let&apos; get your project started!
      </h4>
      <p className="text-xl">Choose a category</p>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <FormButtons variant="both" backText="Back" submitText="Next" />
    </div>
  );
};
