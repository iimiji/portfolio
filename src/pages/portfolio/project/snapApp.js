import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import "../style.css";
import "./project.css";

// 이미지 경로 설정
import projectBannerImg from "./img/snap/project3.jpg";
import personaImg from "./img/snap/persona.jpg";
import personaMobileImg from "./img/snap/snapMobile/persona_mobile.jpg";
import horizontalImg from "./img/snap/Horizontal.jpg";
import horizontalMobileImg from "./img/snap/snapMobile/Horizontal_mobile.jpg";
import horizontal2Img from "./img/snap/Horizontal2.jpg";
import horizontal2MobileImg from "./img/snap/snapMobile/Horizontal2_mobile.jpg";
import verticalImg from "./img/snap/vertical.jpg";
import verticalMobileImg from "./img/snap/snapMobile/vertical_mobile.jpg";
import vertical2Img from "./img/snap/vertical2.jpg";
import vertical2MobileImg from "./img/snap/snapMobile/vertical2_mobile.jpg";
import tableImg from "./img/snap/table.jpg";

const SnapProject = () => {
  return (
    <HelmetProvider>
      <Container className="project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Snap Project | Portfolio</title>
          <meta name="description" content="Detailed page for the Snap project" />
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
            <h1>Snap Project</h1>
            <p>
              Redesigning the SFU Snap app's dining feature for improved usability.
              Experience the updated design focused on ease of access, reviews, and detailed statistics.
              <br /><br />
                Tools Used: Figma <br />
                Team Mijili | SFU | CMPT363
                </p>
                <div>
                <a href="https://www.figma.com/proto/cxOerbQ3IO77ZCSEuqDrq1/portfolio-projects?node-id=13-10109&scaling=scale-down&starting-point-node-id=13%3A10109&show-proto-sidebar=1&t=Ai53GWZb1TaUhgch-1" className="project-link">
                  View Prototype
                </a>
              </div>
          </div>
        </section>

        {/* 컨텍스트 식별 섹션 */}
        <section className="explain section" id="explain">
          <h3 className="explain__title">Context Identification</h3>
          <p>
            When it comes to meal time, students and staff must eat. Even if they are not hungry, 
            they need a variety of intakes, such as caffeine drinks and snacks, to accompany them 
            when they are sleepy. All campuses of Simon Fraser University provide a variety of eateries 
            nearby. To find the right eatery, they use the dining feature of the SFU Snap app 
            to explore their options. Currently, the dining feature only shows the name and operating hours of the nearby 
            eateries, so users have to rely on other sources of information to find out the types of food sold, 
            distance, reviews, and other details. They typically want to find a good eatery as soon as possible. 
            Users interact with the app primarily around mealtimes, mostly on their phones, and they utilize it across all SFU campuses. 
            Each user may have different dining purposes and varying levels of familiarity with the campus geography, 
            which is why we have developed distinct personas for three key user groups to enhance the app's usability.
          </p>
          <span className="explain__subtitle">User Persona</span>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={personaMobileImg} />
              <img src={personaImg} alt="User Persona" className="explain-img" />
            </picture>
          </div>

          {/* 요구사항 섹션 */}
          <h3 className="explain__title">Functional and Non-Functional Requirements</h3>
          <p>
            <strong>Requirement #1:</strong><br />
            Users should be able to make a review about an eatery based on its atmosphere, taste, price, and accessibility using a 5-star rating system.
            <br /><strong>Non-Functional Requirement:</strong><br />
            The system should update the lists of reviews in less than 1 second after they have been written.
          </p>
          <p>
            <strong>Functional Requirement #2:</strong><br />
            Users should be able to save their reviews on their profile and share the profile with others directly from the app.
            <br /><strong>Non-Functional Requirement:</strong><br />
            The shared profile should only display the name of the eatery, items purchased, ratings, and the review to protect personal information.
          </p>
          <p>
            <strong>Functional Requirement #3:</strong><br />
            Users should be able to view statistics such as the number of visitors at particular hours, frequently used words in reviews, and the average time spent at the eatery from the app.
            <br /><strong>Non-Functional Requirement:</strong><br />
            The system should highlight statistics related to current situations, such as time and location.
          </p>

          {/* 디자인 프로세스 섹션 */}
          <h3 className="explain__title">Design Process</h3>
          <p>
            We reviewed each other’s LFP sketches from part 1 of the project. 
            After the review, we agreed on the general look of the interface based on one of the sketches. 
            We then researched other review services such as Google Reviews, Yelp, and TripAdvisor, 
            integrating their successful elements into our LFP sketches. The finalized sketch served as a blueprint 
            for our final MFP design, ensuring that our redesign was both functional and aesthetically pleasing.
          </p>

          {/* 수평 MFP 섹션 */}
          <h3 className="explain__title">Horizontal MFP</h3>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={horizontalMobileImg} />
              <img src={horizontalImg} alt="Horizontal MFP" className="explain-img" />
            </picture>
          </div>
          <p>
            Upon opening the app, users will first see the dashboard screen. 
            Users can tap the dining button on the grid or the “More” button on 
            the bottom tab, followed by pressing the dining button to access the dining feature.
            This streamlined navigation ensures users can quickly find dining options. Users can scroll through the list 
            of eateries and tap on one to find more details. 
            By tapping “About” on the dining place page, users can see detailed information about the eatery, 
            including statistics such as the general number of visitors during specific time slots, frequently appearing 
            terms in reviews, and average time spent at the eatery. The address tab and about tab 
            both highlight statistics relevant to current situations. The map address tab 
            shows the distance to the eatery from the user’s current location, while the about tab highlights 
            the current time slot in the “popular times” section, addressing both functional and non-functional requirements.
          </p>

          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={horizontal2MobileImg} />
              <img src={horizontal2Img} alt="Horizontal MFP 2" className="explain-img" />
            </picture>
          </div>
          <p>
            On the same page, users can tap the “Review” tab to see existing reviews for the eatery. 
            There is a button labeled “Leave a review.” By pressing this button, users can write their 
            own review using the 5-star rating system. Users rate the eatery's atmosphere, taste, price, 
            and accessibility, and the average of these four ratings will be displayed, satisfying our first functional requirement. 
            The app updates the list of reviews immediately upon submission, ensuring compliance with our first non-functional requirement. 
            From the dining page, users can tap the profile icon in the top right corner to access their profile page, 
            where they can view reviews they have written and eateries they have favorited for later access. 
            Users can also share the link to their profile by tapping the “Share” button at the top right, allowing others to see their reviews. 
            This fulfills our second functional requirement, with shared links displaying only the name of the eatery, 
            items purchased, ratings, and reviews to protect sensitive information.
          </p>
          
          {/* 수직 MFP 섹션 */}
          <h3 className="explain__title">Vertical MFP</h3>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={verticalMobileImg} />
              <img src={verticalImg} alt="Vertical MFP" className="explain-img" />
            </picture>
          </div>
          <p>
            For our vertical MFP, we have implemented the “reviewing feature” in depth. 
            The scenario involves a user (let's call them 'T') wanting to leave a review for an eatery 
            they found using the SFU Snap app. T can access the dining feature by tapping the “Dining” 
            button on the grid. The dining feature displays a list of eateries in a grid format. 
            T can tap on the eatery they wish to review. 
            After navigating to the “Review” tab, T can access the review page and press the “Leave a review” button to submit feedback.
          </p>
          <p>
            The review page displays four sets of 5 stars, each representing ratings for atmosphere, taste, price, 
            and accessibility. To leave a review, T must rate each attribute out of 5 stars, with 1 star being the worst and 5 stars being the best. 
            T can also enter thoughts in the provided text box, which includes helpful placeholders for better usability. 
            T can attach up to 5 images as part of the review if desired. 
            By pressing the “Post” button in the top right corner, T submits the review. 
            The review will show the average ratings from users, and the list updates in under 1 second after T has posted 
            their review, allowing T to see their submission immediately. If T decides not to write the review, 
            they can press the “X” button in the top left to discard their progress and return to the review page. 
            A confirmation prompt ensures that the review is not accidentally deleted.
          </p>

          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={vertical2MobileImg} />
              <img src={vertical2Img} alt="Vertical MFP 2" className="explain-img" />
            </picture>
          </div>

          <p>
            Additionally, the feature displays general statistics, such as popular times and frequently used terms 
            based on user reviews. These statistics are available to all users accessing the review feature. 
            To enhance usability, the feature highlights the current time slot in the popular times statistics, allowing users 
            to recognize peak periods immediately and anticipate potential crowds at the eatery. This process 
            effectively satisfies both functional and non-functional requirements.
          </p>

          {/* Commentary on MFP 섹션 */}
          <h3 className="explain__title">Commentary on MFP</h3>
          <p>
            While designing the MFP, we encountered several limitations. For instance, when implementing a prototype using Figma, 
            we struggled to fix a footer that could move to another page at the bottom of the screen. The original intention 
            was to create a long scrollable screen in Figma; however, we could not find a way to keep the footer at the bottom 
            while allowing users to scroll freely. Consequently, we ended up with a screen where the bottom was cropped and overlapped 
            by the footer, creating the illusion of more content than available.
          </p>
          <p>
            Furthermore, by addressing one issue in the interaction paths, we inadvertently constructed paths without considering 
            that modifications needed to be applied to all pages containing the object. This led to less varied outputs 
            based on user interactions than we had anticipated.
          </p>

          {/* 인지적 워크스루 섹션 */}
          <h3 className="explain__title">Cognitive Walkthrough</h3>
          <p>
            <strong>Context and scenario given to the evaluator:</strong><br />
            You are a new student at Simon Fraser University. 
            You are having difficulty finding a place to eat around the Burnaby campus, 
            where you spend most of your day. You heard about the SFU Snap app 
            during the welcome orientation and decided to use the dining feature to find a 
            good place to eat. After selecting a nearby eatery, you want to view the reviews 
            and decide to leave feedback about your experience.
          </p>
          <p>
            <strong>Your task:</strong><br />
            1. Find the review page for the selected eatery.<br />
            2. Leave a review about your experience with the eatery in the system.
          </p>
          <div className="img-box">
            <img src={tableImg} alt="Cognitive Walkthrough Table" className="explain-img" />
          </div>
          <h3 className="explain__title">Summary of Walkthrough:</h3>
          <p>
            The walkthrough was completed without significant issues. The evaluator commented that our design was intuitive and visually appealing, 
            allowing them to navigate through tasks easily. For instance, for task 1, they were able to locate the review page for the selected eatery 
            due to clearly labeled buttons. The evaluator also praised the overall design and effective use of space.
          </p>
          <p>
            However, despite these strengths, the evaluator raised some concerns. For task 1, while finding the navigation paths was straightforward, 
            they encountered some stub buttons that responded but lacked functionality, leading to confusion about their purpose. 
            For task 2, although they quickly grasped the star rating system, they hesitated to tap on the gray button because of the absence of instructions.
            To resolve these issues, we could implement more functional buttons on the grid rather than displaying “under development” prompts. 
            Additionally, adding a prompt such as “Please tap on the stars to rate” above the star rating system could enhance clarity for users.
          </p>

          {/* Reflection 섹션 */}
          <h3 className="explain__title">Reflection</h3>
          <p>
            The redesign of the SFU Snap app was an interesting challenge because we were not only tasked with 
            revamping an existing app but also had to design a new review system integrated into an existing feature. 
            This experience required us to study the overall design to ensure consistency across all aspects of the app. 
            It provided us with a valuable opportunity to apply classroom learning to real-world problems.
          </p>
          <p>
            The process began with a heuristic evaluation of the SFU Snap app, utilizing Nielsen's 10 usability heuristics for User Interface Design. 
            This evaluation provided us with a clear understanding of usability principles and what constitutes a good user interface. 
            We explored the app firsthand and conducted interviews with several students who regularly use the SFU Snap app, enabling us to identify a range of features, 
            both positive and negative, in terms of usability heuristics. We learned much from the flaws in the app, informing us of what to avoid in our design.
          </p>
          <p>
            For context identification, we interviewed students and faculty members at SFU about their experiences with the app and their expectations for a review feature. 
            This insightful opportunity allowed us to hear actual users’ opinions, helping us identify common themes among the interviewees and establish a strong context for our project.
          </p>
          <p>
            From the context and interviews, we developed three distinct personas. This process was straightforward since we could directly use the goals and struggles identified 
            during the interviews. While not every idea linked directly to the review mechanism, we generated relevant concepts based on responses from the interviewees.
          </p>
          <p>
            We dedicated considerable time to identifying meaningful struggles for the personas, as we believed the functional requirements should focus on solving those issues. 
            Our goal was for the functional requirements to be meaningful and impactful. Once we established the functional requirements, we brainstormed non-functional requirements 
            for each functional requirement, aiming to enhance convenience for users. We reviewed lecture slides and other examples, such as Google Reviews, to ensure that our 
            non-functional requirements were equally meaningful, as we believed that effective functional and non-functional requirements would lay a solid foundation for good user interface design.
          </p> 
          <p>
            Using these functional requirements, we created LFP sketches. As discussed in part 2b, we integrated our LFPs from part 1 with features from other services. 
            The transition from sketches to MFP was the most challenging aspect of our project. Both of us were relatively inexperienced with Figma, so we relied on tutorials 
            to familiarize ourselves with the tool. We aimed for the final product to be as polished as possible, which required gathering images, reviews, and properly documenting our sources. 
            The end result was satisfactory, but we recognize there is still room for improvement.
          </p>
          <p>    
            One area where we could have improved was to implement more functional buttons instead of leaving stubs that led to prompts stating “under development.” 
            Our focus was more on incorporating functionalities that met our requirements, which led us to run out of time as adding all the buttons was very time-consuming.
          </p>
          <p>
            Another potential improvement would be to retain more elements of the original design. Currently, we have diverged from the SFU identity by not utilizing SFU colors. 
            While this is more of an aesthetic consideration, we believe it is important since the SFU Snap app is the official application for SFU.
          </p>
          <p>
            Additionally, as noted in part 2b, we faced specific limitations within Figma that we could not overcome. If given another opportunity, we may explore alternative tools or 
            find ways to bypass these limitations for better design outcomes.
          </p>
          <p>
            The final step was conducting a cognitive walkthrough. Before beginning the walkthrough, we reviewed the materials from week 10, including suggested readings and videos, 
            to ensure we understood the process and expected outcomes. The walkthrough proceeded smoothly, a sentiment we felt confident about beforehand due to our strong final designs. 
            However, the feedback and issues raised by the evaluator provided us with a new perspective on our design and potential areas for improvement, as highlighted in the summary above.
          </p>
          <p>
            Overall, this assignment was challenging due to the multitude of new concepts and tools we had to familiarize ourselves with. However, we were pleased with how our design 
            turned out and how, as a team and as students, we learned and understood so much from the experience of redesigning the SFU SNAP app and implementing the review feature.
          </p>
          <br />
          <iframe
            width="1024"
            height="576"
            src="https://www.youtube.com/embed/pGlb5BdJXJ8?&autoplay=1"
            frameBorder="0"
            allowFullScreen
            title="Snap Project Video"
          ></iframe>
        </section>
      </Container>
    </HelmetProvider>
  );
};

export default SnapProject;
