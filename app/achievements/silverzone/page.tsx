"mee client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Trophy, Users, Code, Award, Lightbulb, Target, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SilverZoneOlympiadDetails() {
  const olympiadImage = ["/images/silverzone-olympiad.jpg"]

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
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2">
                <Trophy className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Gold Medal</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold font-sans mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  SilverZone Olympiad
                </span>
                <br></br>
                <span className="block text-white-400">Academic Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                A prestigiome academic competition where intellect and problem-solving skills shine. Awarded a Gold Medal for outstanding performance in a challenging test of knowledge and analytical thinking.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-purple-500/20">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">2018</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-purple-500/20">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Offline Event</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-purple-500/20">
                  <Award className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Academic Competition</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                <div className="grid grid-cols-1">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={olympiadImage[0]}
                      alt="SilverZone Olympiad moment"
                      width={500}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
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
                Where Knowledge Meets Achievement
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center italic">
            &quot;In the pursuit of knowledge, every challenge is an opportunity to grow.&quot;
          </p>
          <div className="bg-slate-800/50 rounded-2xl p-8 border-l-4 border-purple-500/30">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The SilverZone Olympiad 2018 was a prestigiome platform to test academic excellence and critical thinking. Competing against top minds, our performance in solving complex problems earned me a Gold Medal.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This competition emphasized the importance of deep understanding and quick thinking, pushing me to excel in a high-pressure environment.
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
              <h3 className="text-xl font-bold font-sans text-white mb-2">Academic Excellence</h3>
              <p className="text-gray-400">Mastering complex concepts under pressure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-sans text-white mb-2">Competitive Edge</h3>
              <p className="text-gray-400">Standing out among top performers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-sans text-white mb-2">Critical Thinking</h3>
              <p className="text-gray-400">Solving challenges with precision</p>
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold font-sans text-white mb-6">SilverZone Olympiad: Key Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Challenging Problems</h4>
                    <p className="text-sm text-gray-400">Tackling complex academic questions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Time Management</h4>
                    <p className="text-sm text-gray-400">Solving under strict time constraints</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Analytical Skills</h4>
                    <p className="text-sm text-gray-400">Applying logic to diverse problems</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Global Competition</h4>
                    <p className="text-sm text-gray-400">Competing with participants worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Recognition</h4>
                    <p className="text-sm text-gray-400">Earning a Gold Medal for excellence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-white">Knowledge Growth</h4>
                    <p className="text-sm text-gray-400">Expanding academic horizons</p>
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
                {["Academics", "Problem Solving", "Critical Thinking", "Competition"].map((tech) => (
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
                Our Journey in SilverZone Olympiad
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              From preparation to triumph - a story of academic excellence
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
                  <h3 className="text-2xl font-bold font-sans text-white mb-3">Preparation Phase</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    The journey began with rigorous preparation, diving deep into academic concepts and honing problem-solving skills to tackle the Olympiad’s challenges.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    I focused on mastering key topics and practicing under timed conditions to build confidence.
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
                  <h3 className="text-2xl font-bold font-sans text-white mb-3">The Competition</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    The SilverZone Olympiad tested my knowledge and analytical skills through a series of challenging questions. I navigated complex problems with precision and focus.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    My ability to think critically under pressure set me apart, earning me recognition among top competitors.
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
                  <h3 className="text-2xl font-bold font-sans text-white mb-3">Achieving the Gold Medal</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    My dedication paid off with a Gold Medal, a testament to my hard work and intellectual rigor.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    This achievement reinforced my commitment to lifelong learning and academic excellence.
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
            The SilverZone Olympiad 2018 was a milestone in my academic journey, deepening my passion for knowledge and problem-solving.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">Gold</div>
              <div className="text-sm text-gray-400">Medal Achievement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">Academic</div>
              <div className="text-sm text-gray-400">Excellence Demonstrated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-sm text-gray-400">Knowledge Gained</div>
            </div>
          </div>
          <p className="text-lg text-gray-400 leading-relaxed">
            The Olympiad sharpened my analytical skills and fueled my drive to pursue excellence, inspiring me to tackle future challenges with confidence and curiosity.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-sans mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Moment from SilverZone Olympiad
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Capturing the essence of achievement
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1">
            <div className="group relative overflow-hidden rounded-2xl max-w-md mx-auto">
              <Image
                src={olympiadImage[0]}
                alt="SilverZone Olympiad moment"
                width={500}
                height={350}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold">Achievement in Action</p>
                  <p className="text-sm opacity-90">SilverZone Olympiad 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}