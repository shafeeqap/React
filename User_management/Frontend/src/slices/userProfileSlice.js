import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";

export const userProfileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadProfileImage: builder.mutation({
      query: (file) => {
        const formData = new FormData();
        formData.append("profileImage", file);

        return {
          url: `${USERS_URL}/profileImage`,
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});

export const { useUploadProfileImageMutation } = userProfileApiSlice;
