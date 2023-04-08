import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import { NewTodoPage } from "./new/NewTodoPage";
import { EditTodoPage } from "./edit/EditTodoPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  );
};

export { App };
