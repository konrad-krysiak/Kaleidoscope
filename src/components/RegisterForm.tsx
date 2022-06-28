import { authService } from "@/services/AuthService";
import { Box, Flex, Input, Text, useDisclosure } from "@chakra-ui/react";
import { ErrorMessage, Form, Formik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { object, string } from "yup";

interface RegisterFormProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export const RegisterForm = ({ setIsLogin }: RegisterFormProps) => {
  const [registerStatus, setRegisterStatus] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const registerValidationSchema = object({
    name: string().required("This field is required"),
    surname: string().required("This field is required"),
    city: string().required("This field is required"),
    age: string().required("This field is required"),
    email: string()
      .email("Email is invalid")
      .required("This field is required"),
    password: string().required("This field is required"),
    languageNative: string().required("This field is required"),
    languageForeign: string().required("This field is required"),
  });

  return (
    <Box>
      <Formik
        enableReinitialize
        initialValues={{
          name: "",
          surname: "",
          city: "",
          age: "",
          email: "",
          password: "",
          languageNative: "",
          languageForeign: "",
        }}
        validationSchema={registerValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => {
          authService
            .register(
              values.name,
              values.surname,
              values.city,
              values.languageNative,
              values.languageForeign,
              values.age,
              values.email,
              values.password
            )
            .then((res) => {
              setRegisterStatus(true);
              setRegisterError(false);
            })
            .catch(() => {
              console.log("register error");
              setRegisterError(true);
            });
        }}
      >
        {({ values, handleChange, handleBlur, errors }) => (
          <Form>
            <Flex direction="column">
              {registerStatus ? (
                <Text textAlign="center" color="green">
                  You have registered successfully!
                </Text>
              ) : null}
              <Input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.name ? "red" : ""}
                placeholder="name"
                mt="10px"
                border={errors.name ? "1px solid #9e9e9e" : "none"}
                borderBottom={`1px solid ${errors.name ? "red" : "#9e9e9e"}`}
                borderRadius={errors.name ? "5px" : "none"}
                fontSize="14px"
                transition="0.2s ease"
                height="40px"
                _focus={{}}
              />
              <ErrorMessage name="name">
                {(msg) => (
                  <Text color="red" fontSize="12px">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Input
                type="text"
                name="surname"
                id="surname"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.surname ? "red" : ""}
                placeholder="surname"
                mt="10px"
                border={errors.surname ? "1px solid #9e9e9e" : "none"}
                borderBottom={`1px solid ${errors.surname ? "red" : "#9e9e9e"}`}
                borderRadius={errors.surname ? "5px" : "none"}
                fontSize="14px"
                transition="0.2s ease"
                height="40px"
                _focus={{}}
              />
              <ErrorMessage name="surname">
                {(msg) => (
                  <Text color="red" fontSize="12px">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Input
                type="text"
                name="city"
                id="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.city ? "red" : ""}
                placeholder="city"
                mt="10px"
                border={errors.city ? "1px solid #9e9e9e" : "none"}
                borderBottom={`1px solid ${errors.city ? "red" : "#9e9e9e"}`}
                borderRadius={errors.city ? "5px" : "none"}
                fontSize="14px"
                transition="0.2s ease"
                height="40px"
                _focus={{}}
              />
              <ErrorMessage name="city">
                {(msg) => (
                  <Text color="red" fontSize="12px">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Input
                type="text"
                name="languageNative"
                id="languageNative"
                value={values.languageNative}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.languageNative ? "red" : ""}
                placeholder="languageNative"
                mt="10px"
                border={errors.languageNative ? "1px solid #9e9e9e" : "none"}
                borderBottom={`1px solid ${
                  errors.languageNative ? "red" : "#9e9e9e"
                }`}
                borderRadius={errors.languageNative ? "5px" : "none"}
                fontSize="14px"
                transition="0.2s ease"
                height="40px"
                _focus={{}}
              />
              <ErrorMessage name="languageNative">
                {(msg) => (
                  <Text color="red" fontSize="12px">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Input
                type="text"
                name="languageForeign"
                id="languageForeign"
                value={values.languageForeign}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.languageForeign ? "red" : ""}
                placeholder="languageForeign"
                mt="10px"
                border={errors.languageForeign ? "1px solid #9e9e9e" : "none"}
                borderBottom={`1px solid ${
                  errors.languageForeign ? "red" : "#9e9e9e"
                }`}
                borderRadius={errors.languageForeign ? "5px" : "none"}
                fontSize="14px"
                transition="0.2s ease"
                height="40px"
                _focus={{}}
              />
              <ErrorMessage name="languageForeign">
                {(msg) => (
                  <Text color="red" fontSize="12px">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Input
                type="text"
                name="age"
                id="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor={errors.age ? "red" : ""}
                placeholder="age"
                mt="10px"
                border={errors.age ? "1px solid #9e9e9e" : "none"}
                borderBottom={`1px solid ${errors.age ? "red" : "#9e9e9e"}`}
                borderRadius={errors.age ? "5px" : "none"}
                fontSize="14px"
                transition="0.2s ease"
                height="40px"
                _focus={{}}
              />
              <ErrorMessage name="age">
                {(msg) => (
                  <Text color="red" fontSize="12px">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

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

              {registerError ? (
                <Text textAlign="center" color="red">
                  Error has occurred.
                </Text>
              ) : null}

              <Flex alignItems="center" mt="20px" direction="column" gap="3px">
                <Input
                  value="SIGN UP"
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
                onClick={() => setIsLogin(true)}
              >
                HAVE AN ACCOUNT ALREADY? SIGN IN!
              </Text>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
