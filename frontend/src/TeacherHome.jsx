import { Link } from "react-router-dom";
import { BookOpen, Calendar, FileText, Users, Award, BarChart } from "lucide-react"
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TeacherHome({ username, onLogout }) {

    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const ready = useRef(null);
    const trust = useRef(null);

    const tl = gsap.timeline({
        delay: 1,
    });

    useGSAP(() => {

        tl.from(leftColRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
        });

        tl.from(rightColRef.current, {
            x: 100,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
        }, '-=0.4');

        tl.from(".features", {
            scrollTrigger: {
                scroller: "body",
                trigger: ".featuresSection",
                start: "top 45%",
                end: "top 0%",
                //markers: true,
                scrub: true,
            },
            y: 32,
            opacity: 0,
            duration: 3.5,
            ease: 'power.in',
            stagger: 0.7,
            toggleActions: "play reverse play reverse"
        });

        tl.from(ready.current, {
            scrollTrigger: {
                scroller: "body",
                trigger: ready.current,
                start: "top 45%",
                end: "top 0%",
                //markers: true,
                scrub: true,
            },
            y: 32,
            opacity: 0,
            duration: 3.5,
            ease: 'power.in',
            stagger: 0.7,
            toggleActions: "play reverse play reverse"
        })

        tl.from(trust.current, {
            scrollTrigger: {
                scroller: "body",
                trigger: trust.current,
                start: "top 44%",
                end: "top 0%",
                scrub: true,
                ease: 'power.in',
            },
            y: 32,
            opacity: 0,
            duration: 1,
            ease: 'power.in',
            toggleActions: "play reverse play reverse"
        })

    }, []);

    console.log(username);
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8 max-w-7xl">


                <main>
                    <section className="relative overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="z-10" ref={leftColRef}>
                                <p className="text-gray-600 mb-2">Teacher portal</p>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                                    Empower
                                    <br />
                                    your teaching
                                    <br />
                                    with digital tools.
                                </h1>
                                <div className="flex flex-wrap gap-4">
                                    <button className="rounded-full px-8 py-6 bg-black text-white hover:bg-gray-800 transition-colors">
                                        Get started
                                    </button>
                                    <button className="rounded-full px-8 py-6 border border-black text-black hover:bg-gray-100 transition-colors">
                                        Learn more
                                    </button>
                                </div>
                            </div>

                            <div className="relative" ref={rightColRef}>
                                {/* Circular text */}
                                <div className="absolute w-full h-full flex items-center justify-center">
                                    <div className="w-[450px] h-[450px] animate-[spin_20s_linear_infinite]">
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <path id="textPath" d="M 20,50 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
                                            <text className="text-[3px] uppercase tracking-widest fill-gray-400">
                                                <textPath href="#textPath">
                                                    • Upload Notes • E-Calendar • Student Progress • Assignments • Grading • Analytics • Upload
                                                    Notes • E-Calendar • Student Progress • Assignments • Grading • Analytics
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                </div>


                                <div className="relative z-10 ml-auto max-w-md">
                                    <div className="absolute -z-10 right-0 bottom-0 w-[400px] h-[400px] bg-orange-400 rounded-full"></div>
                                    <img
                                        src="/placeholder.svg?height=600&width=500"
                                        alt="Teacher image using digital tools"
                                        width={500}
                                        height={600}
                                        className="relative z-10 mx-auto"
                                    />


                                    <div className="absolute top-20 right-0 bg-white rounded-xl shadow-lg p-4 z-20">
                                        <div className="text-sm text-gray-500">Student Engagement</div>
                                        <div className="flex items-end h-16 gap-1 mt-2">
                                            <div className="w-4 bg-orange-400 h-10 rounded-sm"></div>
                                            <div className="w-4 bg-orange-400 h-14 rounded-sm"></div>
                                            <div className="w-4 bg-orange-400 h-12 rounded-sm"></div>
                                            <div className="w-4 bg-orange-400 h-8 rounded-sm"></div>
                                            <div className="w-4 bg-orange-400 h-11 rounded-sm"></div>
                                            <div className="w-4 bg-orange-400 h-9 rounded-sm"></div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-20 right-10 bg-white rounded-xl shadow-lg p-4 z-20">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-orange-100 p-2 rounded-full">
                                                <FileText className="h-6 w-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-2xl">250+</p>
                                                <p className="text-sm text-gray-500">Resources Shared</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="absolute bottom-0 left-0 bg-black text-white p-6 rounded-tr-3xl z-20">
                                    <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center mb-3">
                                        <span className="font-bold">2+</span>
                                    </div>
                                    <p className="font-medium">Teaching Tools</p>
                                </div>
                            </div>
                        </div>


                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-orange-400 -z-20"></div>
                    </section>

                    <section className="py-24 featuresSection">
                        <div className="text-center mb-16 features">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Streamline Your Teaching Process</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Our digital tools help you focus on what matters most - educating your students.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                            <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow features">
                                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <FileText className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Upload PDF Notes</h3>
                                <p className="text-gray-600 mb-4">
                                    Easily upload and organize lecture notes, study materials, and resources for your students to access
                                    anytime.
                                </p>
                                <Link href="#" className="text-black font-medium flex items-center">
                                    Learn more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>


                            <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow features">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Calendar className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">E-Calendar</h3>
                                <p className="text-gray-600 mb-4">
                                    Schedule classes, exams, and important events. Keep students informed with automatic notifications.
                                </p>
                                <Link href="#" className="text-black font-medium flex items-center">
                                    Learn more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>



                            <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow features">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <BookOpen className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Assignment Management</h3>
                                <p className="text-gray-600 mb-4">
                                    Create, distribute, and grade assignments digitally. Provide timely feedback to enhance learning
                                    outcomes.
                                </p>
                                <Link href="#" className="text-black font-medium flex items-center">
                                    Learn more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>


                        </div>
                    </section>
                    {/* <section className="py-16 bg-gray-50 rounded-3xl my-16 relative overflow-hidden">
                        <div className="absolute -z-10 right-0 top-0 w-[300px] h-[300px] bg-orange-400 rounded-full opacity-10"></div>
                        <div className="absolute -z-10 left-0 bottom-0 w-[200px] h-[200px] bg-purple-600 rounded-full opacity-10"></div>

                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Upload Notes in Seconds</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Our intuitive interface makes it easy to upload and organize your teaching materials.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-4">Upload Your PDF Notes</h3>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4 hover:border-orange-400 transition-colors cursor-pointer">
                                            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-500 mb-2">Drag and drop your PDF files here</p>
                                            <p className="text-gray-400 text-sm">or</p>
                                            <button className="mt-4 px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors">
                                                Browse Files
                                            </button>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center">
                                                    <FileText className="h-5 w-5 text-orange-500 mr-2" />
                                                    <span className="text-sm">Chapter_5_Notes.pdf</span>
                                                </div>
                                                <span className="text-xs text-gray-500">3.2 MB</span>
                                            </div>
                                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center">
                                                    <FileText className="h-5 w-5 text-orange-500 mr-2" />
                                                    <span className="text-sm">Midterm_Review.pdf</span>
                                                </div>
                                                <span className="text-xs text-gray-500">2.8 MB</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-4">File Details</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                    placeholder="Enter document title"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                                <textarea
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                    placeholder="Enter document description"
                                                    rows={3}
                                                ></textarea>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                                                    <option>Select subject</option>
                                                    <option>Mathematics</option>
                                                    <option>Science</option>
                                                    <option>History</option>
                                                    <option>Literature</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Visibility</label>
                                                <div className="flex gap-4">
                                                    <label className="flex items-center">
                                                        <input type="radio" name="visibility" className="mr-2" />
                                                        <span>All Students</span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input type="radio" name="visibility" className="mr-2" />
                                                        <span>Specific Classes</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                                                Upload Document
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}


                    {/* <section className="py-16 my-16 relative overflow-hidden">
                        <div className="absolute -z-10 left-0 top-0 w-[300px] h-[300px] bg-purple-600 rounded-full opacity-10"></div>
                        <div className="absolute -z-10 right-0 bottom-0 w-[200px] h-[200px] bg-orange-400 rounded-full opacity-10"></div>

                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Manage Your Schedule Efficiently</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    The E-Calendar helps you organize classes, exams, and important events in one place.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="flex-1">
                                        <div className="mb-4 flex justify-between items-center">
                                            <h3 className="text-xl font-bold">October 2023</h3>
                                            <div className="flex gap-2">
                                                <button className="p-2 rounded-full hover:bg-gray-100">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>
                                                <button className="p-2 rounded-full hover:bg-gray-100">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                            {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                                                <div key={i} className="text-sm font-medium text-gray-500 py-2">
                                                    {day}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-7 gap-1">
                                            {Array.from({ length: 35 }).map((_, i) => {
                                                const day = i - 6 // Offset to start from the correct day
                                                return (
                                                    <div
                                                        key={i}
                                                        className={`
                              h-12 flex items-center justify-center rounded-lg text-sm
                              ${day <= 0 || day > 31 ? "text-gray-300" : "hover:bg-gray-100 cursor-pointer"}
                              ${day === 15 ? "bg-orange-100 text-orange-600 font-medium" : ""}
                              ${day === 22 ? "bg-purple-100 text-purple-600 font-medium" : ""}
                              ${day === 10 ? "border border-orange-400" : ""}
                            `}
                                                    >
                                                        {day > 0 && day <= 31 ? day : ""}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-4">Add New Event</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                    placeholder="Enter event title"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                                    <input
                                                        type="date"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                                    <input
                                                        type="time"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                                                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                                                    <option>Select event type</option>
                                                    <option>Class</option>
                                                    <option>Exam</option>
                                                    <option>Assignment Due</option>
                                                    <option>Meeting</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                                <textarea
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                    placeholder="Enter event description"
                                                    rows={3}
                                                ></textarea>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Notify Students</label>
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-2" />
                                                    <span>Send notification to students</span>
                                                </div>
                                            </div>
                                            <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                                                Add to Calendar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section className="py-24 bg-black text-white rounded-3xl" ref={ready}>
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-4xl font-bold mb-6">Ready to transform your teaching experience?</h2>
                            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
                                Join thousands of educators who are already using our platform to enhance their teaching and student
                                engagement.
                            </p>
                            <button className="rounded-full px-8 py-6 bg-orange-400 hover:bg-orange-500 text-black text-lg font-medium transition-colors">
                                Start teaching smarter
                            </button>
                        </div>
                    </section>

                    <section className="py-24" ref={trust}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Institutions</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Join the community of educational institutions that trust our platform.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                            <img
                                src="../src/assets/univ1.jpg?height=50&width=150"
                                alt="University logo"
                                width={150}
                                height={50}
                                className="opacity-60 hover:opacity-100 transition-opacity"
                            />
                            <img
                                src="../src/assets/univ2.jpg?height=50&width=150"
                                alt="University logo"
                                width={150}
                                height={50}
                                className="opacity-60 hover:opacity-100 transition-opacity"
                            />
                            <img
                                src="../src/assets/univ3.jpg?height=50&width=150"
                                alt="University logo"
                                width={150}
                                height={50}
                                className="opacity-75 hover:opacity-100 transition-opacity"
                            />
                            <img
                                src="../src/assets/univ4.jpg?height=50&width=150"
                                alt="University logo"
                                width={150}
                                height={50}
                                className="opacity-75 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </section>
                </main>


            </div>
        </div>
    )
}