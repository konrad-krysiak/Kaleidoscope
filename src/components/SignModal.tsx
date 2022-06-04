import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLogin: boolean;
}

export const SignModal = ({ isOpen, onClose, isLogin }: LoginModalProps) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isLoginForm, setIsLoginForm] = useState(isLogin);

  return (
    <Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        size={isMobile ? "sm" : "md"}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent m="auto 0" position="relative" py="15px">
          <Box
            position="absolute"
            right="10px"
            top="10px"
            onClick={() => {
              setIsLoginForm(isLogin);
              onClose();
            }}
            cursor="pointer"
          >
            <Image src="/close.svg" alt="close" width="10px" height="10px" />
          </Box>
          <ModalHeader textAlign="center">
            {isLoginForm ? "Sign in" : "Sign up"}
          </ModalHeader>
          <ModalBody>
            {isLoginForm ? (
              <LoginForm setIsLogin={setIsLoginForm} />
            ) : (
              <RegisterForm setIsLogin={setIsLoginForm} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
