import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "pages";
import { LayoutRoot } from "components/layout";

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutRoot>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LayoutRoot>
    </BrowserRouter>
  );
}
