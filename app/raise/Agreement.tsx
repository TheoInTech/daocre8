import { FormButtons } from "@/app/raise/FormButtons";
import { useFormState } from "@/app/raise/FormContext";
import { EStep } from "@/lib/types/raise.type";

export const Agreement = () => {
  const { handleBack, setStep } = useFormState();
  return (
    <>
      <h4 className="font-semibold text-4xl">Reminders before we begin:</h4>
      <ul className="my-8 ml-8 list-disc [&>li]:mt-8 text-2xl">
        <li>Project&apos;s rewards must be awesome</li>
        <li>Projects should be transparent</li>
        <li>Project should not offer investment returns</li>
        <li>Projects should not offer equity</li>
        <li>Projects cant&apos;t raise funds of charity</li>
      </ul>
      <FormButtons
        variant="both"
        backText="Cancel"
        submitText="Agree"
        onSubmit={() => setStep(EStep.CATEGORY)}
      />
    </>
  );
};
