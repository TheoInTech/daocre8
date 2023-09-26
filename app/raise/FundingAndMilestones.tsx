import { FormButtons } from "@/app/raise/FormButtons";
import { useFormState } from "@/app/raise/FormContext";
import { SummaryTitle } from "@/app/raise/SummaryTitle";
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
import {
  EStep,
  FundingAngMilestonesSchema,
  IFundingAngMilestones,
} from "@/lib/schema/raise.schema";
import { getPercentagePartition } from "@/lib/utils/getPercentagePartition";
import { zodResolver } from "@hookform/resolvers/zod";
import { useWallet } from "@solana/wallet-adapter-react";
import { useForm } from "react-hook-form";

export const FundingAndMilestones = () => {
  const { setFormData, formData, setStep, setCompletion, completion } =
    useFormState();
  const { publicKey } = useWallet();

  // form
  const form = useForm<IFundingAngMilestones>({
    resolver: zodResolver(FundingAngMilestonesSchema),
    defaultValues: formData.fundingAndMilestones,
  });

  // methods
  const handleSubmit = (values: IFundingAngMilestones) => {
    setFormData({
      ...formData,
      fundingAndMilestones: values,
    });

    console.log("values", values);

    setCompletion({ ...completion, [EStep.MILESTONES]: true });
    setStep(EStep.SUMMARY);
  };

  return (
    <div className="flex flex-col gap-4 h-full flex-grow w-full">
      <SummaryTitle />
      <Form {...form}>
        <form className="fle flex-col gap-8 py-4">
          {/* Wallet address */}
          <FormField
            name="walletAddress"
            render={() => (
              <FormItem>
                <FormLabel>Wallet address</FormLabel>
                <FormControl>
                  <Input disabled={true} value={publicKey?.toBase58()} />
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

          <div className="flex gap-8">
            {/* Starting capital */}
            <FormField
              control={form.control}
              name="capitalPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Starting capital (%)</FormLabel>
                  <FormControl>
                    <Input placeholder="20" autoFocus {...field} />
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

                  <Input
                    value={getPercentagePartition(
                      form.getValues("capitalPercentage"),
                      formData.basicDetails.fundingAmount
                    )}
                    disabled
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormButtons onSubmit={form.handleSubmit(handleSubmit)} />
        </form>
      </Form>
    </div>
  );
};
