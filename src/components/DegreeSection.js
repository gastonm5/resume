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
                <span className="font-exo text-title">{to}</span>
                <span className="font-exo text-title">{from}</span>
            </div>
            <div>
                <div className="flex border-b-1 border-white">
                    <span className="font-exo font-bold text-2xl text-title">
                        {university}
                    </span>
                </div>

                <p className="font-exo font-medium text-xl mt-2">
                    {degreeTitle}
                </p>
            </div>
        </div>
    )
}
