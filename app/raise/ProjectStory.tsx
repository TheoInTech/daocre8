import { FormButtons } from "@/app/raise/FormButtons";
import { useFormState } from "@/app/raise/FormContext";
import { SummaryTitle } from "@/app/raise/SummaryTitle";
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
import {
  EStep,
  IProjectStory,
  ProjectStorySchema,
} from "@/lib/schema/raise.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

export const ProjectStory = () => {
  const { setFormData, formData, setStep, setCompletion, completion } =
    useFormState();
  const { toast } = useToast();

  // form
  const form = useForm<IProjectStory>({
    resolver: zodResolver(ProjectStorySchema),
    defaultValues: formData.projectStory,
  });

  // methods
  const handleSubmit = (values: IProjectStory) => {
    setFormData({
      ...formData,
      projectStory: values,
    });

    console.log("values", values);

    setCompletion({ ...completion, [EStep.STORY]: true });
    setStep(EStep.SUMMARY);
  };

  const handleSelectFile = (
    e: ChangeEvent<HTMLInputElement>,
    key: "imageUrl" | "videoUrl"
  ) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    console.log("file", file);

    try {
      form.setValue(key, file);
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
        <form className="fle flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row md:grid-flow-col gap-8">
            {/* Story Image */}
            <FormField
              control={form.control}
              name="imageUrl"
              render={() => (
                <FormItem className="md:col-span-1 md:row-start-1">
                  <FormLabel>Story Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      //   {...field}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleSelectFile(e, "imageUrl")
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Story Video */}
            <FormField
              control={form.control}
              name="videoUrl"
              render={() => (
                <FormItem className="md:col-span-2 md:row-start-1">
                  <FormLabel isOptional>Story Video</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="video/*"
                      //   {...field}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleSelectFile(e, "videoUrl")
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tell us your story */}
            <FormField
              control={form.control}
              name="inspiration"
              render={({ field }) => (
                <FormItem className="row-start-3 md:col-span-2 md:col-start-1 md:row-start-2">
                  <FormLabel>Inspiration behind the project</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="This project is my inspiration because..."
                      className="resize-none"
                      maxLength={250}
                      {...field}
                    />
                  </FormControl>
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
