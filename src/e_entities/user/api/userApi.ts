import {baseApi} from "@/f_shared/api";
import {UserCardType} from "@/e_entities/user";
import {ShockDayType} from "@/e_entities/user/model/types";

export const userApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getUserCard: build.query<UserCardType, number>({
            query: (userId) => ({
                url: `/users/user-card/${userId}`
            })
        }),
        getShockDay: build.query<ShockDayType, void>({
            query: () => ({
                url: `/users/me/shock-days`
            })
        })
    })
})
export const {useGetShockDayQuery, useGetUserCardQuery} = userApi