export default function AboutMe(){
    return(
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between text-black dark:text-gray-100">
            <img src="/my-illustration.png" alt="illustration" className="mt-2 lg:mt-0 md:w-80 rounded-xl" />
            <div className="flex flex-col gap-1 lg:gap-3 lg:w-[67%]">
                <h3 className="text-2xl md:text-3xl font-bold text-center">About me</h3>
                <p className="text-sm md:text-lg">
                    I’m a self-taught Web Developer with a strong focus on Frontend development. I’ve studied Web Development, Python, and 
                    SQL through Udemy. I’m passionate about creating beautiful, responsive, and user-friendly web interfaces. In addition 
                    to web development, I have a strong personal interest in artificial intelligence and am currently studying it. I’m 
                    open to internship positions, junior frontend developer roles, and remote opportunities.
                </p>
            </div>
        </div>
    )
}
