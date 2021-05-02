import './App.css'
import { ContactLine } from './components/ContactLine'
import { DegreeSection } from './components/DegreeSection'
import { Title } from './components/Title'
import { WorkExperienceSection } from './components/WorkExperienceSection'
import profilePoc from './profile_pic.jpg'
import profile from './profile.json'

function App() {
    return (
        <div className="w-screen bg-gray-300">
            <div className="flex flex-col sm:h-screen sm:flex-row sm:max-w-6xl sm:m-auto">
                <div
                    className="flex flex-col justify-between md:w-1/3 text-white font-exo p-4"
                    style={{ backgroundColor: '#132227' }}
                >
                    <div>
                        <div className="flex flex-col items-center">
                            <img
                                className="rounded-full w-1/4 sm:w-40 sm:h-40"
                                alt="profile_pic"
                                src={profilePoc}
                            />
                            <p className="text-2xl font-semibold mt-4 text-title">
                                {profile.name}
                            </p>
                            <p className="text-xl">{profile.jobTitle}</p>
                            <p>
                                {profile.location}{' '}
                                <i className="fas fa-map-pin text-title"></i>
                            </p>
                        </div>

                        <Title text="ABOUT ME" />
                        <p className="text-md pt-4">
                            I'm always trying to improve my skills and learn
                            about new technologies &#128512;
                            <br></br>
                            Currently I'm learning deeply about <b>
                                SwiftUI
                            </b>{' '}
                            and <b>watchOS</b>.<br></br>
                            Besides my current job, I work on side-projects with
                            technologies like NodeJS, React Native and ReactJS.
                        </p>
                    </div>

                    <div>
                        <Title text="CONTACT" />
                        {profile.contacts.map((contact, index) => (
                            <ContactLine
                                key={`contact_${index}`}
                                {...contact}
                            />
                        ))}
                    </div>
                </div>

                <div
                    className="text-black px-4 sm:px-12 overflow-y-scroll w-screen text-white pt-4"
                    style={{ backgroundColor: '#2c4b57' }}
                >
                    <div className="border-solid border-b-2 border-light-blue-500">
                        <p className="font-exo text-3xl text-title font-bold">
                            WORK EXPERIENCE
                        </p>
                    </div>

                    <div className="flex flex-col" className="mt-8">
                        {profile.workExperiences.map((experience, index) => (
                            <WorkExperienceSection
                                key={`experience_${index}`}
                                experience={experience}
                            />
                        ))}
                    </div>

                    <div className="border-solid border-b-2 border-light-blue-500">
                        <p className="font-exo text-3xl text-title">
                            EDUCATION
                        </p>
                    </div>

                    <div className="flex flex-col" className="mt-8">
                        {profile.education.map((degree, index) => (
                            <DegreeSection
                                key={`degree${index}`}
                                degree={degree}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
