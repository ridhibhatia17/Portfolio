"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Trophy, Users, Code, Award, Lightbulb, Target, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IEEEAchievementDetails() {
  const hackathonImages = [
    "/images/ieee1.jpg",
    "/images/ieee2.jpg",
    "/images/ieee3.jpg",
    "/images/ieee4.jpg",
  ]
  const galleryImages = [
    "/images/ieee-achievement.jpg",
    "/images/ieee6.jpg",
    "/images/ieee7.jpg",
    "/images/ieee8.jpg",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header with Back to Achievements Button */}
      <header className="fixed top-0 left-0 right-0 backdrop-blur-md border-b border-purple-500/20 z-50 p-6 flex items-center justify-between">
        <Link href="/achievements">
          <Button
            variant="outline"
            className="bg-transparent border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Achievements
          </Button>
        </Link>
      </header>
<br></br>
<br></br>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2">
                <Trophy className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">1st Place - Healthcare Track</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-sans mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  IEEE SSH 2024
                </span>
                <br></br>
                
                <span className="block text-white-400">Healthcare Innovation</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                A journey of innovation and learning across two intense 24-hour phases - online and offline - where we crafted MedEase, a revolutionary healthcare platform transforming patient care and hospital management.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-purple-500/20">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">October 2024</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-purple-500/20">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">KIET Group of Institutions, Ghaziabad</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-purple-500/20">
                  <Award className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Healthcare Track</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                <div className="grid grid-cols-2 gap-4">
                  {hackathonImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden">
                      <Image
                        src={image}
                        alt={`Hackathon moment ${index + 1}`}
                        width={200}
                        height={150}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Genesis Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2 mb-4">
              <Lightbulb className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">The Genesis</span>
            </div>
            <h2 className="text-4xl font-bold font-sans mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Where Innovation Meets Healthcare
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center italic">
            &quot;In the realm of healthcare, every second counts, every decision matters, and every innovation has the power to save lives.&quot;
          </p>
          <div className="bg-slate-800/50 rounded-2xl p-8 border-l-4 border-purple-500/30">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The IEEE SSH 2024 hackathon, split into two 24-hour phases—online and offline—challenged us to push the boundaries of healthcare technology. Winning 1st place in the online phase&apos;s healthcare track fueled our drive to create <strong className="text-purple-400">MedEase</strong>, a platform designed to streamline patient care and hospital operations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Healthcare systems often face inefficiencies, fragmented communication, and poor patient experiences. MedEase aimed to address these by creating a unified ecosystem connecting patients, doctors, and hospital administration seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-sans text-white mb-2">Patient-Centric</h3>
              <p className="text-gray-400">Empowering patients with seamless healthcare access</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-sans text-white mb-2">Collaborative</h3>
              <p className="text-gray-400">Connecting hospitals, doctors, and patients seamlessly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-sans text-white mb-2">Intelligent</h3>
              <p className="text-gray-400">Leveraging automation for smarter healthcare</p>
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold font-sans text-white mb-6">MedEase: A Symphony of Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Intelligent Booking & Queuing</h4>
                    <p className="text-sm text-gray-400">Smart appointment scheduling with real-time queue management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Automated Bed Availability</h4>
                    <p className="text-sm text-gray-400">Real-time bed tracking across multiple hospitals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Role-Based Authentication</h4>
                    <p className="text-sm text-gray-400">Secure access for Admin, Manager, Doctors, Patients, Employee</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">City-Wide Integration</h4>
                    <p className="text-sm text-gray-400">Connecting healthcare facilities across the city</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Smart Inventory Management</h4>
                    <p className="text-sm text-gray-400">Automated tracking and restocking alerts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Patient Engagement Suite</h4>
                    <p className="text-sm text-gray-400">Chat system and AI-powered chatbot support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <h4 className="font-bold text-white mb-3 flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-400" />
                Powered by
              </h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "PHP", "MySQL"].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-purple-500/20 border-purple-500/30 text-purple-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-sans mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                The Two-Phase Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              From online victory to offline learning - a tale of innovation and growth
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center -ml-4">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-2xl font-bold font-sans text-white mb-3">Online Phase: The Breakthrough</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    The online phase was a 24-hour coding and innovation sprint. Our team dove into the healthcare challenge, brainstorming and prototyping MedEase. We focused on creating a robust, user-friendly platform, addressing real-world healthcare pain points.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Our hard work paid off as we secured <strong className="text-purple-400">1st place</strong> in the healthcare track, standing out among competitors for our innovative approach and technical execution.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center -ml-4">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-2xl font-bold font-sans text-white mb-3">Offline Phase: The Learning Curve</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Selected for the offline phase at KIET Group of Institutions, Ghaziabad, we faced another intense 24-hour hackathon. This round pushed us to refine MedEase further, collaborating in person and tackling new challenges under tight constraints.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Though we didn&apos;t win, the experience was invaluable. We gained insights into teamwork, real-time problem-solving, and the complexities of healthcare systems, fueling our passion for future innovations.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center -ml-4">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-2xl font-bold font-sans text-white mb-3">The Moment of Truth: Final Presentation</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    In the online phase, our presentation showcased MedEase&apos;s potential to revolutionize healthcare. We demonstrated its seamless integration, real-time features, and patient-centric design, earning us the top spot.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    The offline phase, while not a victory, taught us resilience and adaptability. Presenting to judges at KIET, we shared our vision and learned from feedback, strengthening our resolve to innovate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Legacy Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-sans mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Beyond the Competition
            </span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            IEEE SSH 2024 was a transformative experience, blending victory in the online phase with profound learning in the offline phase, solidifying our commitment to healthcare innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">48</div>
              <div className="text-sm text-gray-400">Hours Across Two Phases</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">1st</div>
              <div className="text-sm text-gray-400">Online Phase Achievement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-sm text-gray-400">Lessons Learned</div>
            </div>
          </div>
          <p className="text-lg text-gray-400 leading-relaxed">
            The hackathon honed our technical and collaborative skills while deepening our understanding of healthcare challenges. MedEase remains a testament to our vision, inspiring us to continue creating technology that serves humanity with empathy and innovation.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-sans mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Moments of Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Capturing the spirit of collaboration
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={`Innovation moment ${index + 1}`}
                  width={500}
                  height={350}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">Innovation in Action</p>
                    <p className="text-sm opacity-90">IEEE SSH 2024 Hackathon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}