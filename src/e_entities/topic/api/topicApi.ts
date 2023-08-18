import {baseApi} from "@/f_shared/api";
import {ModuleId, ModuleWithTopics, Topic, TopicId} from "../model/types";

export const moduleApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getTopic: build.query<Topic, { moduleId: ModuleId, topicId: TopicId }>({
            query: ({moduleId, topicId}) => ({
                url: `/topics/get-by-module/${moduleId}/${topicId}`
            })
        }),
        getTopicsByModuleId: build.query<ModuleWithTopics, ModuleId>({
            query: (moduleId) => ({
                url: `/topics/get-by-module/${moduleId}`
            })
        })
    })
})

export const {useGetTopicQuery, useGetTopicsByModuleIdQuery} = moduleApi
