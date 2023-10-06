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
  name,
  amountInUsd,
  currency,
}: {
  isOpen: boolean;
  closeModal: () => void;
  onConfirm: () => void;
  name: string;
  amountInUsd: number;
  currency: ECurrency;
}) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            You&apos;re one step away from funding: <br />
            <span className="text-xl font-semibold text-gradient-primary">
              {name}!
            </span>
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4">
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
