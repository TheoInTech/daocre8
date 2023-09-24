import { FormButtons } from "@/app/raise/FormButtons";
import { useFormState } from "@/app/raise/FormContext";
import { SummaryTitle } from "@/app/raise/SummaryTitle";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BasicDetailsSchema,
  ELocation,
  EStep,
  IBasicDetails,
} from "@/lib/schema/basic-details.schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";

export const BasicDetails = () => {
  const { setFormData, formData, setStep, setCompletion, completion } =
    useFormState();

  // form
  const form = useForm<IBasicDetails>({
    resolver: zodResolver(BasicDetailsSchema),
    defaultValues: formData.basicDetails,
  });
  const locationOptions = Object.entries(ELocation);

  // methods
  const handleSubmit = (values: IBasicDetails) => {
    setFormData({
      ...formData,
      basicDetails: values,
    });

    console.log("values", values);

    setCompletion({ ...completion, [EStep.BASIC_DETAILS]: true });
    setStep(EStep.SUMMARY);
  };

  return (
    <div className="flex flex-col gap-4 h-full flex-grow w-full">
      <SummaryTitle />
      <Form {...form}>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input placeholder="DAO" autoFocus {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="min-w-[16rem]">
                      <SelectValue placeholder="Your primary location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {locationOptions.map(([key, value]) => (
                      <SelectItem key={key} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project Image */}
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Image</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pitch Deck */}
          <FormField
            control={form.control}
            name="pitchDeckUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pitch Deck</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Video */}
          <FormField
            control={form.control}
            name="videoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel isOptional>Project Video</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    {...field}
                    value={field.value === null ? "" : field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Launch Date */}
          <FormField
            control={form.control}
            name="launchDate"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Launch Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"calendar"}
                        className={cn(
                          "p-4",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? format(new Date(field.value), "PPP")
                          : "-"}
                        <CalendarIcon className="w-6 h-6 ml-auto opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align="start">
                    <Calendar
                      mode="single"
                      onSelect={(value) => field.onChange(value?.toUTCString())}
                      fromDate={
                        new Date(new Date().setDate(new Date().getDate() + 1))
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

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

          {/* Fundraise End Date */}
          <FormField
            control={form.control}
            name="fundraiseEndDate"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Fundraise End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"calendar"}
                        className={cn(
                          "p-4",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? format(new Date(field.value), "PPP")
                          : "-"}
                        <CalendarIcon className="w-6 h-6 ml-auto opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align="start">
                    <Calendar
                      mode="single"
                      onSelect={(value) => field.onChange(value?.toUTCString())}
                      fromDate={
                        new Date(new Date().setDate(new Date().getDate() + 1))
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormButtons onSubmit={form.handleSubmit(handleSubmit)} />
        </form>
      </Form>
    </div>
  );
};
