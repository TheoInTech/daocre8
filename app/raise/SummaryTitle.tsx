import { useFormState } from "@/app/raise/FormContext";
import { Separator } from "@/components/ui/separator";

export const SummaryTitle = () => {
  const { formData, step } = useFormState();

  return (
    <>
      <h4 className="font-semibold text-4xl text-gradient-primary">
        {formData.basicDetails.name || "Your Project DAO"}
      </h4>
      <h5 className="text-2xl">
        <span className="font-semibold capitalize text-gradient-violet">
          {formData.category?.toLocaleLowerCase()}
        </span>{" "}
        category
      </h5>
      <Separator />
      <h6 className="text-xl font-medium text-gradient-yellow">{step}</h6>
    </>
  );
};
