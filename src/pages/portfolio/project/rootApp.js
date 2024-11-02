import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import "../style.css";
import "./project.css";

// 이미지 경로 설정
import project2Img from "./img/root/project2.jpg";
import intendedUserImg from "./img/root/intendeduser.jpg";
import intendedUserMobileImg from "./img/root/rootMobile/intendeduser_mobile.jpg";
import personaDetailImg from "./img/root/personadetail.png";
import sketches1Img from "./img/root/sketches1.jpg";
import sketches1MobileImg from "./img/root/rootMobile/sketches1_mobile.jpg";
import sketches2Img from "./img/root/sketches2.jpg";
import sketches2MobileImg from "./img/root/rootMobile/sketches2_mobile.jpg";
import storyboardImg from "./img/root/storyboard.jpg";
import storyboardMobileImg from "./img/root/rootMobile/storyboard_mobile.jpg";
import designVariationsImg from "./img/root/DesignVariations.jpg";
import designVariationsMobileImg from "./img/root/rootMobile/DesignVariations_mobile.jpg";
import styleGuideImg from "./img/root/StyleGuide.jpg";
import styleGuideMobileImg from "./img/root/rootMobile/StyleGuide_mobile.jpg";
import homePageImg from "./img/root/homePage.jpg";
import homePageMobileImg from "./img/root/rootMobile/home_page_mobile.jpg";
import birthdayFeatureImg from "./img/root/birthdayFeature.jpg";
import birthdayFeatureMobileImg from "./img/root/rootMobile/birthdayFeature_mobile.jpg";
import sendMessageImg from "./img/root/sendMessage.jpg";
import sendMessageMobileImg from "./img/root/rootMobile/sendMessage_mobile.jpg";
import messagePageImg from "./img/root/messagePage.jpg";
import messagePageMobileImg from "./img/root/rootMobile/messagePage_mobile.jpg";
import memoryPageImg from "./img/root/memoryPage.jpg";
import memoryPageMobileImg from "./img/root/rootMobile/memoryPage_mobile.jpg";
import profilePageImg from "./img/root/profilePage.jpg";
import profilePageMobileImg from "./img/root/rootMobile/profilePage_mobile.jpg";
import userStudyPlanImg from "./img/root/userStudyPlan.jpg";
import userStudyPlanMobileImg from "./img/root/rootMobile/userStudyPlan_mobile.jpg";
import twoProcedureImg from "./img/root/twoProcedure.jpg";
import twoProcedureMobileImg from "./img/root/rootMobile/twoProcedure_mobile.jpg";
import designIssuesImg from "./img/root/DesignIssues.jpg";
import designIssuesMobileImg from "./img/root/rootMobile/DesignIssues_mobile.jpg";
import improvement1Img from "./img/root/improvement1.jpg";
import improvement1MobileImg from "./img/root/rootMobile/improvement1_mobile.jpg";
import improvement2Img from "./img/root/improvement2.jpg";
import improvement2MobileImg from "./img/root/rootMobile/improvement2_mobile.jpg";
import improvement3Img from "./img/root/improvement3.jpg";
import improvement3MobileImg from "./img/root/rootMobile/improvement3_mobile.jpg";
import userLoginImg from "./img/root/userLogin.jpg";
import userLoginMobileImg from "./img/root/rootMobile/userLogin_mobile.jpg";

