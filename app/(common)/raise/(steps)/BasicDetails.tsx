import { FormButtons } from "@/common/raise/FormButtons";
import { useFormState } from "@/common/raise/FormContext";
import { SummaryTitle } from "@/common/raise/SummaryTitle";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  BasicDetailsSchema,
  ELocation,
  EStep,
  IBasicDetails,
} from "@/lib/schema/raise.schema";
import { cn } from "@/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

export const BasicDetails = () => {
  const { setFormData, formData, setStep, setCompletion, completion } =
    useFormState();
  const { toast } = useToast();

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

  const handleSelectFile = (
    e: ChangeEvent<HTMLInputElement>,
    key: "imageUrl" | "videoUrl" | "pdfUrl"
  ) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    console.log("file", file);

    try {
      form.setValue(key, file);

      console.log("form", form.getValues(key));
    } catch (error: any) {
      console.error("Error selecting media: ", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message || error || "Error selecting media",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full flex-grow w-full">
      <SummaryTitle />
      <Form {...form}>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
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

          {/* Inspiration */}
          <FormField
            control={form.control}
            name="inspiration"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-2">
                <FormLabel>Inspiration behind the project</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I'm doing this project because..."
                    className="resize-none"
                    maxLength={250}
                    {...field}
                  />
                </FormControl>
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
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleSelectFile(e, "imageUrl")
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Info Deck */}
          <FormField
            control={form.control}
            name="pdfUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Info Deck</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="application/pdf"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleSelectFile(e, "pdfUrl")
                    }
                  />
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
                    accept="video/*"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleSelectFile(e, "videoUrl")
                    }
                  />
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
                      <Button variant={"calendar"} className={cn("p-4")}>
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
                      <Button variant={"calendar"} className={cn("p-4")}>
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
