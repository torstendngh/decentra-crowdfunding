import "./ProjectPage.css"

function ProjectPage({}) {

  return (
    <div className="ProjectPage">
      <button className="BackButton">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.2949 19.7152C10.6883 20.1028 11.3215 20.0981 11.7091 19.7047C12.0967 19.3113 12.092 18.6782 11.6986 18.2906L6.32827 12.9992H19.9995C20.5517 12.9992 20.9995 12.5514 20.9995 11.9992C20.9995 11.4469 20.5517 10.9992 19.9995 10.9992H6.33488L11.6986 5.71428C12.092 5.32666 12.0967 4.69351 11.7091 4.3001C11.3215 3.9067 10.6883 3.90201 10.2949 4.28963L3.37073 11.112C2.87382 11.6016 2.87382 12.4032 3.37073 12.8928L10.2949 19.7152Z" fill="currentColor"/>
        </svg>
        Back
      </button>
      <div className="Section1">
        <div className="SubSection1">
          <p>Title of Crowdfund</p>
          <p>Details of Crowdfund</p>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default ProjectPage;