import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

// 프로젝트를 카테고리별로 분류
const uiuxProjects = dataportfolio.filter(project => project.category === "UI/UX");
const devProjects = dataportfolio.filter(project => project.category === "Development");
const otherProjects = dataportfolio.filter(project => project.category === "Other");

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="Portfolio-header" fluid>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="section-header">
          <h1 className="display-4 mb-4"> Portfolio </h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </div>

        {/* UI/UX 프로젝트 섹션 */}
        <h2 className="section-title">UI/UX Projects</h2>
        <div className="po_items_ho">
          {uiuxProjects.map((project, i) => (
            <div key={i} className="po_item">
              <div className="img-container">
                <img src={project.img} alt="" className="project-img" />
              </div>
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.description}</div>
              <div className="content">
                {i === 0 ? (
                  <Link to="/project/rootApp">View Project</Link> // 첫 번째 프로젝트 링크
                ) : i === 1 ? (
                  <Link to="/project/snapApp">View Project</Link> // 두 번째 프로젝트 링크
                ) : i === 2 ? (
                  <Link to="/project/youtubeApp">View Project</Link> // 세 번째 프로젝트 링크
                ) : (
                  <a href={project.link}>View Project</a> // 나머지 프로젝트는 기존 링크 사용
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Development 프로젝트 섹션 */}
        {/*
        <h2 className="section-title">Development Projects</h2>
        <div className="po_items_ho">
          {devProjects.map((project, i) => (
            <div key={i} className="po_item">
              <div className="img-container">
                <img src={project.img} alt="" className="project-img" />
              </div>
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.description}</div>
              <div className="content">
                <a href={project.link}>View Project</a>
              </div>
            </div>
          ))}
        </div>

        {/* Other 프로젝트 섹션 */}

        {/*
        <h2 className="section-title">Other Projects</h2>
        <div className="po_items_ho">
          {otherProjects.map((project, i) => (
            <div key={i} className="po_item">
              <div className="img-container">
                <img src={project.img} alt="" className="project-img" />
              </div>
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.description}</div>
              <div className="content">
                <a href={project.link}>View Project</a>
              </div>
            </div>
          ))}
        </div>

        */}
      </Container>
    </HelmetProvider>
  );
};

export default Portfolio;
