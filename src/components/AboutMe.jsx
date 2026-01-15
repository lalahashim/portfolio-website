export default function AboutMe(){
    return(
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between text-black dark:text-gray-100">
            <img src="/my-illustration.png" alt="illustration" className="mt-2 lg:mt-0 md:w-80 rounded-xl" />
            <div className="flex flex-col gap-1 lg:gap-3 lg:w-[67%]">
                <h3 className="text-2xl md:text-3xl font-bold text-center">About me</h3>
                <p className="text-sm md:text-lg">
                    I’m a self-taught developer with a background in web development and a growing focus on 
                    artificial intelligence. I’ve studied Web Development, Python, and SQL through Udemy and have 
                    built several frontend projects that strengthened my understanding of clean code, user experience, 
                    and responsive design. <br />
                    Currently, I’m focusing on artificial intelligence and machine learning through structured courses 
                    and independent study, learning how data-driven systems work and how intelligent solutions can be 
                    integrated into real applications. I enjoy working with code, data, and problem-solving, and I’m 
                    motivated to grow in the field of AI. <br />
                    I’m open to internship and junior-level opportunities in the field of artificial intelligence, 
                    including remote roles, where I can continue learning and applying my skills in real-world 
                    projects.
                </p>
            </div>
        </div>
    )
}