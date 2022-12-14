import "./ProjectPage.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProjectPage({ projectID }) {



  let project = projectID //TODO projectID to object

  let navigate = useNavigate();

  useEffect(() => {
    document.title = "Crowdfund • " + project?.title || "Project Title";
  }, [])

  return (
    <div className="ProjectPage">
      <button
        className="BackButton"
        onClick={() => navigate(-1)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.2949 19.7152C10.6883 20.1028 11.3215 20.0981 11.7091 19.7047C12.0967 19.3113 12.092 18.6782 11.6986 18.2906L6.32827 12.9992H19.9995C20.5517 12.9992 20.9995 12.5514 20.9995 11.9992C20.9995 11.4469 20.5517 10.9992 19.9995 10.9992H6.33488L11.6986 5.71428C12.092 5.32666 12.0967 4.69351 11.7091 4.3001C11.3215 3.9067 10.6883 3.90201 10.2949 4.28963L3.37073 11.112C2.87382 11.6016 2.87382 12.4032 3.37073 12.8928L10.2949 19.7152Z" fill="currentColor"/>
        </svg>
        Back
      </button>
      <div className="Section1">
        <div className="SubSection1">
          <p className="Title">{project?.title || "Project Title"}</p>
          <p className="Details">{project?.details || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta est eu viverra tempor. Pellentesque dapibus, lectus at aliquet sagittis, massa nisi hendrerit nunc, nec euismod nibh urna eget libero."}</p>
          <button className="UserProfile">
            <div className="ProfilePicture">

            </div>
            <p className="Username">@{project?.user || "Username"}</p>
          </button>
          <div className="Divider"></div>
          <div className="StatsContainer">
            <div className="Stat">
              <p className="Title">Backers</p>
              <p className="Content">{project?.backers || "4000"}</p>
            </div>
            <div className="Stat">
              <p className="Title">Days left</p>
              <p className="Content">{project?.daysRemaining || "5"}</p>
            </div>
          </div>
          <div className="Divider"></div>
          <p className="Percentage">{project?.percentage || "69"}%<p>{project?.amountAsked || "0.1"} of {project?.amountGot || "0.01"} ETH</p></p>
          <div className="ProgressBarContainer">
            <div className="ProgressBar" style={{width: `${project?.percentage || "69"}%`}}></div>
          </div>
          <div className="ButtonContainer">
            <button className="SupportButton">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3879 4.07369C15.0481 2.73586 16.9559 2.73585 17.6161 4.07369L20.6583 10.2378L27.4608 11.2263C28.9372 11.4408 29.5267 13.2551 28.4584 14.2965L23.5361 19.0946L24.6981 25.8696C24.9503 27.34 23.4069 28.4614 22.0863 27.7671L16.002 24.5684L9.91768 27.7671C8.59715 28.4614 7.05377 27.34 7.30596 25.8696L8.46797 19.0946L3.54564 14.2965C2.47731 13.2551 3.06682 11.4408 4.54322 11.2263L11.3457 10.2378L14.3879 4.07369ZM16.002 5.32222L13.0927 11.2172C12.8305 11.7485 12.3236 12.1167 11.7374 12.2019L5.23185 13.1472L9.93929 17.7358C10.3635 18.1493 10.5571 18.7451 10.457 19.3291L9.34569 25.8083L15.1644 22.7492C15.6888 22.4735 16.3152 22.4735 16.8396 22.7492L22.6583 25.8083L21.5471 19.3291C21.4469 18.7451 21.6405 18.1493 22.0647 17.7358L26.7722 13.1472L20.2667 12.2019C19.6804 12.1167 19.1736 11.7485 18.9114 11.2172L16.002 5.32222Z" fill="currentColor"/>
                <path d="M25.2929 9.57747C24.9024 9.18694 24.9024 8.55378 25.2929 8.16325L28.2929 5.16325C28.6834 4.77273 29.3166 4.77273 29.7071 5.16325C30.0976 5.55378 30.0976 6.18694 29.7071 6.57747L26.7071 9.57747C26.3166 9.96799 25.6834 9.96799 25.2929 9.57747Z" fill="currentColor"/>
                <path d="M2.29289 23.1633C1.90237 23.5538 1.90237 24.1869 2.29289 24.5775C2.68342 24.968 3.31658 24.968 3.70711 24.5775L6.70711 21.5775C7.09763 21.1869 7.09763 20.5538 6.70711 20.1633C6.31658 19.7727 5.68342 19.7727 5.29289 20.1633L2.29289 23.1633Z" fill="currentColor"/>
                <path d="M2.29299 5.16325C2.68351 4.77273 3.31668 4.77273 3.7072 5.16325L6.7072 8.16325C7.09772 8.55378 7.09772 9.18694 6.7072 9.57747C6.31668 9.96799 5.68351 9.96799 5.29299 9.57747L2.29299 6.57747C1.90246 6.18694 1.90246 5.55378 2.29299 5.16325Z" fill="currentColor"/>
                <path d="M26.7072 20.1633C26.3167 19.7727 25.6835 19.7727 25.293 20.1633C24.9025 20.5538 24.9025 21.1869 25.293 21.5775L28.293 24.5775C28.6835 24.968 29.3167 24.968 29.7072 24.5775C30.0977 24.1869 30.0977 23.5538 29.7072 23.1633L26.7072 20.1633Z" fill="currentColor"/>
              </svg>
              Support
            </button>
            <button className="Button">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16C25.866 16 29 12.866 29 9C29 5.13401 25.866 2 22 2C18.134 2 15 5.13401 15 9C15 10.0058 15.2121 10.962 15.5941 11.8264L12.7649 14.0269C11.7563 12.7899 10.2204 12 8.5 12C5.46243 12 3 14.4624 3 17.5C3 20.5376 5.46243 23 8.5 23C10.0741 23 11.4938 22.3387 12.4963 21.2788L17.2711 23.958C17.0957 24.439 17 24.9583 17 25.5C17 27.9853 19.0147 30 21.5 30C23.9853 30 26 27.9853 26 25.5C26 23.0147 23.9853 21 21.5 21C20.2789 21 19.1714 21.4864 18.3606 22.276L13.5861 19.597C13.8529 18.9507 14 18.2425 14 17.5C14 16.9091 13.9068 16.34 13.7344 15.8065L16.6625 13.5291C17.9465 15.0408 19.8612 16 22 16ZM22 14C19.2386 14 17 11.7614 17 9C17 6.23858 19.2386 4 22 4C24.7614 4 27 6.23858 27 9C27 11.7614 24.7614 14 22 14ZM8.5 21C6.567 21 5 19.433 5 17.5C5 15.567 6.567 14 8.5 14C10.433 14 12 15.567 12 17.5C12 19.433 10.433 21 8.5 21ZM24 25.5C24 26.8807 22.8807 28 21.5 28C20.1193 28 19 26.8807 19 25.5C19 24.1193 20.1193 23 21.5 23C22.8807 23 24 24.1193 24 25.5Z" fill="currentColor"/>
              </svg>
            </button>
            <button className="Button">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7.2C6 4.8804 7.8804 3 10.2 3H21.8C24.1196 3 26 4.88041 26 7.2V28C26 28.3755 25.7896 28.7194 25.4553 28.8904C25.1209 29.0613 24.7189 29.0305 24.4145 28.8107L16 22.7335L7.58549 28.8107C7.28106 29.0305 6.87911 29.0613 6.54475 28.8904C6.21039 28.7194 6 28.3755 6 28V7.2ZM10.2 5C8.98497 5 8 5.98497 8 7.2V26.0442L15.4145 20.6893C15.764 20.4369 16.2359 20.4369 16.5854 20.6893L24 26.0442V7.2C24 5.98497 23.015 5 21.8 5H10.2Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
        <img className="Image" src="./placeholderImages/1.jpg" alt="" />
      </div>
      <div className="TemporarySpace"></div>
    </div>
  );
}

export default ProjectPage;
