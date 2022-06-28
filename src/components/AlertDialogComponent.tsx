import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

interface AlertDialogComponentProps {
  title: string;
  message: string | React.ReactNode;
  buttonText?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onClickCallback?: () => void;
  closeButton?: boolean;
}

export const AlertDialogComponent = ({
  title,
  message,
  buttonText,
  isOpen,
  onOpen,
  onClose,
  onClickCallback,
  closeButton = true,
}: AlertDialogComponentProps) => {
  const cancelRef = useRef(null);
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      closeOnOverlayClick={false}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        {closeButton ? <AlertDialogCloseButton /> : null}
        <AlertDialogBody>{message}</AlertDialogBody>
        <AlertDialogFooter>
          <Button
            ref={cancelRef}
            onClick={onClickCallback ? onClickCallback : onClose}
            colorScheme="red"
          >
            {buttonText ? buttonText : "close"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
