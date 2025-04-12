
import { Link, Outlet } from "react-router-dom";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Menu from '@mui/material/Menu';
import { BookOpen, Calendar, Code, Train, Coffee } from "lucide-react"
import StudentHome from './StudentHome';
import GetPdfs from "./GetPdfs";

export default function StudentLandingPage({ username, onLogout }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 bg-white flex items-center justify-between px-4 py-5 mx-auto mb-6 shadow">
                <Link to="/dashboard"><div className="font-bold text-2xl">EduWorld</div></Link>
                <nav className=" hidden md:flex items-center space-x-8 bg-white">
                    <Link to="railway" className="relative group text-gray-700 hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline lucide lucide-train-front"><path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" /><path d="m9 15-1-1" /><path d="m15 15 1-1" /><path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" /><path d="m8 19-2 3" /><path d="m16 19 2 3" /></svg>
                        Railway Concession
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </Link>
                    <Link to="getPdfs" className="relative group text-gray-700 hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                        Notes App
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </Link>
                    <Link to="calendar" className="relative group text-gray-700 hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline lucide lucide-calendar"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                        Calendar
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </Link>
                    <Link to="codeEditor" className="relative group text-gray-700 hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline lucide lucide-code"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                        Code Editor
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </Link>
                </nav>
                {!username ? <button className="rounded-full px-6 py-2 bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors">
                    Sign up
                </button> : ""}
                {username ? <button className="rounded-full px-6 py-2 bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors" onClick={onLogout}>
                    Logout
                </button> : <button className="rounded-full px-6 py-2 bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors">
                    Sign in
                </button>
                }
            </header>
            <Outlet></Outlet>
            <footer className="py-12 border-t">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="font-bold text-2xl mb-4">EduWorld.</div>
                        <p className="text-gray-600 mb-4">
                            Making campus life simpler and more efficient with integrated digital tools.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Features</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Railway Concession
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Notes App
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    E-Calendar
                                </a>
                            </li>
                            <li>
                                <Link href="codeEditor" className="text-gray-600 hover:text-black">
                                    Code Editor
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    Digital Canteen
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
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-600">Email: info@EduWorld.edu</li>
                            <li className="text-gray-600">Phone: +1 (123) 456-7890</li>
                            <li className="text-gray-600">Address: 123 Campus Drive, University City</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t pt-8 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} EduWorld. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

