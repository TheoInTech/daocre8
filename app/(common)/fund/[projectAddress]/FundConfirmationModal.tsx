import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ECurrency } from "@/lib/schema/raise.schema";

export const FundConfirmationModal = ({
  isOpen,
  closeModal,
  onConfirm,
  projectName,
  tierName,
  amountInUsd,
  currency,
}: {
  isOpen: boolean;
  closeModal: () => void;
  onConfirm: () => void;
  projectName: string;
  tierName: string;
  amountInUsd: number;
  currency: ECurrency;
}) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col gap-2 pb-2">
            You&apos;re one step away from funding:
            <span className="text-xl font-semibold text-gradient-primary">
              {projectName}
            </span>
            <span className="text-sm font-medium">Tier: {tierName}</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4 pt-4 border-t border-t-border">
            <p>
              You are about to fund this project with{" "}
              <strong>${amountInUsd} USD</strong> in {currency}.
            </p>
            <p>
              Once you fund this project, you&apos;ll receive an exclusive{" "}
              <strong>Backer NFT</strong> that you can use to access your backed
              project&apos;s dashboard, comment on updates, vote on both change
              and milestone polls, and many more!
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
