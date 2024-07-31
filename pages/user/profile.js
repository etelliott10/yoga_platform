import Image from "next/image";
// import profile from "../../styles/Profile.module.css";
import styles from "../../styles/Profile.module.css";

const Profile = () => {
  const contents = [
    {
      title: "adfosdafj",
      image_url: "/images/instructor-background.jpeg",
      description:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      zoom_link:
        "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09",
    },
    {
      title: "adfosdafj",
      image_url: "/images/instructor-background.jpeg",
      description:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      zoom_link:
        "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09",
    },
    {
      title: "adfosdafj",
      image_url: "/images/instructor-background.jpeg",
      description:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      zoom_link:
        "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09",
    },
    {
      title: "adfosdafj",
      image_url: "/images/instructor-background.jpeg",
      description:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      zoom_link:
        "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09",
    },
    {
      title: "adfosdafj",
      image_url: "/images/instructor-background.jpeg",
      description:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      zoom_link:
        "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09",
    },
  ];

  return (
    <>
      {/* <div className=""></div> */}
      <div className="row">
        {contents.map((content) => (
          <div className="col s12 m3">
            <div className="card">
              <div className="card-image">
                <Image
                  priority
                  src={content.image_url}
                  width="100%"
                  height="70%"
                  layout="responsive"
                  alt=""
                />
                <span className="card-title">{content.title}</span>
              </div>
              <div className="card-content">
                <p>{content.description}</p>
              </div>
              <div className="card-action">
                <a
                  className="waves-effect waves-light btn #69f0ae green accent-2"
                  href={content.zoom_link}
                >
                  View Class
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
