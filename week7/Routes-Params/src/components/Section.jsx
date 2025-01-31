import "./Header.css";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserComments from "./UserComments";
import { Link } from "react-router-dom";

export default function Section() {
  return (
    <>
      <div className="section">
        <h1>Query Strings, URL Params, Nested Routes</h1>
        <button>
          <Link to={"users/:id"}>User profile</Link>
        </button>

        <Routes>
          <Route element={<UserProfile />} path={"/users/:id"}>
            <Route element={<UserComments />} path={"/users/:id/:comment"} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
