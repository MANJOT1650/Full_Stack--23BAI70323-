import React, { createContext, useState, useContext, useEffect } from 'react';

const CourseContext = createContext();

const initialCourses = [
    {
        id: 1,
        name: "Introduction to Computer Science",
        duration: "12 Weeks",
        description: "Learn the basics of programming, algorithms and data structures.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
        instructor: "Dr. Arjun Mehta"
    },
    {
        id: 2,
        name: "Web Development Bootcamp",
        duration: "16 Weeks",
        description: "Master HTML, CSS, JavaScript, and React to build modern websites.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
        instructor: "Prof. Kavita Rao"
    },
    {
        id: 3,
        name: "Data Science Fundamentals",
        duration: "10 Weeks",
        description: "Introduction to data analysis, visualization, and python libraries.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
        instructor: "Dr. Suresh Reddy"
    },
    {
        id: 4,
        name: "Artificial Intelligence",
        duration: "14 Weeks",
        description: "Explore the world of AI, machine learning, and neural networks.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&q=80",
        instructor: "Prof. Meera Kapoor"
    },
    {
        id: 5,
        name: "Digital Marketing",
        duration: "8 Weeks",
        description: "Learn SEO, content marketing, and social media strategies.",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&q=80",
        instructor: "Rajesh Khanna"
    },
    {
        id: 6,
        name: "Graphic Design Masterclass",
        duration: "12 Weeks",
        description: "Create stunning visuals using Photoshop, Illustrator, and more.",
        image: "https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2022/05/graphic-design-tools.png",
        instructor: "Aishwarya Singh"
    }
];

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState(initialCourses);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    // Load enrolled courses from local storage on mount (optional for "UI only" but good UX)
    // For this strict UI-only task, we can skip persistence or just use state. 
    // User asked for "Data is not persistent after page refresh" in Limitations section.
    // So I will NOT implement localStorage persistence to adhere strictly to "Limitations".

    const enrollCourse = (course) => {
        if (!enrolledCourses.find(c => c.id === course.id)) {
            setEnrolledCourses([...enrolledCourses, course]);
        }
    };

    const deEnrollCourse = (courseId) => {
        setEnrolledCourses(enrolledCourses.filter(c => c.id !== courseId));
    };

    const isEnrolled = (courseId) => {
        return enrolledCourses.some(c => c.id === courseId);
    }

    return (
        <CourseContext.Provider value={{ courses, enrolledCourses, enrollCourse, deEnrollCourse, isEnrolled }}>
            {children}
        </CourseContext.Provider>
    );
};

export const useCourse = () => {
    return useContext(CourseContext);
};
