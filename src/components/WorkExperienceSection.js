import { Pill } from './Pill'

export const WorkExperienceSection = ({ experience }) => {
    const {
        jobTitle,
        from,
        to,
        description,
        company,
        techStack,
        location
    } = experience
    const { name, link } = company

    return (
        <div className="flex flex-row my-8">
            <div className="hidden sm:flex flex-col items-center my-1">
                <Pill />
                <div className="flex-grow w-0.5 bg-white my-1"></div>
                <Pill />
            </div>
            <div className="hidden sm:flex flex-col justify-between ml-2 mr-8 my-1">
                <span className="font-exo text-accent">{to}</span>
                <span className="font-exo text-accent">{from}</span>
            </div>
            <div>
                <div className="flex justify-between border-b-1 border-white">
                    <a href={`https://www.${link}`} target="_blank">
                        <span className="font-exo font-bold text-2xl text-accent">
                            {name}
                        </span>
                        <div className="sm:hidden flex-col justify-between">
                            <span className="font-exo text-accent">{from}</span>{' '}
                            - <span className="font-exo text-accent">{to}</span>
                        </div>
                        <span className="hidden sm:inline mx-2">-</span>
                        <span className="hidden sm:inline font-exo font-light text-sm">
                            <i className="fas fa-map-pin mr-1"></i>
                            {location}
                        </span>
                    </a>
                    <a href={`https://www.${link}`} target="_blank">
                        <span className="font-exo font-medium text-xl">
                            {link}
                        </span>
                    </a>
                </div>

                <p className="font-exo font-medium text-xl">{jobTitle}</p>
                <p
                    className="font-exo font-regular text-base mt-4"
                    style={{ whiteSpace: 'pre-line' }}
                >
                    {description}
                </p>
                <div className="font-exo font-regular text-base mt-4">
                    <span className="text-accent font-bold">Tech Stack</span>:{' '}
                    <span>{techStack.join(', ')}.</span>
                </div>
            </div>
        </div>
    )
}
