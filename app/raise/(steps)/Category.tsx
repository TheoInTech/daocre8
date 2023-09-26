import { FormButtons } from "@/app/raise/FormButtons";
import { useFormState } from "@/app/raise/FormContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ECategory, EStep } from "@/lib/schema/raise.schema";
import { useState } from "react";

export const Category = () => {
  const { setFormData, formData, setStep, completion, setCompletion } =
    useFormState();
  const [selectedCategory, setSelectedCategory] = useState<ECategory>();

  const options = Object.entries(ECategory);

  const handleSubmit = () => {
    if (selectedCategory) {
      setFormData({ ...formData, category: selectedCategory });
      setCompletion({ ...completion, [EStep.CATEGORY]: true });
      setStep(EStep.SUMMARY);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-between h-full flex-grow min-h-[25rem]">
        <div className="flex flex-col gap-8 items-center text-center md:text-left">
          <h4 className="font-semibold text-4xl">
            Let&apos; get your project started!
          </h4>
          <p className="text-xl">Choose a category</p>

          <Select
            onValueChange={(value: ECategory) => setSelectedCategory(value)}
          >
            <SelectTrigger className="min-w-[16rem]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {options.map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <FormButtons disabled={!selectedCategory} onSubmit={handleSubmit} />
    </>
  );
};
