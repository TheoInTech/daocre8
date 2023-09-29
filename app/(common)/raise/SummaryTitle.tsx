import { useFormState } from "@/common/raise/FormContext";
import { Separator } from "@/components/ui/separator";
import { EStep } from "@/lib/schema/raise.schema";

export const SummaryTitle = () => {
  const { formData, step } = useFormState();

  return (
    <>
      <h4 className="font-semibold text-4xl text-gradient-primary">
        {formData.basicDetails.name || "Your Project"}
      </h4>
      <h5 className="text-2xl">
        <span className="font-semibold capitalize text-gradient-violet">
          {formData.category?.toLocaleLowerCase()}
        </span>{" "}
        category
      </h5>
      <Separator />
      {step !== EStep.FINAL && (
        <h6 className="text-xl font-medium text-gradient-yellow">{step}</h6>
      )}
    </>
  );
};
