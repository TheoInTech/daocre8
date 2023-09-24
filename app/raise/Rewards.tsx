import { FormButtons } from "@/app/raise/FormButtons";
import { useFormState } from "@/app/raise/FormContext";
import { SummaryTitle } from "@/app/raise/SummaryTitle";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useZodForm from "@/lib/hooks/useZodForm";
import {
  EStep,
  FundingTierSchema,
  IFundingTier,
} from "@/lib/schema/basic-details.schema";
import { useFieldArray, useForm } from "react-hook-form";

export const Rewards = () => {
  const { setFormData, formData, setStep, setCompletion, completion } =
    useFormState();

  // form
  const form = useZodForm({
    schema: FundingTierSchema,
    defaultValues: formData.fundingTiers,
    mode: "onChange",
  });

  const { control, handleSubmit: onSubmit, register } = useForm();
  const { fields, remove, append, update } = useFieldArray({
    control,
    name: "fundingTiers",
  });

  // methods
  const handleSubmit = (values: IFundingTier) => {
    setFormData({
      ...formData,
      fundingTiers: values,
    });

    console.log("values", values);

    setCompletion({ ...completion, [EStep.TEAM]: true });
    setStep(EStep.SUMMARY);
  };

  return (
    <div className="flex flex-col gap-4 h-full flex-grow w-full">
      <SummaryTitle />
      <Form {...form}>
        <form className="fle flex-col gap-8">
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold underline">
                    Funding Tier # {index + 1}
                  </h4>
                  {fields.length > 1 && (
                    <Button
                      variant={"destructive"}
                      size={"xs"}
                      onClick={() => remove(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>

                <div className="grid grid-rows-4 md:grid-rows-2 grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-flow-col p-4 gap-8 rounded-lg shadow-md">
                  <FormField
                    control={form.control}
                    {...form.register(`${index}.amountInUsd`)}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tier Amount (USD)</FormLabel>
                        <FormControl>
                          <Input placeholder="1000" type="number" {...field} />
                        </FormControl>
                        <FormMessage>
                          {
                            form?.formState?.errors?.[index]?.amountInUsd
                              ?.message
                          }
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    {...form.register(`${index}.description`)}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="col-span-3 row-start-2">
                          Description
                        </FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage>
                          {
                            form?.formState?.errors?.[index]?.description
                              ?.message
                          }
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                </div>

                <hr className="my-4" />
              </div>
            );
          })}

          <FormButtons onSubmit={form.handleSubmit(handleSubmit)} />
        </form>
      </Form>
    </div>
  );
};
