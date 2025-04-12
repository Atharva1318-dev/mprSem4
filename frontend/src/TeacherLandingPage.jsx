import { Link } from "react-router-dom";
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { BookOpen, Calendar, FileText, Users, Award, BarChart } from "lucide-react"
import TeacherHome from './TeacherHome';
import PdfForm from './PdfForm';

export default function TeacherLandingPage({ username, onLogout }) {
    console.log(username);
    return (
        <>
            <header className="flex items-center justify-between mb-16 px-4 py-5 mx-auto">
                <Link to="/dashboard"><div className="font-bold text-2xl">EduWorld</div></Link>
                <nav className="hidden md:flex items-center space-x-8">
                    <Link to="pdfForm" className="text-gray-700 hover:text-black">
                        Upload Notes
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </Link>
                    <Link to="calendar" className="text-gray-700 hover:text-black">
                        E-Calendar
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-black">
                        Assignments
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </Link>
                </nav>
                {username ? <button className="rounded-full px-6 py-2 bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors" onClick={onLogout}>
                    Logout
                </button> : <button className="rounded-full px-6 py-2 bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors">
                    Sign in
                </button>}
            </header>

            <Outlet />

            <footer className="py-12 border-t px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="font-bold text-2xl mb-4">EduTeach.</div>
                        <p className="text-gray-600 mb-4">
                            Empowering educators with digital tools to enhance teaching and learning experiences.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Features</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Upload Notes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    E-Calendar
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Student Progress
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Assignment Management
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Virtual Classroom
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Tutorials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Tutorials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-600">Email: info@eduteach.edu</li>
                            <li className="text-gray-600">Phone: +1 (123) 456-7890</li>
                            <li className="text-gray-600">Address: 123 Education Drive, University City</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t pt-8 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} EduTeach. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}