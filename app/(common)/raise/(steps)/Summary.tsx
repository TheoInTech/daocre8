import { CompletionModal } from "@/app/(common)/raise/CompletionModal";
import { FormButtons } from "@/common/raise/FormButtons";
import { useFormState } from "@/common/raise/FormContext";
import { SummaryTitle } from "@/common/raise/SummaryTitle";
import { Button } from "@/components/ui/button";
import useIrys from "@/lib/hooks/useIrys";
import { EStep } from "@/lib/schema/raise.schema";
import { TCompletion } from "@/lib/types/raise.types";
import { cn } from "@/lib/utils/cn";
import { useWallet } from "@solana/wallet-adapter-react";
import { CheckCircle, ChevronRight } from "lucide-react";
import { useState } from "react";

const summaryButtons = [
  { label: "1 | Basic Details", step: EStep.BASIC_DETAILS },
  { label: "2 | Rewards", step: EStep.REWARDS },
  { label: "3 | The Team", step: EStep.TEAM },
  { label: "4 | Funding & Milestones", step: EStep.MILESTONES },
];

export const Summary = () => {
  const { setStep, completion, formData } = useFormState();
  const { publicKey } = useWallet();
  const { gaslessFundAndUploadFiles, gaslessFundAndUploadData } = useIrys();
  const [completionModalIsOpen, setCompletionModalIsOpen] =
    useState<boolean>(false);

  const handleConfirmation = async () => {
    // TODO:
    // 1. Communicate with the solana program to stake the SOL
    // 2. Once stake is successful, start the upload to Irys
    console.log("formData=", formData);

    // Consolidate the required files into a single array
    const files = [
      formData.basicDetails.imageUrl,
      formData.basicDetails.pdfUrl,
      ...formData.fundingTiers.map((tier) => tier.imageUrl),
    ];

    // Add the optional video if it exists
    formData.basicDetails?.videoUrl &&
      files.push(formData.basicDetails.videoUrl);

    console.log("files=", files);

    // try {
    //   const fileUploadResponse = await gaslessFundAndUploadFiles(files);
    //   console.log("fileUploadResponse=", fileUploadResponse);

    //   if (!fileUploadResponse) {
    //     throw new Error("Error uploading files");
    //   }

    //   const dataToBeUploaded = formatProjectDataForIrys(
    //     formData,
    //     fileUploadResponse.manifestId
    //   );

    //   console.log("dataToBeUploaded=", dataToBeUploaded);
    //   console.log("Uploading whole project...");
    //   const dataUploadResponse = await gaslessFundAndUploadData(
    //     JSON.stringify(dataToBeUploaded),
    //     [
    //       {
    //         name: "user",
    //         value: publicKey!.toBase58(),
    //       },
    //     ]
    //   );

    //   console.log("dataUploadResponse=", dataUploadResponse);
    // } catch (error) {
    //   console.error(error);
    // }

    // 3. Once uploaded to Irys, communicate with the solana program to mint the NFT, create the Project DAO and save the hash

    // 4. Go to the NFT giving page
    setStep(EStep.FINAL);
  };

  return (
    <>
      <CompletionModal
        isOpen={completionModalIsOpen}
        closeModal={() => setCompletionModalIsOpen(false)}
        onConfirm={handleConfirmation}
      />
      <div className="flex flex-col gap-4 items-start justify-center h-full flex-grow w-full">
        <SummaryTitle />
        <div className="grid grid-rows-4 py-4 md:grid-rows-2 md:grid-cols-2 grid-flow-col gap-8 w-full">
          {summaryButtons.map(({ label, step }) => (
            <div
              key={label}
              className="flex items-center justify-between w-full gap-4"
            >
              <Button
                variant={"outline"}
                onClick={() => setStep(step)}
                className="w-full h-fit flex-nowrap text-sm md:text-lg flex justify-between py-4 px-6"
              >
                {label}
                <ChevronRight className="w-4 h-4" />
              </Button>
              <CheckCircle
                className={cn(
                  "w-12 h-12",
                  completion[step as keyof TCompletion]
                    ? "text-success"
                    : "text-gray-300"
                )}
              />
            </div>
          ))}
        </div>
        <FormButtons onSubmit={() => setCompletionModalIsOpen(true)} />
      </div>
    </>
  );
};
