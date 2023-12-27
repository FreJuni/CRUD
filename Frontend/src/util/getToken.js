import { redirect } from "react-router-dom";

export const expTime = () => {
  const expTime = localStorage.getItem("exp");
  const expTimInMili = new Date(expTime);
  const currentTimeMili = new Date();
  const duration = expTimInMili - currentTimeMili;
  return duration;
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const duration = expTime();
  if (duration < 0) {
    return "EXP_TOKEN";
  }
  return token;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("exp");
  return redirect("/");
};

export const tokenLoader = () => {
  return getToken();
};

export const checkTokenLoader = () => {
  const token = getToken();

  if (!token) {
    return redirect("/auth?mode=login");
  }

  return token;
};
