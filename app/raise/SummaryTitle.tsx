import { useFormState } from "@/app/raise/FormContext";
import { Separator } from "@/components/ui/separator";

export const SummaryTitle = () => {
  const { formData } = useFormState();

  return (
    <>
      <h4 className="font-semibold text-4xl">
        {formData.basicDetails.name || "Your Project DAO"}
      </h4>
      <h5 className="text-2xl">
        <span className="font-semibold capitalize">
          {formData.category?.toLocaleLowerCase()}
        </span>{" "}
        category
      </h5>
      <Separator />
    </>
  );
};
