"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header with Back to Home Button */}
      <header className="fixed top-0 left-0 right-0 backdrop-blur-md border-b border-purple-500/20 z-50 p-6 flex items-center justify-between">
        <Button
          variant="outline"
          className="bg-transparent border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 flex items-center"
          onClick={() => {
            window.location.href = "/"; // Navigates back to the home page
          }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        <div className="text-right">
          {/* Optional: Add additional navigation or logo if needed */}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-sans mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my complete portfolio of innovative solutions spanning AI/ML, web development, healthcare, and more
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-50">
          {/* DermaSense.ai */}
                      <Card className="group bg-slate-800/50 border-purple-500/20 overflow-hidden">
                        <CardContent className="p-0">
                          
                            <Image
                              src="/images/Derma.jpg"
                              alt="IEEE SSH 2024 Award"
                              width={500}
                              height={800}
                              className="object-contain"
                            />
                          
                          <div className="p-6">
                            <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-purple-400 transition-colors">
                            DermaSense.ai
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                              AI-powered web app using deep learning to analyze skin images and detect potential diseases. Features offered: Image upload for diagnosis, AI-driven prediction, detailed insights on disease causes and treatments, and assistance in finding and consulting nearby dermatologists.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Python</span>
                              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">TensorFlow</span>
                              <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">OpenCV</span>
                              <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">Flask</span>
                              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">Node.js</span>
                              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">MongoDB</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
          <p className="text-gray-400 text-sm leading-relaxed">2024</p>
          <a
            href="https://github.com/ridhibhatia17"
            className="flex items-center gap-2 bg-slate-800/50 text-gray-400 rounded"
          >
            <Github className="h-5 w-5" />
            <span className="text-sm">Code</span>
          </a>
        </div>
      </div>
                        </CardContent>
                      </Card>
                      {/* {MedEase} */}
                      <Card className="group bg-slate-800/50 border-purple-500/20 overflow-hidden">
                        <CardContent className="p-0">
                          
                            <Image
                              src="/images/MedEase1.jpg"
                              alt="IEEE SSH 2024 Award"
                              width={500}
                              height={800}
                              className="object-contain duration-300"
                            />
                          
                          <div className="p-6">
                            <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-green-400 transition-colors">
                            MedEase Healthcare Platform
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                              Comprehensive healthcare platform bringing together patient care, provider tools, and collaboration between hospitals into one userfriendly system. Features offered: Booking and Queuing, Automated Bed Availability, Role-Based Authentication, City-Wide Module, Inventory and Complaint Management, Patient Engagement Tools (Chat System, Chatbot)
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">HTML</span>
                              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">CSS</span>
                              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">JavaScript</span>
                              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">PHP</span>
                              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">MySQL</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
          <p className="text-gray-400 text-sm leading-relaxed">2024</p>
          <a
            href="https://github.com/ridhibhatia17/healthcare"
            className="flex items-center gap-2 bg-slate-800/50 text-gray-400 rounded"
          >
            <Github className="h-5 w-5" />
            <span className="text-sm">Code</span>
          </a>
        </div>
      </div>
                          
                        </CardContent>
                      </Card>
          
                      {/* Saarthi */}
                                  <Card className="group bg-slate-800/50 border-purple-500/20 overflow-hidden">
                        <CardContent className="p-0">
                          
                            <Image
                              src="/images/saarthi.jpg"
                              alt="saarthi"
                              width={700}
                              height={800}
                              className="object-contain"
                            />
                          <div className="p-6">
                            <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-yellow-400 transition-colors">
                            Saarthi
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                              A modern travel and tourism platform designed to revolutionize the travel experience by offering personalized trip planning, destination discovery, and seamless booking experiences for travelers worldwide. This project integrates advanced search algorithms, real-time availability checks, and a user-friendly interface to cater to diverse travel needs, from solo adventurers to group tours.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">HTML</span>
                              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">CSS</span>
                              <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">JavaScript</span>
                              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">React</span>
                            </div>
                          <div className="flex items-center justify-between mb-4">
          <p className="text-gray-400 text-sm leading-relaxed">2025</p>
          <a
            href="https://github.com/ridhibhatia17/Saarthi-Travel-And-Tour-Website-"
            className="flex items-center gap-2 bg-slate-800/50 text-gray-400 rounded"
          >
            <Github className="h-5 w-5" />
            <span className="text-sm">Code</span>
          </a>
          </div>
          </div>
                        </CardContent>
                      </Card>
                      {/* {ExpenseVault} */}
                      <Card className="group bg-slate-800/50 border-purple-500/20">
    <CardContent className="p-0">
      <Image
        src="/images/expense.jpg"
        alt="saarthi"
        width={700}
        height={800}
        className="object-contain"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-blue-400 transition-colors">
          ExpenseVault
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          A personal expense tracking web app designed to help users manage their finances efficiently. Features include expense logging with a user-friendly interface, category-wise breakdown for detailed spending insights, and monthly budget tracking to stay within financial goals. Additionally, it offers visual reports using charts to provide a clear overview of spending patterns and trends over time.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">HTML</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">CSS</span>
          <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">JavaScript</span>
          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">React</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-400 text-sm leading-relaxed">2025</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ridhibhatia17/ExpenseTracker"
              className="flex items-center gap-2 bg-slate-800/50 text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-110 px-4 py-2 rounded ml-4"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm">Code</span>
            </a>
            <a href="https://expensevault.vercel.app" target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="border-yellow-500/30 text-purple-400 hover:bg-yellow-500/10 group-hover:border-yellow-400 bg-transparent"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Button>
            </a>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
        </div>
      </main>
    </div>
  );
}