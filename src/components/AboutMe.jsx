export default function AboutMe(){
    return(
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between text-black dark:text-gray-100">
            <img src="/my-illustration.png" alt="illustration" className="mt-2 md:mt-0 md:w-80 rounded-xl" />
            <div className="flex flex-col gap-1 md:gap-3 md:w-[67%]">
                <h3 className="text-2xl md:text-3xl font-bold text-center">About me</h3>
                <p className="text-sm md:text-lg">I’m a self-taught Web Developer with a strong focus on Frontend development. I’ve studied Web Development, Python and SQL through Udemy. 
                    I’m passionate about creating beautiful, responsive, and user-friendly web interfaces. In addition to web development, I have a personal interest in artificial intelligence and plan to study it further in the future.
                    Open to internship, junior frontend developer roles, and remote opportunities.
                </p>
            </div>
        </div>
    )
}