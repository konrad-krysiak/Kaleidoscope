import { URL } from "@/constants/server";
import axios from "axios";
import { useEffect, useState } from "react";

export const authService = {
  login,
  logout,
  register,
};

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(URL + "/tenBest", {
          credentials: "include",
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    isAuthenticated,
    isLoading: loading,
    isError: error,
  };
};

function login(email: string, password: string) {
  return axios
    .post(
      URL + "/login",
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    )
    .then((response) => {
      if (response.status === 403) {
        return { status: "user not found" };
      }
      if (response.status !== 200) {
        return { status: "failure" };
      }

      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify({ ...response.data }));
      }

      return { status: "success", payload: response.data };
    });
}

function logout() {
  return axios
    .post(
      URL + "/logout",
      {},
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    )
    .then((response) => {
      if (response.status !== 200) {
        return { status: "failure" };
      }
      localStorage.removeItem("user");
      return { status: "success" };
    });
}

function register(
  name: string,
  surname: string,
  city: string,
  languageNative: string,
  languageForeign: string,
  age: string,
  email: string,
  password: string
) {
  return axios.post(
    URL + "/register",
    {
      name,
      surname,
      city,
      age,
      email,
      languageNative,
      languageForeign,
      password,
    },
    { withCredentials: true }
  );
}
