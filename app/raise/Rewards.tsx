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
import { useToast } from "@/components/ui/use-toast";
import useZodForm from "@/lib/hooks/useZodForm";
import {
  EStep,
  FundingTierSchemaArray,
  IFundingTier,
} from "@/lib/schema/raise.schema";
import { Plus } from "lucide-react";
import { ChangeEvent } from "react";
import { useFieldArray } from "react-hook-form";

export const Rewards = () => {
  const { setFormData, formData, setStep, setCompletion, completion } =
    useFormState();
  const { toast } = useToast();

  // form
  const form = useZodForm({
    schema: FundingTierSchemaArray,
    defaultValues: { fundingTiers: formData.fundingTiers },
    mode: "onChange",
  });

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "fundingTiers",
  });

  // methods
  const handleSubmit = (values: Array<IFundingTier>) => {
    setFormData({
      ...formData,
      fundingTiers: values,
    });

    console.log("values", values);

    setCompletion({ ...completion, [EStep.REWARDS]: true });
    setStep(EStep.SUMMARY);
  };

  const handleSelectFile = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    key: "imageUrl"
  ) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    console.log("file", file);

    try {
      form.setValue(`fundingTiers.${index}.${key}`, file);
    } catch (error: any) {
      console.error("Error selecting image: ", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message || error || "Error selecting image",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full flex-grow w-full">
      <SummaryTitle />
      <Form {...form}>
        <form>
          <div className="fle flex-col mt-4 space-y-8 h-full">
            {fields.map((field, index) => {
              return (
                <div
                  key={field.id}
                  className="flex flex-col gap-4 rounded-lg shadow-md p-8 border border-border"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">
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

                  <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-flow-col gap-8">
                    <FormField
                      control={form.control}
                      {...form.register(`fundingTiers.${index}.name`)}
                      render={({ field }) => (
                        <FormItem className="md:col-span-1 md:row-start-1">
                          <FormLabel>Tier name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="1 useful tool (Discount 30%)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {
                              form?.formState?.errors?.fundingTiers?.[index]
                                ?.name?.message
                            }
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      {...form.register(`fundingTiers.${index}.amountInUsd`)}
                      render={({ field }) => (
                        <FormItem className="md:col-span-1 md:row-start-1">
                          <FormLabel>Tier amount (USD)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="1000"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {
                              form?.formState?.errors?.fundingTiers?.[index]
                                ?.amountInUsd?.message
                            }
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      {...form.register(`fundingTiers.${index}.imageUrl`)}
                      render={({ field }) => (
                        <FormItem className="md:col-span-1 md:row-start-1">
                          <FormLabel>Image</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              accept="image/*"
                              //   {...field}
                              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleSelectFile(e, index, "imageUrl")
                              }
                            />
                          </FormControl>
                          <FormMessage>
                            {
                              form?.formState?.errors?.fundingTiers?.[index]
                                ?.imageUrl?.message as string
                            }
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      {...form.register(`fundingTiers.${index}.description`)}
                      render={({ field }) => (
                        <FormItem className="md:col-span-3 md:col-start-1 md:row-start-2">
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Get this useful tool for a 30% when you pledge..."
                              className="resize-none"
                              maxLength={250}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {
                              form?.formState?.errors?.fundingTiers?.[index]
                                ?.description?.message
                            }
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              );
            })}

            <Button
              variant={"secondary"}
              onClick={(e: any) => {
                e.preventDefault();
                append({
                  name: "",
                  amountInUsd: 0,
                  description: "",
                  imageUrl: "",
                });
              }}
              size={"sm"}
            >
              <Plus className="mr-2" /> Add New Tier
            </Button>

            <FormButtons
              onSubmit={form.handleSubmit((values) =>
                handleSubmit(values.fundingTiers)
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};
