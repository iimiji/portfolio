import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import RootProject from "../pages/portfolio/project/rootApp"; // RootProject 컴포넌트 추가
import SnapProject from "../pages/portfolio/project/snapApp"; // SnapProject 컴포넌트 추가
import YouTubeApp from "../pages/portfolio/project/youtubeApp"; // YouTubeApp 컴포넌트 추가
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/project/rootApp" element={<RootProject />} /> {/* RootProject 경로 추가 */}
        <Route path="/project/snapApp" element={<SnapProject />} /> {/* SnapProject 경로 추가 */}
        <Route path="/project/youtubeApp" element={<YouTubeApp />} /> {/* YouTubeApp 경로 추가 */}
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
