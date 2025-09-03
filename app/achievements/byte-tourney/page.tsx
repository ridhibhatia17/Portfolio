"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Trophy, Users, Code, Award, Lightbulb, Target, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ByteTourneyDetails() {
  const hackathonImages = [
    "/images/byte-tourney1.jpg",
    "/images/byte-tourney.jpg",
  ]
  const galleryImages = [
    "/images/byte-tourney1.jpg",
    "/images/byte-tourney.jpg",
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

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2">
                <Trophy className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">1st Place Winner</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-sans mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Byte Tourney 2024
                </span>
                <span className="block text-white-400">Domain Name Creativity</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                An exciting competitive programming event where creativity meets technology. Awarded for selecting the outstanding domain name &quot;HUM TO CHALE PARDES,&quot; showcasing strategic thinking and innovation in domain selection.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-purple-500/20">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">2024</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-purple-500/20">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Offline Event</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-purple-500/20">
                  <Award className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Competitive Programming</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                <div className="grid grid-cols-1 gap-4">
                  {hackathonImages.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden">
                      <Image
                        src={image}
                        alt={`Event moment ${index + 1}`}
                        width={200}
                        height={300}
                        className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
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
                Where Creativity Meets Programming
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center italic">
            &quot;In competitive programming, creativity in naming can be as important as the code itself.&quot;
          </p>
          <div className="bg-slate-800/50 rounded-2xl p-8 border-l-4 border-purple-500/30">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Byte Tourney 2024 was a thrilling competitive programming event that emphasized not just coding skills but also creative thinking in domain naming. Our team was awarded for the outstanding domain name &quot;HUM TO CHALE PARDES,&quot; which captured the essence of adventure and innovation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The event challenged participants to combine technical prowess with strategic creativity, highlighting how a clever domain name can enhance project appeal and memorability.
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
              <h3 className="text-xl font-bold font-sans text-white mb-2">Creative Naming</h3>
              <p className="text-gray-400">Blending humor and relevance in domain selection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-sans text-white mb-2">Competitive Spirit</h3>
              <p className="text-gray-400">Fostering innovation through competition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-sans text-white mb-2">Strategic Thinking</h3>
              <p className="text-gray-400">Enhancing projects with memorable domains</p>
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold font-sans text-white mb-6">Byte Tourney: Highlights and Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Domain Name Contest</h4>
                    <p className="text-sm text-gray-400">Creative selection of memorable domain names</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Competitive Programming Challenges</h4>
                    <p className="text-sm text-gray-400">Solving complex problems under time constraints</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Team Collaboration</h4>
                    <p className="text-sm text-gray-400">Working together to innovate and strategize</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Innovation Focus</h4>
                    <p className="text-sm text-gray-400">Encouraging out-of-the-box thinking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Judging Criteria</h4>
                    <p className="text-sm text-gray-400">Creativity, relevance, and uniqueness</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Awards and Recognition</h4>
                    <p className="text-sm text-gray-400">Certificates for outstanding contributions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <h4 className="font-bold text-white mb-3 flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-400" />
                Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Programming", "Competitive", "Creativity", "Strategy"].map((tech) => (
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
                Our Journey in Byte Tourney
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              From ideation to victory - a story of creative excellence
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
                  <h3 className="text-2xl font-bold font-sans text-white mb-3">The Challenge Begins</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Byte Tourney 2024 kicked off with exciting programming challenges. Participants were tasked with not only solving problems but also creating memorable domain names for their projects.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Our team brainstormed ideas that combined cultural references with tech innovation, leading to the creation of &quot;HUM TO CHALE PARDES.&quot;
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
                  <h3 className="text-2xl font-bold font-sans text-white mb-3">Creative Process</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    We focused on making the domain name catchy, relevant, and unique. Drawing from Hindi cinema, &quot;HUM TO CHALE PARDES&quot; symbolized our journey into new technological territories.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    This creative approach set us apart, demonstrating strategic thinking in competitive programming.
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
                  <h3 className="text-2xl font-bold font-sans text-white mb-3">Victory and Recognition</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Our innovative domain name was recognized as outstanding, earning us 1st place and a certificate of excellence.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    This achievement highlighted the importance of creativity in technical fields.
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
            Byte Tourney 2024 reinforced the value of creative thinking in programming, inspiring ongoing innovation in our technical pursuits.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">1st</div>
              <div className="text-sm text-gray-400">Place Achievement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">Creative</div>
              <div className="text-sm text-gray-400">Domain Innovation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-sm text-gray-400">Inspiration Gained</div>
            </div>
          </div>
          <p className="text-lg text-gray-400 leading-relaxed">
            The event sharpened our skills in competitive programming while emphasizing the role of creativity, motivating us to approach future challenges with innovative perspectives.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-sans mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Moments from Byte Tourney
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Capturing the excitement of competition
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={`Event moment ${index + 1}`}
                  width={500}
                  height={350}
                  className="w-full h-90 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">Competition in Action</p>
                    <p className="text-sm opacity-90">Byte Tourney 2024</p>
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