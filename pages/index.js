import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuth } from "../context/auth";

export default function Home() {
  // const { user, login, logout, loginWithGithub } = useAuth();

  const users = [
    {
      title: "Fundamentals of yoga",
      image_url: "/images/instructor-background.jpeg",
      description:
        "Learn the fundamentals of yoga with a certified yoga instructor. This is Carol. She has been instructing yoga classes for 4 years with over 500 hours of experience.",
      zoom_link:
        "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09",
      date: "",
      start_time: "",
      end_time: "",
    },
    {
      title: "Fundamentals of yoga",
      image_url: "/images/instructor-background.jpeg",
      description:
        "Learn the fundamentals of yoga with a certified yoga instructor. This is Carol. She has been instructing yoga classes for 4 years with over 500 hours of experience.",
      zoom_link:
        "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09",
      date: "",
      start_time: "",
      end_time: "",
    },
    {
      title: "Fundamentals of yoga",
      image_url: "/images/instructor-background.jpeg",
      description:
        "Learn the fundamentals of yoga with a certified yoga instructor. This is Carol. She has been instructing yoga classes for 4 years with over 500 hours of experience.",
      zoom_link:
        "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09",
      date: "",
      start_time: "",
      end_time: "",
    },
    {
      title: "Fundamentals of yoga",
      image_url: "/images/instructor-background.jpeg",
      description:
        "Learn the fundamentals of yoga with a certified yoga instructor. This is Carol. She has been instructing yoga classes for 4 years with over 500 hours of experience.",
      zoom_link:
        "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09",
      date: "",
      start_time: "",
      end_time: "",
    },
    {
      title: "Fundamentals of yoga",
      image_url: "/images/instructor-background.jpeg",
      description:
        "Learn the fundamentals of yoga with a certified yoga instructor. This is Carol. She has been instructing yoga classes for 4 years with over 500 hours of experience.",
      zoom_link:
        "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09",
      date: "",
      start_time: "",
      end_time: "",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>WuWuMelon</title>
          <meta nameName="description" content="Generated by create next app" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <main className={styles.main}>
          {/* <div> {JSON.stringify(user, null, 2)}</div> */}
          <div className={styles.grid}>
            {users.map((users) => (
              <div className="card">
                <div className="card-image">
                  <Image
                    priority
                    src={users.image_url}
                    width="100%"
                    height="70%"
                    layout="responsive"
                    alt=""
                  />
                  <span className="card-title">{users.title}</span>
                </div>
                <div className="card-content">
                  <p>{users.description}</p>
                </div>
                <div className="card-action">
                  <a
                    className="waves-effect waves-light btn #69f0ae green accent-2"
                    href={users.zoom_link}
                  >
                    View Class
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
