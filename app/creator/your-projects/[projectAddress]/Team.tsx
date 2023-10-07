import { Button } from "@/components/ui/button";
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
import { useProjectDetailState } from "@/creator/your-projects/[projectAddress]/ProjectDetailContext";
import useZodForm from "@/lib/hooks/useZodForm";
import { ITeam, TeamSchema } from "@/lib/schema/raise.schema";
import { Plus } from "lucide-react";
import { useFieldArray } from "react-hook-form";

export const Team = () => {
  const { project } = useProjectDetailState();

  // form
  const form = useZodForm({
    schema: TeamSchema,
    defaultValues: project?.project_ipfs_hash?.team,
    mode: "onChange",
  });

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "teamProfileUrls",
  });

  // methods
  const handleSubmit = (values: ITeam) => {};

  return (
    <div className="flex flex-col gap-4 h-full flex-grow w-full">
      <Form {...form}>
        <form className="fle flex-col gap-8 py-4">
          {/* Undoxxed */}
          <FormField
            control={form.control}
            name="undoxxed"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 card-glass p-4">
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

            {/* Team Member Profiles */}
            <div className="flex flex-col space-y-4 md:col-start-1">
              {fields.map((field, index) => {
                return (
                  <div
                    key={field.id}
                    className="flex flex-col gap-4 card-glass"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">
                        Team member # {index + 1}
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

                    <FormField
                      control={form.control}
                      {...form.register(`teamProfileUrls.${index}.url`)}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="https://www.linkedin.com/in/<teammates-profile>"
                              disabled={form.getValues("undoxxed")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {
                              form?.formState?.errors?.teamProfileUrls?.[index]
                                ?.url?.message
                            }
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                );
              })}
              <Button
                variant={"secondary"}
                disabled={form.getValues("undoxxed")}
                onClick={(e: any) => {
                  e.preventDefault();
                  append({ url: "" });
                }}
                className="w-fit"
                size={"sm"}
              >
                <Plus className="mr-2" /> Add Team Member
              </Button>
            </div>
          </div>
        </form>
      </Form>
      <Button onClick={form.handleSubmit(handleSubmit)} className="self-end">
        Update
      </Button>
    </div>
  );
};
