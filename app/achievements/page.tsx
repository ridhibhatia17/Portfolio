"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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
              All Achievements
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Awards, competitions, and milestones that define my journey in technology and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-50">
          {/* IEEE SSH 2024 */}
          <Card className="group bg-slate-800/50 border-purple-500/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                <Image
                  src="/images/ieee-achievement.jpg"
                  alt="IEEE SSH 2024 Award"
                  width={500}
                  height={800}
                  className="object-contain "
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  <br /><br /><br></br>IEEE SSH 2024
                </h3>
                <p className="text-yellow-400 font-medium text-sm mb-4">1st Place - Healthcare Track</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Developed MedEase, a comprehensive healthcare web application featuring appointment booking, queue
                  management, and integrated chat tools for enhanced patient care.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">HTML</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">CSS</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">JavaScript</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">PhP</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">MySql</span>
                </div>
                <Link href="/achievements/ieee">
  <Button
    variant="outline"
    size="sm"
    className="w-full border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 group-hover:border-yellow-400 bg-transparent"
  >
    <ExternalLink className="mr-2 h-4 w-4" />
    View Details
  </Button>
</Link>
              </div>
            </CardContent>
          </Card>

          {/* Byte Tourney 2024 */}
          <Card className="group bg-slate-800/50 border-purple-500/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                <Image
                  src="/images/byte-tourney1.jpg"
                  alt="Byte Tourney 2024 Award"
                  width={500}
                  height={100}
                  className="object-contain "
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-purple-400 transition-colors">
                  <br /><br /><br></br>Byte Tourney 2024
                </h3>
                <p className="text-purple-400 font-medium text-sm mb-4">1st Place Winner</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Awarded a certificate for selecting an outstanding domain name "HUM TO CHALE PARDES," highlighting creativity
                  and strategic thinking in competitive programming.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Programming</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Competitive</span>
                </div>
                <Link href="/achievements/byte-tourney">
  <Button
    variant="outline"
    size="sm"
    className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 group-hover:border-purple-400 bg-transparent"
  >
    <ExternalLink className="mr-2 h-4 w-4" />
    View Details
  </Button>
</Link>
              </div>
            </CardContent>
          </Card>

          {/* SilverZone Olympiad */}
          <Card className="group bg-slate-800/50 border-purple-500/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                <Image
                  src="/images/silverzone-olympiad.jpg"
                  alt="SilverZone Olympiad Award"
                  width={500}
                  height={260}
                  className="object-contain "
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-blue-400 transition-colors">
                  <br /><br /><br></br>SilverZone Olympiad
                </h3>
                <p className="text-blue-400 font-medium text-sm mb-4">1st Place - Mathematics</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Demonstrated exceptional mathematical progress and analytical thinking, laying the foundation for
                  advanced problem-solving in computer science.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Mathematics</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Analytics</span>
                </div>
                <Link href="/achievements/silverzone">
  <Button
    variant="outline"
    size="sm"
    className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 group-hover:border-purple-400 bg-transparent"
  >
    <ExternalLink className="mr-2 h-4 w-4" />
    View Details
  </Button>
</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}