const RootProject = () => {
  return (
    <HelmetProvider>
      <Container className="project-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Root Project | Portfolio</title>
          <meta name="description" content="Detailed page for the Root project" />
        </Helmet>

        {/* 상단 이미지 섹션 */}
        <section className="root" id="root">
          <div
            className="root-background"
            style={{
              backgroundImage: `url(${project2Img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
              height: "90vh",
              marginLeft: "calc(-50vw + 50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "5rem 0"
            }}
          >
            <div className="root-text">
              <h1>Root</h1>
              <p>
                ROOT is a family social communication application that allows users to engage, connect,
                and share updates or news with their families abroad. Designed for easier accessibility for seniors.
                <br /><br />
                Tools Used: Figma, Protopie <br />
                Team Mijili | SFU | IAT339
              </p>
              <div>
                <a href="https://cloud.protopie.io/p/55dfd6f5ad?touchHint=true&ui=true&scaleToFit=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&playSpeed=1&playerAppPopup=true" className="project-link">
                  View Prototype
                </a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a href="https://youtu.be/MSYDwU6HxOA" className="project-link">
                  View Promo Video
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 상세 설명 섹션 */}
        {/* Idea & Interaction Framework */}
        <section className="explain section" id="explain">
          <h3 className="explain__title">Idea & Interaction Framework</h3>
          <p>
            Based on our interview and research with families living abroad, our intended users are seniors over 75 years old who have family members located on various parts of the world.
            To keep families connected, or more specifically to allow the seniors to feel connected with their families irrespective of geographical distances or physical impairments with design features that are considerate of senior’s physical limitations.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={intendedUserMobileImg} />
              <img src={intendedUserImg} alt="Intended user detail" className="explain-img" />
            </picture>
          </div>

          {/* Persona */}
          <h3 className="explain__title">Persona</h3>
          <span className="explain__subtitle">Persona 01: Judy</span>
          <p>
            Our first persona is Judy, a 75-year-old single woman with a daughter living in Japan and a son living in Seattle. 
            Her time at home alone has increased because of the pandemic, and she feels lonely. 
            She isn't very good with smartphones, but she likes to take pictures with it to create new memories.
            Her pain point is she wants to message her family but doesn't want to bother them because of the time difference. She wants to learn how to use apps that would make it easy to communicate with family, but she doesn’t have the knowledge and couldn't get help to do so.
            The solution is to design an app that is considerate of each user's time zone differences and provide a service with minimal effort and learning stages.
          </p>
          <span className="explain__subtitle">Persona 02: Jason Smith</span>
          <p>
            Our second persona is Jason Smith, an 85-year-old married senior living in Vancouver. 
            He is the namesake of our application, ROOT. He has four children living in different time zones and six grandchildren. 
            For Jason, it is hard to send morning greetings because he has to remember all the time zones before he contacts them.
            He hopes to have a messaging function that sends messages to each child at a specific scheduled time so that he can deliver good morning and night greetings without memorizing all the time differences.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={personaDetailImg} />
              <img src={personaDetailImg} alt="Persona details" className="explain-img" />
            </picture>
          </div>

          {/* Sketches */}
          <h3 className="explain__title">Sketches</h3>
          <p>
            Here’s our initial pen-and-paper sketches we developed for our ROOT interface.
            First is the main home page where users have four different menus to either view their family member profiles, see updates or memories, access their photo album, and play games with their family members online. 
            On each member’s profile, users can see the country they are in, their time zone, and the weather.
            From the profile, they can directly voice or video call or send a message. 
            When the user wants to send a message, they can schedule it based on time zones, setting it to send in the morning, evening, or customizing it for their preference.
            In the sharing memories section, users can upload and react to any updates, images, or videos that members post.
            In the photo album, they can view all images within the app and upload any photos they have taken. 
            Finally, in the games section, users have access to various games that they can play or compete with their family online, such as Pictionary, Wordle, or Scrabble.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={sketches1MobileImg} />
              <img src={sketches1Img} alt="Initial sketches 1" className="explain-img" />
            </picture>
          </div>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={sketches2MobileImg} />
              <img src={sketches2Img} alt="Initial sketches 2" className="explain-img" />
            </picture>
          </div>

          {/* Storyboard */}
          <h3 className="explain__title">Storyboard</h3>
          <p>
            This is our storyboard with the scenario of Judy, our persona who wants to send a message to her daughter Mika in Japan.
            She wants to text her daughter but doesn’t want to bother her late at night.
            So, she opens the ROOT app, and from the main menu, she selects ‘view members’.
            She finds Mika’s profile and sees that it’s 2:00 AM in Japan.
            She selects send message and proceeds to write a morning message to Mika, setting it to arrive at 9:00 AM in Japan.
            The next day, Mika wakes up and receives the message her mother has sent.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={storyboardMobileImg} />
              <img src={storyboardImg} alt="Storyboard" className="explain-img" />
            </picture>
          </div>

          {/* Design Variations */}
          <h3 className="explain__title">Design Variations</h3>
          <p>
            This is our design interaction presentation for our application, ROOT, an easy-to-use platform for seniors to communicate with their family abroad. 
            We began by exploring different design variations for our application based on our personas from last week: experimenting with different color palettes, interaction elements, and more. 
            With the first design, we made the main interaction with family members to be all from the member profile. 
            In the second design, we focused on a different theme and color, with a mix of orange and blue and simple interactions. 
            Finally, in the third design, we tried to use bigger buttons and image sizes for easier interactions for the elders, which was the design we decided to focus on.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={designVariationsMobileImg} />
              <img src={designVariationsImg} alt="Design Variations" className="explain-img" />
            </picture>
          </div>

          {/* Style Guide */}
          <h3 className="explain__title">Style Guide</h3>
          <p>
            For our style guide, the typeface we chose was Roboto, which consists of modern and simplified characters with good readability.
            We mainly used orange as the primary color. The warm color helps bring warmth and intimacy to our application. 
            We paid attention to font size and color contrast to enhance accessibility for users who might have a harder time reading texts on mobile.
            To maintain consistency and simplify development, we used a layout grid of four columns.
            We focused on using well-structured interface elements and larger icons with text for a more user-friendly interaction for seniors who may be struggling with vision or fine motor control issues.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={styleGuideMobileImg} />
              <img src={styleGuideImg} alt="Style Guide" className="explain-img" />
            </picture>
          </div>

          {/* User Flow */}
          <h3 className="explain__title">User Flow</h3>
          <span className="explain__subtitle">User Login</span>
          <p>
            The user flow for the login page: when a user opens our application, first there is a splash screen, followed by a login screen. For first-time users without an account, they will need to register via name, email, date of birth, and set a password.
          </p>
          <div className="img-box">
          <picture>
              <source media="(max-width: 768px)" srcSet={userLoginMobileImg} />
              <img src={userLoginImg} alt="Style Guide" className="explain-img" />
            </picture>
          </div>

          <span className="explain__subtitle">Home Page</span>
          <p>
            This is our home page of our application. 
            At the very top, users can see their profile, followed by a search bar that allows them to search for specific family members.
            Considering the feedback we received last week, we designed our home page so that users can access family members directly to create a more family-oriented application.
            On the family members’ profiles, users can engage with them in different ways, such as sending messages, voice calls, and video calls.
            They can also see the country their family members are in, their time zone, and the weather.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={homePageMobileImg} />
              <img src={homePageImg} alt="Home Page" className="explain-img" />
            </picture>
          </div>

          <span className="explain__subtitle">Birthday Feature</span>
          <p>
            Another feature we decided to include was the birthday feature that allows users to know when it is a family member's birthday. 
            We included a one-time pop-up that shows when a user opens the app and a birthday cake icon that is displayed on the member throughout their birthday. 
            We also included a feature that allows users to pin specific family members for easier accessibility.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={birthdayFeatureMobileImg} />
              <img src={birthdayFeatureImg} alt="Birthday Feature" className="explain-img" />
            </picture>
          </div>

          <span className="explain__subtitle">Send Message</span>
          <p>
            The user can input their message either by their keyboard or through the speech-to-text feature, where they can use the microphone icon to input their voice, which was included for seniors who might have a harder time typing their message.
            Finally, once the user hits send, a message sent page appears with confirmation of when it will be sent to the family member.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={sendMessageMobileImg} />
              <img src={sendMessageImg} alt="Send Message" className="explain-img" />
            </picture>
          </div>

          <span className="explain__subtitle">Message Page</span>
          <p>
            Apart from the previously introduced send message feature, the message page allows users to view previous conversation records or continue the conversation directly. 
            Users can select to pin the chat window that they chat with the most, and they can also check reserved messages that have yet to be sent. 
            Additional functions on this page include group chat, group call, and group video call.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={messagePageMobileImg} />
              <img src={messagePageImg} alt="Message Page" className="explain-img" />
            </picture>
          </div>

          <span className="explain__subtitle">Memory Page</span>
          <p>
            The third page, memory, is designed to allow families to share their week with family members based on photos. 
            Photos of family members are collected by day of the week and shown on the feed, allowing families to communicate through likes and comments. 
            The third screen is an upload screen, with the days of the week indicated based on the access date, configured as an intuitive and efficient interface.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={memoryPageMobileImg} />
              <img src={memoryPageImg} alt="Memory Page" className="explain-img" />
            </picture>
          </div>

          <span className="explain__subtitle">Profile Page</span>
          <p>
            The last page is a profile page where users can manage their profile and notification or language preferences. 
            In the Edit profile section, users can modify or update personal information such as their profile picture, name, and area of residence.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={profilePageMobileImg} />
              <img src={profilePageImg} alt="Profile Page" className="explain-img" />
            </picture>
          </div>

          {/* User Study Plan */}
          <h3 className="explain__title">User Study Plan</h3>
          <p>
            Our primary purpose of the usability testing was to validate and refine user performance of ROOT’s application based on the experiences of users who already communicate with their families abroad. 
            Our team chose to use the think-aloud and user interview feedback method for our user study. 
            We participated in this study with six participants who have families living abroad. 
            Martin and Marie, who contacted their families in Korea from Vancouver, conducted a user study in-person.
            Kim and Jeon, who reached their families in Vancouver from Korea, and Janice and Zihan, who contacted their families in China from Canada, participated via video call.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={userStudyPlanMobileImg} />
              <img src={userStudyPlanImg} alt="User Study Plan" className="explain-img" />
            </picture>
          </div>

          {/* Procedure */}
          <h3 className="explain__title">Procedure</h3>
          <p>
            Our user study is divided into four procedures: 
            First, an introduction, where participants were given brief information about what and for whom our ROOT application was designed.
            Second, a pre-test interview, where participants were asked about how they currently connect with their families abroad.
            Third, testing tasks, where participants received either a link or a device with our Protopie prototype and were asked various tasks to complete based on our usability task list.
            Lastly, a post-test interview, where participants were asked questions to gather their overall feedback about our application.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={twoProcedureMobileImg} />
              <img src={twoProcedureImg} alt="Procedure" className="explain-img" />
            </picture>
          </div>

          {/* Design Issues */}
          <h3 className="explain__title">Design Issues</h3>
          <p>
            The first design issue we found from the user study was that the message page lacked clear indications for users to create new family group chats. 
            Some users pointed out that they were confused by the different design layouts of group chats and single member chats, as it wasn’t consistent.
            The second issue was that while many users had an overall straightforward process for sending a scheduled message, we found that they weren’t utilizing the microphone or the customize icon for selecting time due to poor visibility and unclear usage indications.
            The third issue was the calendar icon on each user’s week; the icon didn’t have a specific purpose, leading to confusion about its interactivity.
            The last issue was that the sharing memory page lacked clear indicators for the various steps required to successfully upload images to their week.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={designIssuesMobileImg} />
              <img src={designIssuesImg} alt="Design Issues" className="explain-img" />
            </picture>
          </div>

          {/* Improvement */}
          <h3 className="explain__title">Improvement</h3>
          <span className="explain__subtitle">Improvement 1</span>
          <p>
            To improve our first issue regarding the memory page, we plan to redesign the chat layouts to maintain consistency and clearly indicate the option to create new group chats at the top of the screen, allowing users to select members and create group chat names accordingly.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={improvement1MobileImg} />
              <img src={improvement1Img} alt="Improvement 1" className="explain-img" />
            </picture>
          </div>

          <span className="explain__subtitle">Improvement 2</span>
          <p>
            To enhance the interaction for sending messages, we want to redesign it into a step-by-step learning path for our users. 
            It will also display the current local time of the member they want to send a message to, allowing the user to choose the scheduled message time. 
            We will add an option for the user to "customize time," making it easier for them to choose the right time.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={improvement2MobileImg} />
              <img src={improvement2Img} alt="Improvement 2" className="explain-img" />
            </picture>
          </div>

          <span className="explain__subtitle">Improvement 3</span>
          <p>
            To improve our memory page, we plan to change the previous calendar icons to family members' profile images to make it easier to identify.
            We also want to include clear subheadings that instruct users on how to upload their videos or images.
          </p>
          <div className="img-box">
            <picture>
              <source media="(max-width: 768px)" srcSet={improvement3MobileImg} />
              <img src={improvement3Img} alt="Improvement 3" className="explain-img" />
            </picture>
          </div>

          {/* Observation */}
          <h3 className="explain__title">Our Observation</h3>
          <p>
            From testing our prototype over a video connection, we observed that it was harder to communicate our prototype to our participants than during in-person studies. 
            Especially with seniors, it was more challenging to show and explain the interface over video calls compared to our younger participants, who were familiar with applications like Discord and screen sharing.
          </p>
          <div className="video-box">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/MSYDwU6HxOA?&autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Promo Video"
            ></iframe>
          </div>
        </section>
      </Container>
    </HelmetProvider>
  );
};

export default RootProject;
