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

export const CompletionModal = ({
  isOpen,
  closeModal,
  onConfirm,
}: {
  isOpen: boolean;
  closeModal: () => void;
  onConfirm: () => void;
}) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            You&apos;re one step away from creating your project!
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4">
            <p>
              Commit <strong>1 SOL</strong> to complete your application.
            </p>
            <p>
              50% of this will be refunded upon your project&apos; completion
              (either succeeds or fails).
            </p>
            <p>
              Once your project is created, you&apos;ll receive an exclusive{" "}
              <strong>Creator Badge NFT</strong> that you can use to access your
              project dashboard, analytics, insights, DAOCre-8&apos;s exclusive
              creator events, and many more!
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
