import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CreateUserRequest,
  GetUsersApiResponse,
} from "../interfaces/userApi.interface";
import { HttpMethodsEnum } from "@config/enums/http-method.enum";
import { ENDPOINTS } from "@config/globalConstants/endPoints";
import { paramInjector } from "@utils/paramInjector";
import { CONFIG } from "@config/globalConstants/config";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: CONFIG.baseUrl }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersApiResponse[], void>({
      query: () => ENDPOINTS.GET_USERS,
      providesTags: ["Users"],
    }),
    createPerson: builder.mutation<GetUsersApiResponse, CreateUserRequest>({
      query: (newPerson) => ({
        url: ENDPOINTS.CREATE_PERSON,
        method: HttpMethodsEnum.POST,
        body: newPerson,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation<boolean, string>({
      query: (id) => ({
        url: paramInjector(ENDPOINTS.DELETE_PERSON, id),
        method: HttpMethodsEnum.DELETE,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreatePersonMutation,
  useDeleteUserMutation,
} = usersApi;
