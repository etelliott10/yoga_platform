import Image from 'next/image'
import profile from "../../styles/Profile.module.css"
import styles from '../../styles/Profile.module.css'

const Profile = () => {

  const contents = [
    {
      title: "adfosdafj",
      image_url: "/images/instructor-background.jpeg",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      zoom_link: "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09"
    },
    {
      title: "adfosdafj",
      image_url: "/images/instructor-background.jpeg",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      zoom_link: "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09"
    },
    {
      title: "adfosdafj",
      image_url: "/images/instructor-background.jpeg",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      zoom_link: "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09"
    },
    {
      title: "adfosdafj",
      image_url: "/images/instructor-background.jpeg",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      zoom_link: "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09"
    },
    {
      title: "adfosdafj",
      image_url: "/images/instructor-background.jpeg",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      zoom_link: "https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09"
    }
  ]
  

    return (
        <>  
        <div class="row">
        {contents.map((content) => (
        <div class="col s12 m3">
            <div class="card">
              <div class="card-image">
              <Image 
              priority
              src={content.image_url}
              width="100%" 
              height="70%" 
              layout="responsive" 
              alt=""/>
                <span class="card-title">{content.title}</span>
              </div>
              <div class="card-content">
                <p>{content.description}</p>
              </div>
              <div class="card-action">
              <a className="waves-effect waves-light btn #69f0ae green accent-2" href={content.zoom_url}>View Class</a>  
              </div>
            </div>
          </div>
      ))}
          <div class="col s12 m3">
            <div class="card">
              <div class="card-image">
              <Image 
              priority
              src="/images/instructor-background.jpeg"
              width="100%" 
              height="70%" 
              layout="responsive" 
              alt=""/>
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
              <a className="waves-effect waves-light btn #69f0ae green accent-2" href="https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09">View Class</a>  
              </div>
            </div>
          </div>

          <div class="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="/images/instructor-background.jpeg"/>
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
                <a className="waves-effect waves-light btn #69f0ae green accent-2" href="https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09">View Class</a>  
              </div>
            </div>
          </div>
        </div>

        <main className={styles.main}>
        <div className={styles.grid}>
        
        {/* <div className={styles.card}>
          <div class="col s12 m3">
            <div class="card">
              <div class="card-image">
              <Image 
              priority
              src="/images/instructor-background.jpeg"
              width="100%" 
              height="70%" 
              layout="responsive" 
              alt=""/>
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>1 I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
                <a className="waves-effect waves-light btn #69f0ae green accent-2" href="https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09">View Class</a>  
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className={styles.card}>
          <div class="card">
              <div class="card-image">
              <Image 
              priority
              src="/images/instructor-background.jpeg"
              width="100%" 
              height="70%" 
              layout="responsive" 
              alt=""/>
                <span class="card-title">Card Title</span>
              </div>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
              </div>
          <div className="card-action">
            <a className="waves-effect waves-light btn #69f0ae green accent-2" href="https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09">View Class</a>  
          </div>
        </div> */}
        {/* <div className={styles.card}>
          <div className="card-image">
            <Image 
              priority
              src="/images/instructor-background.jpeg"
              width="100%" 
              height="70%" 
              layout="responsive" 
              alt=""/>
            <span className="card-title">Fundamentals of yoga</span>
          </div>
          <div className="card-content">
            <p>Learn the fundamentals of yoga with a certified yoga instructor. This is Carol. She has been instructing yoga classes for 4 years
                with over 500 hours of experience.</p>
          </div>
          <div className="card-action">
            <a className="waves-effect waves-light btn #69f0ae green accent-2" href="https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09">View Class</a>  
          </div>
        </div> */}
        
        
        
        </div>
      </main>
            {/* <div className={profile.profile_card}>
                <img src="/images/watermelon-logo.png" alt="" className={profile.profile_image}/>
                <p><h1>Naruto</h1><h2>Uzamaki</h2></p>
            </div>

            <div className={styles.grid}>
                    <div className="card ">
          <div className="card-image">
            <Image 
              priority
              src="/images/instructor-background.jpeg"
              width="100%" 
              height="70%" 
              layout="responsive" 
              alt=""/>
            <span className="card-title">Fundamentals of yoga</span>
          </div>
          <div className="card-content">
            <p>Learn the fundamentals of yoga with a certified yoga instructor. This is Carol. She has been instructing yoga classes for 4 years
                with over 500 hours of experience.</p>
          </div>
          <div className="card-action">
            <a className="waves-effect waves-light btn #69f0ae green accent-2" href="https://byu.zoom.us/j/99886472539?pwd=azl1VnpFMlF5UWkxUld5T3l5NXVBZz09">View Class</a>  
          </div>
        </div>
      </div> */}
        </>
    )
}

export default Profile;