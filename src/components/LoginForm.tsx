import { authService } from "@/services/AuthService";
import { Box, Flex, Input, Text, useDisclosure } from "@chakra-ui/react";
import { ErrorMessage, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { object, string } from "yup";
import { AlertDialogComponent } from "./AlertDialogComponent";

interface LoginFormProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  onClose: () => void; // close login dialog fn
}

export const LoginForm = ({ setIsLogin, onClose }: LoginFormProps) => {
  const {
    isOpen: isAlertDialogOpen,
    onOpen: onAlertDialogOpen,
    onClose: onAlertDialogClose,
  } = useDisclosure();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const loginValidationSchema = object({
    email: string().required("email is required!"),
    password: string().required("password is required!"),
  });

  return (
    <Box>
      <Formik
        enableReinitialize
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={async (values) => {
          try {
            const data = await authService.login(values.email, values.password);
            if (data.status === "success") {
              console.log("login success" + data);
              onClose();
              router.push("/dashboard");
            }
          } catch (e) {
            console.log("Error while loggin in.");
            const errMessage = e.response?.data?.detail;
            setError(true);
            if (errMessage) {
              setErrorMessage(errMessage);
            }
          }
        }}
      >
        {({ values, handleChange, handleBlur, errors }) => (
          <Form>
            <Flex direction="column">
              <Input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.email ? "red" : ""}
                placeholder="email"
                mt="10px"
                border={errors.email ? "1px solid #9e9e9e" : "none"}
                borderBottom={`1px solid ${errors.email ? "red" : "#9e9e9e"}`}
                borderRadius={errors.email ? "5px" : "none"}
                fontSize="14px"
                transition="0.2s ease"
                height="40px"
                _focus={{}}
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <Text color="red" fontSize="12px">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Input
                type="text"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.password ? "red" : ""}
                placeholder="password"
                mt="10px"
                border={errors.password ? "1px solid #9e9e9e" : "none"}
                borderBottom={`1px solid ${
                  errors.password ? "red" : "#9e9e9e"
                }`}
                borderRadius={errors.password ? "5px" : "none"}
                fontSize="14px"
                transition="0.2s ease"
                height="40px"
                _focus={{}}
              />
              <ErrorMessage name="password">
                {(msg) => (
                  <Text color="red" fontSize="12px">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              {error ? (
                <Text color="red" fontSize="15px" textAlign="center" pt="5px">
                  {errorMessage ? errorMessage : "Error has occurred!"}
                </Text>
              ) : null}
              <Flex alignItems="center" mt="20px" direction="column" gap="3px">
                <Input
                  value="SIGN IN"
                  type="submit"
                  bgColor="#16a085"
                  color="#fff"
                  borderRadius="2px"
                  w="200px"
                  h="35px"
                  fontSize="14px"
                  fontFamily="sans-serif"
                  cursor="pointer"
                  transition="0.1s ease"
                />

                <Input
                  value="LOG IN WITH GOOGLE+"
                  type="submit"
                  bgColor="#DD4B39"
                  color="#fff"
                  borderRadius="2px"
                  w="200px"
                  h="35px"
                  fontSize="14px"
                  fontFamily="sans-serif"
                  cursor="pointer"
                  transition="0.1s ease"
                />
              </Flex>

              <Text
                textAlign="right"
                pt="20px"
                fontSize="12px"
                fontFamily="Georama, sans-serif"
                cursor="pointer"
                onClick={() => setIsLogin(false)}
              >
                DON&apos;T HAVE AN ACCOUNT YET? SIGN UP!
              </Text>
            </Flex>
          </Form>
        )}
      </Formik>
      <AlertDialogComponent
        title="Error"
        message="Some kind of error has occurred. Try again later."
        isOpen={isAlertDialogOpen}
        onOpen={onAlertDialogOpen}
        onClose={onAlertDialogClose}
      />
    </Box>
  );
};
