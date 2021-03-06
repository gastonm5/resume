import { Pill } from './Pill'

export const DegreeSection = ({ degree }) => {
    const { degreeTitle, from, to, university, location } = degree

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
                <div className="flex flex-col sm:items-end sm:flex-row border-b-1 border-white">
                    <span className="font-exo font-bold text-2xl text-accent">
                        {university}
                    </span>
                    <div className="sm:hidden justify-between">
                        <span className="font-exo text-accent">{from}</span> -{' '}
                        <span className="font-exo text-accent">{to}</span>
                    </div>
                    <span className="hidden sm:inline mx-2 sm:pb-1">-</span>
                    <span className="font-exo font-light text-sm sm:pb-1">
                        <i className="fas fa-map-pin mr-1"></i>
                        {location}
                    </span>
                </div>

                <p className="font-exo font-medium text-xl mt-1 sm:mt-2">
                    {degreeTitle}
                </p>
            </div>
        </div>
    )
}
