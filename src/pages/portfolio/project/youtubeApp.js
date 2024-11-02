import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import "../style.css";
import "./project.css";

// Import images
import easeOfUseChart from "./img/youtube/Pre-Test Google Form.png";
import familiarityUsageChart from "./img/youtube/Post-Test Google.png";
import subtitleEditorScreens from "./img/youtube/Video Editor[Test B].png";
import projectBannerImg from "./img/youtube/youtubeBanner.jpg";

const YouTubeUsabilityStudy = () => {
  return (
    <HelmetProvider>
      <Container className="project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>YouTube Usability Study | Portfolio</title>
          <meta
            name="description"
            content="Detailed page for the YouTube usability study project"
          />
        </Helmet>

        {/* 상단 이미지 섹션 */}
        <section
          className="snap-banner"
          style={{
            backgroundImage: `url(${projectBannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "80vh",
            marginLeft: "calc(-50vw + 50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "5rem 0"
          }}
        >
          <div className="root-text">
            <h1>YouTube Creator Studio Usability Study</h1>
            <p>
            A comprehensive usability study aimed at improving the YouTube Creator Studio interface.
            This project focused on enhancing user experience, reducing cognitive load, and improving task flow for content creators of all experience levels.
            <br /><br />
            Tools Used: Google Forms, Figma, Adobe XD <br />
            Team: IAT432 Usability Study Group | SFU | IAT432
            </p>
                <div>
                <a href="https://www.figma.com/proto/FjXUvLfOdw6bmHFQ8MicTA/IAT432_youtube-b?node-id=0-1&node-type=canvas&t=HJs7UR7BaQgD59pt-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A4" className="project-link">
                  View Prototype
                </a>
              </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="explain section" id="explain">
          <h3 className="explain__title">YouTube Creator Studio Usability Study</h3>
          <p>
            This comprehensive study was designed to assess and enhance the usability of YouTube Creator Studio, focusing on challenges such as user interaction, navigation, and cognitive load for both frequent and occasional YouTubers. The project spanned multiple phases, including planning, testing, result analysis, prototyping, and controlled studies, to develop a complete understanding of user needs and improve the platform’s functionality.
          </p>

          {/* Project 1.1 - Planning and Preparing a Test */}
          <h4>Project 1.1 - UI Usability Studies: Planning and Preparing a Test</h4>
          <p>
            This phase involved setting up a usability study with clear objectives to evaluate Creator Studio’s interface. The goal was to understand usability issues affecting both dedicated YouTubers and casual users who might use the platform differently. Key challenges targeted included user interaction difficulties, navigation, and poor learnability, with a focus on increasing platform accessibility and user satisfaction.
          </p>
          <p><strong>Participants:</strong> The study recruited a diverse group of participants, from frequent YouTubers who upload regularly and analyze content to casual users who upload sporadically. This diversity allowed for a broad examination of usability across different experience levels and content management goals.</p>
          <p><strong>Study Goals:</strong> The usability evaluation included specific user tasks mirroring real-world YouTube Creator Studio activities, such as video uploading, managing metadata, analyzing channel and video performance, creating playlists, and adding captions. These tasks were designed to reveal the extent to which the interface supported intuitive and efficient content management.</p>
          <p><strong>Task Design:</strong> Each task reflected an important feature within Creator Studio:</p>
          <ul>
            <li><strong>Uploading a Video:</strong> Users uploaded a test video, applied metadata, set a publication schedule, and managed settings.</li>
            <li><strong>Adding Closed Captions:</strong> Users added and synced captions, examining accessibility options.</li>
            <li><strong>Reviewing Copyright Claims:</strong> Participants reviewed and resolved copyright issues.</li>
            <li><strong>Analyzing Performance Using Analytics:</strong> Users compared view metrics and engagement data.</li>
            <li><strong>Downloading Analytics Reports:</strong> Participants exported analytics data as a CSV file.</li>
          </ul>
          <p><strong>Pre- and Post-Test Questionnaires:</strong> Pre-test surveys assessed users’ familiarity with Creator Studio’s features, while post-test surveys captured feedback on satisfaction, ease of use, and task-specific challenges. This helped identify specific pain points and potential areas for improvement in each feature.</p>

          {/* Project 1.2 - Conducting the Test */}
          <h4>Project 1.2 - Conducting the Test</h4>
          <p>During the test phase, the team observed participants interacting with Creator Studio, noting user difficulties, points of confusion, and instances where assistance was needed.</p>
          <p><strong>Participant Profiles:</strong> A mix of experienced YouTubers and casual users provided a balanced perspective on Creator Studio’s functionality.</p>
          <p><strong>Test Environment and Conditions:</strong> Tests were conducted both in controlled physical settings and virtually through Discord, allowing consistent data collection while capturing authentic user interactions.</p>
          <p><strong>Data Collection and Observational Techniques:</strong> Data collection combined quantitative and qualitative approaches:</p>
          <ul>
            <li><strong>Quantitative Data:</strong> Questionnaires captured ratings on ease of use, task completion, and error frequency.</li>
            <li><strong>Qualitative Observations:</strong> Researchers took detailed notes on user actions, including misclicks and requests for help, which revealed specific usability flaws.</li>
          </ul>

          {/* Include Familiarity and Usage Chart */}
          <div className="img-box">
            <img src={familiarityUsageChart} alt="Participant Familiarity and Usage Charts" />
          </div>

          {/* Project 1.3 - Reporting the Results */}
          <h4>Project 1.3 - Reporting the Results</h4>
          <p>This phase analyzed the findings from the usability tests, focusing on quantitative data and user feedback to evaluate ease of use, error frequency, and user preferences between the original and redesigned versions.</p>
          <p><strong>Quantitative Analysis and Statistical Testing:</strong> Key insights included:</p>
          <ul>
            <li><strong>Error Reduction:</strong> The prototype (Version B) showed significant improvements in error rates, particularly in advanced tasks.</li>
            <li><strong>Ease of Use:</strong> The redesigned interface received a higher ease-of-use rating, with the original interface scoring an average of 2.85 compared to 1.54 for the prototype.</li>
          </ul>

          {/* Include Ease of Use Chart */}
          <div className="img-box">
            <img src={easeOfUseChart} alt="Ease of Use Rating After Task Completion" />
          </div>

          {/* Project 1.4 - Prototyping Solutions */}
          <h4>Project 1.4 - Prototyping Solutions</h4>
          <p>The prototyping phase focused on developing solutions for the usability issues identified in earlier stages. The team designed enhancements to streamline tasks, particularly in the areas of subtitling and analytics.</p>
          <p><strong>Subtitling Task Redesign:</strong> The redesigned interface introduced a guided workflow, with clear stages and options for subtitling:</p>
          <ul>
            <li><strong>Step-by-Step Workflow:</strong> Users were guided through each stage, from language selection to editing, with clear instructions.</li>
            <li><strong>Card-Based Subtitle Options:</strong> Different captioning methods were presented as card options with icons and descriptions.</li>
          </ul>

          {/* Include Subtitle Editor Screens */}
          <div className="img-box">
            <img src={subtitleEditorScreens} alt="Subtitle Editor Prototype Screens" />
          </div>

          <p><strong>Analytics Page Redesign:</strong> Key changes included highlighted metrics and terminology tooltips.</p>

          {/* Project 3 - Controlled Studies */}
          <h4>Project 3 - Controlled Studies</h4>
          <p>This phase involved a controlled study comparing the original Subtitle Editor with the redesigned prototype. The aim was to assess whether a step-by-step interface could reduce user errors and improve ease of use.</p>
          <p><strong>Results:</strong> Key findings included:</p>
          <ul>
            <li><strong>Error Reduction:</strong> The redesigned version showed a reduction in error rates, particularly in tasks requiring guidance.</li>
            <li><strong>Ease-of-Use Ratings:</strong> The prototype received higher ratings, confirming that a structured task flow enhances navigation.</li>
            <li><strong>Reduced Confusion:</strong> Observations showed fewer instances of confusion with the prototype.</li>
          </ul>
          <p><strong>Conclusion and Recommendations:</strong> The study validated the benefit of a guided workflow in improving user experience, suggesting implementations such as enhanced tooltips and guided task flows.</p>
        </section>
      </Container>
    </HelmetProvider>
  );
};

export default YouTubeUsabilityStudy;
