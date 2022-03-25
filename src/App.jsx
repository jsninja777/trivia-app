import { lazy, Suspense } from "react";
import classes from "./App.module.scss";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
import { questionsData } from "./utils/getReducers";

import Home from "./pages/Home";
const Quiz = lazy(() => import("./pages/Quiz"));
const Results = lazy(() => import("./pages/Results"));

function App() {
  const { questions } = useSelector(questionsData);
  return (
    <div className={classes.App}>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={routes.homepage} element={<Home />} />
          {questions && (
            <>
              <Route path={routes.quizepage} element={<Quiz />} />
              <Route path={routes.resultspage} element={<Results />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
