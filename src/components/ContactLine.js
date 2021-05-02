export const ContactLine = ({ description, link, icon }) => (
    <a href={link} className="flex flex-row items-center mt-2">
        <span className={`${icon} text-3xl`}></span>
        <span className="pl-2 text-md">{description}</span>
    </a>
)
