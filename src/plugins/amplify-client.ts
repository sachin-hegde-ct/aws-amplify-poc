import { Amplify } from "@aws-amplify/core";
import { Auth } from "@aws-amplify/auth";
import { API } from "@aws-amplify/api";
import awsmobile from "../aws-exports";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  Amplify.configure(awsmobile);
  return {
    provide: {
      auth: Auth,
      api: API,
    },
  };
});
