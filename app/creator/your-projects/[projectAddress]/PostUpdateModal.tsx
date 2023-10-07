"use client";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const PostUpdateModal = ({
  isOpen,
  closeModal,
  onConfirm,
}: {
  isOpen: boolean;
  closeModal: () => void;
  onConfirm: (title: string, description: string) => void;
}) => {
  // TODO: Use form and zod schema for validation
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col gap-2 pb-2 text-xl font-semibold text-gradient-violet">
            Post an update for your backers
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4 pt-4 border-t border-t-border ">
            <Input
              placeholder="Update summary / title"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Hello backers! Here's an update just for you!"
              className="resize-none min-h-[20rem]"
              onChange={(e) => setDescription(e.target.value)}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={!title || !description}
            onClick={() => onConfirm(title, description)}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
