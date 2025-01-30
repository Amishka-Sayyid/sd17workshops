import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserPage } from "./components/UserPage";

import { UserPostsPage } from "./components/UserPostsPage";
import Header from "./components/Header";
import About from "./components/About";
export default function App() {
  return (
    <>
      <Header />
      <h1>Query Strings, URL Params, Nested Routes</h1>

      <About />

      {/* creating dynamic routes with React router */}
      <Routes>
        <Route path="/users/:username" element={<UserPage />}>
          <Route path="/users/:username/posts" element={<UserPostsPage />} />
        </Route>
      </Routes>
    </>
  );
}
