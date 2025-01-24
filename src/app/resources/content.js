import { InlineCode } from "@/once-ui/components";
import { display } from "./config";

const person = {
    firstName: 'Abhinav',
    lastName:  'Singh',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/India',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'httphttps://github.com/aviiix96',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/abhinav-singh-522ab7281/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:abhinavsci131@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Developer and Innovator</>,
    subline: <>Abhinav Singh is a second-year Computer Science student at SRM IST NCR Campus with a growing passion for AI and Machine Learning. Proficient in Java, Python, and web development, he combines technical skills with a problem-solving approach to tackle challenges and build innovative solutions.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Abhinav Singh is a second-year Computer Science student at SRM IST NCR Campus with a growing passion for AI and Machine Learning. Proficient in Java, Python, and web development, he combines technical skills with a problem-solving approach to tackle challenges and build innovative solutions.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Apni Maati Vastram',
                timeframe: '2023 - Present',
                role: 'Web Development Intern and Meta marketing',
                achievements: [
                    <>Built and maintained an e-commerce website, enhancing user experience and driving a 35% increase in online sales.</>,
                    <>Developed targeted marketing campaigns on social media platforms, leading to a 20% boost in customer engagement and brand visibility.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/apnimaati.jpg',
                        alt: 'My Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/apu.png',
                        alt: 'My Project',
                        width: 9,
                        height: 9
                    }
                ]
            },
            
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'SRM Institute of Science and Technology NCR Campus',
                description: <>Studies Computer Science Engineering.</>,
            },
            
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Java',
                description: <>Proficient in Java programming with expertise in OOP principles, data structures, algorithms, and developing efficient, scalable, and robust applications.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/skills/java.png',
                        alt: 'Project image',
                        width: 9,
                        height: 9
                    },
                ]
            },
            {
                title: 'Unix and Linux',
                description: <>Proficient in Java development on Unix/Linux environments, with expertise in shell scripting, process management, file handling, and system-level integration to build efficient and scalable applications</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/skills/Linux.jpeg',
                        alt: 'Project image',
                        width: 16,
                        height: 14
                    },
                ]
            },
            {
                title: 'Web Development',
                description: <>Skilled in web development, specializing in building efficient, scalable, and secure server-side applications with expertise in modern frameworks, RESTful APIs, real-time communication, and seamless database integration.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/skills/WEBdev.jpeg',
                        alt: 'Project image',
                        width: 16,
                        height: 10
                    },
                ]
            },
            {
                title: 'DBMS',
                description: <>Proficient in Java with expertise in database management, designing efficient schemas, and integrating relational databases like MySQL, PostgreSQL, and Oracle using JDBC and Hibernate for seamless data operations.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/skills/DBMS.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 11
                    },
                ]
            }
        ]
    }
}

const blog = {
    display: false,
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };