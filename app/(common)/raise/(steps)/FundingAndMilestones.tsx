import { ConnectWallet } from "@/app/ConnectWallet";
import { FormButtons } from "@/common/raise/FormButtons";
import { useFormState } from "@/common/raise/FormContext";
import { SummaryTitle } from "@/common/raise/SummaryTitle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  FundingAngMilestonesSchema,
  IFundingAngMilestones,
} from "@/lib/schema/raise.schema";
import { getPercentagePartition } from "@/lib/utils/getPercentagePartition";
import { useWallet } from "@solana/wallet-adapter-react";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray } from "react-hook-form";

export const FundingAndMilestones = () => {
  const { setFormData, formData, setStep, setCompletion, completion } =
    useFormState();
  const { publicKey } = useWallet();
  const { toast } = useToast();

  // form
  const form = useZodForm({
    schema: FundingAngMilestonesSchema,
    defaultValues: formData.fundingAndMilestones,
    mode: "onChange",
  });

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "milestones",
  });

  const watchFundingAndCapital = form.watch([
    "fundingAmount",
    "capitalPercentage",
  ]);

  const watchFundingAndMilestone = form.watch(["fundingAmount", "milestones"]);

  // methods
  const handleSubmit = (values: IFundingAngMilestones) => {
    // get the total percentage by combining all milestones and the capital percentage
    const totalPercentage = values.milestones.reduce(
      (acc, milestone) => Number(acc) + Number(milestone.percentage),
      Number(values.capitalPercentage)
    );

    if (totalPercentage !== 100) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "The total percentage must total to 100%",
      });

      return;
    }

    setFormData({
      ...formData,
      fundingAndMilestones: values,
    });

    console.log("values", values);

    setCompletion({ ...completion, [EStep.MILESTONES]: true });
    toast({
      variant: "success",
      title: "Success",
      description: "Funding & milestones saved",
    });
    setStep(EStep.SUMMARY);
  };

  useEffect(() => {
    if (publicKey) {
      form.setValue("walletAddress", publicKey.toBase58());
    } else {
      form.setValue("walletAddress", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  return (
    <div className="flex flex-col gap-4 h-full flex-grow w-full">
      <SummaryTitle />
      <Form {...form}>
        <form className="flex flex-col gap-8 py-4">
          <div className="flex flex-col gap-2">
            {publicKey ? (
              <>
                {/* Wallet address */}
                <FormField
                  name="walletAddress"
                  render={() => (
                    <FormItem>
                      <FormLabel>Wallet address</FormLabel>
                      <FormControl>
                        <Input
                          disabled
                          value={publicKey.toBase58()}
                          {...fields}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Wallet */}
                <FormField
                  control={form.control}
                  name="walletIsConfirmed"
                  render={({ field }) => (
                    <FormItem className="my-4">
                      <div className="flex items-center gap-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>I confirm</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            ) : (
              <FormField
                name="walletAddress"
                render={() => (
                  <FormItem>
                    <div className="text-sm">
                      Please connect your{" "}
                      <span className="text-gradient-primary font-bold">
                        Solana
                      </span>{" "}
                      wallet
                    </div>
                    <ConnectWallet />
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Fund Raise Amount */}
            <FormField
              control={form.control}
              name="fundingAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fund Raise Amount (USD)</FormLabel>
                  <FormControl>
                    <Input placeholder="1000" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="hidden md:block"></div>

            {/* Starting capital */}
            <FormField
              control={form.control}
              name="capitalPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Starting capital (%)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="20"
                      min={1}
                      max={100}
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name={"capitalInUsd"}
              render={() => (
                <FormItem>
                  <FormLabel>USD Equivalent</FormLabel>
                  <FormControl>
                    <Input
                      value={getPercentagePartition(
                        watchFundingAndCapital[1], // fundingAmount
                        watchFundingAndCapital[0] // capitalPercentage
                      )}
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Milestones */}
          <div className="fle flex-col py-4 space-y-8 h-full">
            {fields.map((field, index) => {
              return (
                <div
                  key={field.id}
                  className="flex flex-col gap-4 rounded-lg shadow-md p-8 border border-border"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Milestone # {index + 1}</h4>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row md:grid-flow-col gap-8">
                    <FormField
                      control={form.control}
                      {...form.register(`milestones.${index}.percentage`)}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            % Funds distributed upon completion
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="20"
                              type="number"
                              min={1}
                              max={100}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {
                              form?.formState?.errors?.milestones?.[index]
                                ?.percentage?.message
                            }
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    <FormField
                      name={"milestoneInUsd"}
                      render={() => (
                        <FormItem>
                          <FormLabel>USD Equivalent</FormLabel>
                          <FormControl>
                            <Input
                              value={getPercentagePartition(
                                watchFundingAndMilestone[0], // fundingAmount
                                watchFundingAndMilestone[1][index].percentage // milestone percentage
                              )}
                              disabled
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      {...form.register(`milestones.${index}.description`)}
                      render={({ field }) => (
                        <FormItem className="col-span-1 md:col-span-2 md:col-start-1 md:row-start-2">
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="We finished the first prototype..."
                              className="resize-none"
                              maxLength={250}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {
                              form?.formState?.errors?.milestones?.[index]
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
                  percentage: 0,
                  description: "",
                });
              }}
              size={"sm"}
            >
              <Plus className="mr-2" /> Add New Milestone
            </Button>
          </div>

          <FormButtons onSubmit={form.handleSubmit(handleSubmit)} />
        </form>
      </Form>
    </div>
  );
};
