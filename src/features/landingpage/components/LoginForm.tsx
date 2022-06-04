import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { ErrorMessage, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import { object, string } from "yup";

interface LoginFormProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export const LoginForm = ({ setIsLogin }: LoginFormProps) => {
  const loginValidationSchema = object({
    username: string()
      .required("username is required!")
      .min(6, "username is too short, should be 6 characters minimum!")
      .max(15, "username is too long, should be 15 characters maximum!"),
    password: string()
      .required("password is required!")
      .min(6, "password is too short, should be 6 characters minimum!")
      .max(15, "password is too long, should be 15 characters maximum"),
  });

  return (
    <Box>
      <Formik
        enableReinitialize
        initialValues={{ username: "", password: "" }}
        validationSchema={loginValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={() => {
          console.log("submit");
        }}
      >
        {({ values, handleChange, handleBlur, errors }) => (
          <Form>
            <Flex direction="column">
              <Input
                type="text"
                name="username"
                id="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.username ? "red" : ""}
                placeholder="username"
                mt="10px"
                border={errors.username ? "1px solid #9e9e9e" : "none"}
                borderBottom={`1px solid ${
                  errors.username ? "red" : "#9e9e9e"
                }`}
                borderRadius={errors.username ? "5px" : "none"}
                fontSize="14px"
                transition="0.2s ease"
                height="40px"
                _focus={{}}
              />
              <ErrorMessage name="username">
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
                DON'T HAVE AN ACCOUNT YET? SIGN UP!
              </Text>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
