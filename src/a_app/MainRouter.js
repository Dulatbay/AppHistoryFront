import {Route, Routes} from "react-router-dom";
import {HomePage} from "../b_pages/HomePage";
import {PageWithTabBar} from "../b_pages/PageWithTabBar";
import {NewsLinePage} from "../b_pages/NewsLinePage";
import {LearnPage} from "../b_pages/LearnPage";
import {QuizesPage} from "../b_pages/QuizesPage";
import {TournamentsPage} from "../b_pages/TournamentsPage";
import {ArchivePage} from "../b_pages/ArchivePage";

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
            <Route path={'/quizes'} element={
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

        </Routes>
    )
}
