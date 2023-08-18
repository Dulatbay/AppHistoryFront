import {baseApi} from "@/f_shared/api";
import {Module, ModuleId, ModuleTitle} from '../model/types'

export const moduleApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getAllModule: build.query<Module[], void>({
            query: () => ({
                url: '/modules'
            })
        }),
        getModuleById: build.query<Module, ModuleId>({
            query: (moduleId) => ({
                url: `modules/${moduleId}`
            })
        }),
        getTitles: build.query<ModuleTitle[], void>({
            query: () => ({
                url: 'modules/get-titles'
            })
        })
    })
})

export const {useGetAllModuleQuery, useGetModuleByIdQuery, useGetTitlesQuery} = moduleApi
