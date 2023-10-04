import { FormButtons } from "@/common/raise/FormButtons";
import { useFormState } from "@/common/raise/FormContext";
import { EStep } from "@/lib/schema/raise.schema";

export const Agreement = () => {
  const { setStep, completion, setCompletion } = useFormState();

  const handleAgree = () => {
    setCompletion({ ...completion, [EStep.AGREEMENT]: true });
    setStep(EStep.CATEGORY);
  };

  return (
    <div className="flex flex-col gap-4 h-full items-center justify-center flex-grow w-full py-48">
      <h4 className="font-semibold text-4xl text-center md:text-left">
        Reminders before we begin:
      </h4>
      <ul className="ml-8 md:ml-20 list-disc [&>li]:mt-8 text-xl md:text-2xl">
        <li>Project&apos;s rewards must be awesome</li>
        <li>Projects should be transparent</li>
        <li>Project should not offer investment returns</li>
        <li>Projects should not offer equity</li>
        <li>Projects cant&apos;t raise funds of charity</li>
      </ul>
      <FormButtons onSubmit={handleAgree} />
    </div>
  );
};
