import { FormButtons } from "@/app/raise/FormButtons";
import { useFormState } from "@/app/raise/FormContext";
import { SummaryTitle } from "@/app/raise/SummaryTitle";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EStep, ITeam, TeamSchema } from "@/lib/schema/basic-details.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Team = () => {
  const { setFormData, formData, setStep, setCompletion, completion } =
    useFormState();

  // form
  const form = useForm<ITeam>({
    resolver: zodResolver(TeamSchema),
    defaultValues: formData.team,
  });

  // methods
  const handleSubmit = (values: ITeam) => {
    setFormData({
      ...formData,
      team: values,
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
          {/* Undoxxed */}
          <FormField
            control={form.control}
            name="undoxxed"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Undoxxed</FormLabel>
                  <FormDescription>
                    By choosing to remain anonymous, certain funders may look
                    past your project
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row md:grid-flow-col my-4 gap-8">
            {/* Founder's name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="md:col-start-1">
                  <FormLabel>Your name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      autoFocus
                      disabled={form.getValues("undoxxed")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* About the Founder */}
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem className="row-start-2 md:row-span-5 md:col-start-2">
                  <FormLabel>About yourself</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I'm an entrepreneur who has..."
                      className="resize-none h-[12rem]"
                      maxLength={500}
                      disabled={form.getValues("undoxxed")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* LinkedIn Profile */}
            <FormField
              control={form.control}
              name="linkedinUrl"
              render={({ field }) => (
                <FormItem className="md:col-start-1">
                  <FormLabel>LinkedIn profile</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.linkedin.com/in/<your-profile>"
                      disabled={form.getValues("undoxxed")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Github Profile */}
            <FormField
              control={form.control}
              name="githubUrl"
              render={({ field }) => (
                <FormItem className="md:col-start-1">
                  <FormLabel isOptional>Github profile</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://github.com/<your-profile>"
                      disabled={form.getValues("undoxxed")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* X Profile */}
            <FormField
              control={form.control}
              name="xUrl"
              render={({ field }) => (
                <FormItem className="md:col-start-1">
                  <FormLabel>X profile</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://x.com/<your-profile>"
                      disabled={form.getValues("undoxxed")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Past Project URL */}
            <FormField
              control={form.control}
              name="pastProjectUrl"
              render={({ field }) => (
                <FormItem className="md:col-start-1">
                  <FormLabel isOptional>Past Project URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://<your-project.com>"
                      disabled={form.getValues("undoxxed")}
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
