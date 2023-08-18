import {Route, Routes} from "react-router-dom";
import {HomePage} from "@/b_pages/HomePage";
import {PageWithTabBar} from "@/b_pages/PageWithTabBar";
import {NewsLinePage} from "@/b_pages/NewsLinePage";
import {LearnPage} from "@/b_pages/LearnPage";
import {QuizesPage} from "b_pages/QuizzesPage";
import {TournamentsPage} from "@/b_pages/TournamentsPage";
import {ArchivePage} from "@/b_pages/ArchivePage";
import {SettingsPage} from "@/b_pages/SettingsPage";
import {FriendsPage} from "@/b_pages/FriendsPage";
import {MapPage} from "@/b_pages/MapPage";
import {LoginPage} from "@/b_pages/LoginPage";
import React from 'react'
import {TopicPage} from "@/b_pages/TopicPage";
import {RegisterPage} from "@/b_pages/RegisterPage";
import {ProtectedAuthPage} from "@/b_pages/ProtectedAuthPage";
import {CreateQuizPage} from "@/b_pages/CreateQuizPage";
import {QuizDetailPage} from "@/b_pages/QuizDetailPage";
import {QuizPlayPage} from "@/b_pages/QuizPlayPage";

export const MainRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={
                <PageWithTabBar>
                    <HomePage/>
                </PageWithTabBar>
            }/>
            <Route path={'/news-line'} element={
                <PageWithTabBar>
                    <NewsLinePage/>
                </PageWithTabBar>
            }/>
            <Route path={'/learn'} element={
                <PageWithTabBar>
                    <LearnPage/>
                </PageWithTabBar>
            }/>
            <Route path={'/quizzes'} element={
                <PageWithTabBar>
                    <QuizesPage/>
                </PageWithTabBar>
            }/>
            <Route path={'/tournaments'} element={
                <PageWithTabBar>
                    <TournamentsPage/>
                </PageWithTabBar>
            }/>
            <Route path={'/archive'} element={
                <PageWithTabBar>
                    <ArchivePage/>
                </PageWithTabBar>
            }/>
            <Route path={'/settings'} element={
                <PageWithTabBar>
                    <SettingsPage/>
                </PageWithTabBar>
            }/>
            <Route path={'/friends'} element={
                <PageWithTabBar>
                    <FriendsPage/>
                </PageWithTabBar>
            }/>
            <Route path={'/map'} element={
                <PageWithTabBar>
                    <MapPage/>
                </PageWithTabBar>
            }/>
            <Route path={'/modules/:moduleId'} element={
                <TopicPage/>
            }/>
            <Route path={'/login'} element={
                <LoginPage/>
            }/>
            <Route path={'/register'} element={
                <RegisterPage/>
            }/>
            <Route path={"/quizzes/create"} element={
                <ProtectedAuthPage>
                    <CreateQuizPage/>
                </ProtectedAuthPage>
            }/>
            <Route path={"/quizzes/:id"} element={
                <QuizDetailPage/>
            }/>
            <Route path={"/quizzes/play"} element={
                <QuizPlayPage/>
            }/>
        </Routes>
    )
}
