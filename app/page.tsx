"use client"

import { Suspense, useState, useEffect, useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Trophy,
  ExternalLink,
  Brain,
  MapPin,
  GraduationCap,
  Calendar,
  Code,
  Database,
  Globe,
  Cpu,
  Palette,
  Server,
  Phone,
  LocateIcon as Location,
  Send,
  Menu,
  X,
  LucideIcon
} from "lucide-react"
import Link from "next/link"
import * as THREE from "three"

/* ---------------- Galaxy Starfield ---------------- */

function Stars({ count = 5000 }: { count?: number }) {
  const geom = useMemo(() => new THREE.BufferGeometry(), [])
  const material = useMemo(
    () => new THREE.PointsMaterial({ color: "#FFFFFF", size: 0.015 }),
    []
  )

  useEffect(() => {
    // Adjust star count based on screen size
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const adjustedCount = isMobile ? count / 2 : count; // Reduce stars on mobile
    const positions = new Float32Array(adjustedCount * 3)
    for (let i = 0; i < adjustedCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200
    }
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  }, [geom, count])

  useFrame(() => {
    geom.rotateY(0.0005) // Slow galaxy rotation
  })

  return <points geometry={geom} material={material} />
}

function NebulaLight() {
  return (
    <>
      <pointLight position={[20, 0, -20]} intensity={2} distance={80} color="#9333EA" />
      <pointLight position={[-20, 10, -10]} intensity={1.5} distance={80} color="#FACC15" />
    </>
  )
}

function ShootingStar() {
  const ref = useRef<THREE.Mesh>(null!)
  const [pos, setPos] = useState<[number, number, number]>([0, 0, 0])
  const [vel, setVel] = useState<[number, number, number]>([0, 0, 0])
  const [visible, setVisible] = useState(false)
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const launch = () => {
      setPos([(Math.random() - 0.5) * 50, 25, (Math.random() - 0.5) * 50])
      setVel([Math.random() * -0.5 - 0.2, -0.8, Math.random() * -0.5])
      setVisible(true)
      setTimeout(() => setVisible(false), 1500)
    }
    timer.current = setInterval(launch, 6000)
    return () => {
      if (timer.current) {
        clearInterval(timer.current)
      }
    }
  }, [])

  useFrame(() => {
    if (visible && ref.current) {
      ref.current.position.x += vel[0]
      ref.current.position.y += vel[1]
      ref.current.position.z += vel[2]
    }
  })

  return (
    visible && (
      <mesh ref={ref} position={pos}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    )
  )
}

function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor - hidden on mobile */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 mix-blend-difference hidden sm:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      {/* Trailing glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-40 hidden sm:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-900 opacity-50 blur-sm" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-30 hidden sm:block"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
        }}
      >
        <div className="w-full h-full rounded-full border border-primary/30" />
      </motion.div>
    </>
  );
}

function Scene3D() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.2} />
      <Stars count={typeof window !== 'undefined' && window.innerWidth < 640 ? 2500 : 5000} />
      <NebulaLight />
      <ShootingStar />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  )
}

/* ---------------- SkillBar ---------------- */

function SkillBar({
  skill,
  percentage,
  icon: Icon,
  delay = 0,
  color,
}: { skill: string; percentage: number; icon: LucideIcon; delay?: number; color: string }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, delay)
    return () => clearTimeout(timer)
  }, [percentage, delay])

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon className="h-5 w-5 text-purple-400" />
          <span className="text-foreground font-medium font-serif text-sm sm:text-base">{skill}</span>
        </div>
        <span className="text-purple-400 font-bold font-serif text-sm sm:text-base">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800/50 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

/* ---------------- Main Portfolio ---------------- */

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<{
    message: string
    type: "success" | "error" | null
  }>({ message: "", type: null })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ message: "", type: null })

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setFormStatus({ message: result.message, type: "success" })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setFormStatus({ message: result.message || "Failed to send message", type: "error" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({ message: "An error occurred while sending the message", type: "error" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
              RB
            </div>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-300 transition-colors text-sm lg:text-base">
                About
              </a>
              <a href="#achievements" className="text-gray-300 hover:text-purple-300 transition-colors text-sm lg:text-base">
                Achievements
              </a>
              <a href="#projects" className="text-gray-300 hover:text-purple-300 transition-colors text-sm lg:text-base">
                Projects
              </a>
              <a href="#skills" className="text-gray-300 hover:text-purple-300 transition-colors text-sm lg:text-base">
                Skills
              </a>
              <a href="#education" className="text-gray-300 hover:text-purple-300 transition-colors text-sm lg:text-base">
                Education
              </a>
              <a href="#contact" className="text-gray-300 hover:text-purple-300 transition-colors text-sm lg:text-base">
                Contact
              </a>
            </div>
            <button
              className="md:hidden text-gray-300 hover:text-purple-300 transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
              <div className="flex flex-col space-y-4 pt-4 text-center">
                <a href="#about" className="text-gray-300 hover:text-purple-300 text-base" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
                <a href="#achievements" className="text-gray-300 hover:text-purple-300 text-base" onClick={() => setIsMenuOpen(false)}>
                  Achievements
                </a>
                <a href="#projects" className="text-gray-300 hover:text-purple-300 text-base" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </a>
                <a href="#skills" className="text-gray-300 hover:text-purple-300 text-base" onClick={() => setIsMenuOpen(false)}>
                  Skills
                </a>
                <a href="#education" className="text-gray-300 hover:text-purple-300 text-base" onClick={() => setIsMenuOpen(false)}>
                  Education
                </a>
                <a href="#contact" className="text-gray-300 hover:text-purple-300 text-base" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 w-full h-full z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto pointer-events-none">
          <div className="space-y-6 pointer-events-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sans">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Ridhi Bhatia
              </span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-300 space-y-2">
              <p className="font-medium">Computer Science Student</p>
              <p className="text-purple-400">Full Stack Developer • AI/ML Enthusiast</p>
            </div>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Welcome to My Digital Playground - Exploring the intersection of AI and web development through innovative
              solutions and hackathon victories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 sm:pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/resume/Ridhi_Bhatia_Resume.pdf"
                  link.download = "Ridhi_Bhatia_Resume.pdf"
                  link.click()
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 bg-transparent cursor-pointer text-sm sm:text-base"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 pt-6 sm:pt-8">
              <a
                href="https://github.com/ridhibhatia17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ridhibhatia17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <MouseFollower />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-900 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-110 lg:h-110 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-purple-900/20 border-2 border-purple-500/30 flex items-center justify-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-99 lg:h-99 rounded-full overflow-hidden">
                <img
                  src="/images/profile1.jpg"
                  alt="Profile picture of Ridhi Bhatia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 flex-1">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate Computer Science Engineering Student at Chitkara
                University, graduating in May 2027. My journey
                in technology is driven by curiosity and innovation, particularly in
                the realms of web development.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                As a hackathon champion, I thrive on transforming complex problems
                into elegant solutions. My experience spans from developing
                AI-powered healthcare applications to creating comprehensive web
                platforms that enhance user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-purple-500/20">
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">8.59</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-purple-500/20">
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">2027</div>
                  <div className="text-sm text-gray-400">Graduation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-purple-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
                Achievements & Recognition
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Turning Ideas into Reality - A track record of innovation and excellence in competitive programming
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-900 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 flex items-center justify-center">
                  <Image
                    src="/images/ieee-achievement.jpg"
                    alt="IEEE SSH 2024 Award"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-white mb-3 group-hover:text-purple-300 transition-colors">
                    IEEE SSH 2024
                  </h3>
                  <p className="text-purple-400 font-medium text-sm mb-4">1st Place - Healthcare Track</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Developed MedEase, a comprehensive healthcare web application featuring appointment booking, queue
                    management, and integrated chat tools for enhanced patient care.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">HTML</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">CSS</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">JavaScript</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">PhP</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">MySql</span>
                  </div>
                  <Link href="/achievements/ieee">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 group-hover:border-purple-400 bg-transparent cursor-pointer text-xs sm:text-sm"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="group bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-purple-600/20 to-purple-900/20 flex items-center justify-center">
                  <Image
                    src="/images/byte-tourney1.jpg"
                    alt="Byte Tourney 2024 Award"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-white mb-3 group-hover:text-purple-300 transition-colors">
                    Byte Tourney 2024
                  </h3>
                  <p className="text-purple-400 font-medium text-sm mb-4">1st Place Winner</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Awarded a certificate for selecting an outstanding domain name &quot;HUM TO CHALE PARDES,&quot; highlighting creativity
                    and strategic thinking in competitive programming.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Programming</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Competitive</span>
                  </div>
                  <Link href="/achievements/byte-tourney">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 group-hover:border-purple-400 bg-transparent cursor-pointer text-xs sm:text-sm"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="group bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-purple-600/20 to-purple-900/20 flex items-center justify-center">
                  <Image
                    src="/images/silverzone-olympiad.jpg"
                    alt="SilverZone Olympiad Award"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-white mb-3 group-hover:text-purple-300 transition-colors">
                    SilverZone Olympiad
                  </h3>
                  <p className="text-purple-400 font-medium text-sm mb-4">1st Place - Mathematics</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Demonstrated exceptional mathematical prowess and analytical thinking, laying the foundation for
                    advanced problem-solving in computer science.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Mathematics</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Analytics</span>
                  </div>
                  <Link href="/achievements/silverzone">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 group-hover:border-purple-400 bg-transparent cursor-pointer text-xs sm:text-sm"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 sm:mt-16 text-center">
            <Link href="/achievements">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base"
              >
                <Trophy className="mr-2 h-5 w-5" />
                View All Achievements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-purple-950">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Where Code Meets Creativity - Innovative solutions that make a
              real-world impact
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-900 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src="/images/Derma.jpg"
                    alt="DermaSense.ai Project"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-white mb-3 group-hover:text-purple-300 transition-colors">
                    DermaSense.ai
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    AI-powered web app using deep learning to analyze skin images and
                    detect potential diseases. Features offered: Image upload for
                    diagnosis, AI-driven prediction, detailed insights on disease
                    causes and treatments, and assistance in finding and consulting
                    nearby dermatologists.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Python</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">TensorFlow</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">OpenCV</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">Flask</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Node.js</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">MongoDB</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">2024</p>
                    <a
                      href="https://github.com/ridhibhatia17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900/50 text-gray-400 rounded text-xs sm:text-sm"
                    >
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="group bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src="/images/MedEase1.jpg"
                    alt="MedEase Healthcare Platform"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-white mb-3 group-hover:text-purple-300 transition-colors">
                    MedEase Healthcare Platform
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Comprehensive healthcare platform bringing together patient care,
                    provider tools, and collaboration between hospitals into one
                    userfriendly system. Features offered: Booking and Queuing,
                    Automated Bed Availability, Role-Based Authentication, City-Wide
                    Module, Inventory and Complaint Management, Patient Engagement
                    Tools (Chat System, Chatbot)
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">HTML</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">CSS</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">JavaScript</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">PHP</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">MySQL</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">2024</p>
                    <a
                      href="https://github.com/ridhibhatia17/healthcare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900/50 text-gray-400 rounded text-xs sm:text-sm"
                    >
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="group bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src="/images/saarthi.jpg"
                    alt="Saarthi"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-white mb-3 group-hover:text-purple-300 transition-colors">
                    Saarthi
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    A modern travel and tourism platform designed to revolutionize the
                    travel experience by offering personalized trip planning,
                    destination discovery, and seamless booking experiences for
                    travelers worldwide. This project integrates advanced search
                    algorithms, real-time availability checks, and a user-friendly
                    interface to cater to diverse travel needs, from solo adventurers
                    to group tours.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">HTML</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">CSS</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">JavaScript</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">React</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">2025</p>
                    <a
                      href="https://github.com/ridhibhatia17/Saarthi-Travel-And-Tour-Website-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900/50 text-gray-400 rounded text-xs sm:text-sm"
                    >
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 sm:mt-16 text-center relative z-10">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-purple-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-serif">
              Mastering the technologies that power modern applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-900 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 bg-gray-900/50 rounded-lg border border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground mb-6 flex items-center">
                <Code className="mr-3 h-6 w-6 text-purple-400" />
                Programming Languages
              </h3>
              <div className="space-y-6">
                <SkillBar skill="Python" percentage={60} icon={Code} delay={100} color="bg-purple-500" />
                <SkillBar skill="JavaScript" percentage={85} icon={Globe} delay={200} color="bg-purple-600" />
                <SkillBar skill="Java" percentage={80} icon={Cpu} delay={300} color="bg-purple-700" />
                <SkillBar skill="C++" percentage={80} icon={Code} delay={400} color="bg-purple-800" />
                <SkillBar skill="C" percentage={70} icon={Code} delay={500} color="bg-purple-900" />
                <SkillBar skill="PHP" percentage={50} icon={Code} delay={100} color="bg-purple-500" />
              </div>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-lg border border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground mb-6 flex items-center">
                <Globe className="mr-3 h-6 w-6 text-purple-400" />
                Frontend Technologies
              </h3>
              <div className="space-y-6">
                <SkillBar skill="React.js" percentage={75} icon={Globe} delay={100} color="bg-purple-500" />
                <SkillBar skill="Node.js" percentage={80} icon={Server} delay={200} color="bg-purple-600" />
                <SkillBar skill="HTML/CSS" percentage={95} icon={Palette} delay={300} color="bg-purple-700" />
                <SkillBar skill="Next.js" percentage={60} icon={Server} delay={400} color="bg-purple-800" />
                <SkillBar skill="TailwindCSS" percentage={90} icon={Server} delay={500} color="bg-purple-900" />
              </div>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-lg border border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground mb-6 flex items-center">
                <Globe className="mr-3 h-6 w-6 text-purple-400" />
                Backend & Databases
              </h3>
              <div className="space-y-6">
                <SkillBar skill="Node.js" percentage={75} icon={Globe} delay={100} color="bg-purple-500" />
                <SkillBar skill="PHP" percentage={50} icon={Server} delay={200} color="bg-purple-600" />
                <SkillBar skill="MySQL" percentage={75} icon={Palette} delay={300} color="bg-purple-700" />
                <SkillBar skill="MongoDB" percentage={75} icon={Server} delay={400} color="bg-purple-800" />
              </div>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-lg border border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground mb-6 flex items-center">
                <Brain className="mr-3 h-6 w-6 text-purple-400" />
                AI/ML & Data Science
              </h3>
              <div className="space-y-6">
                <SkillBar skill="TensorFlow" percentage={60} icon={Brain} delay={100} color="bg-purple-500" />
                <SkillBar skill="OpenCV" percentage={70} icon={Brain} delay={200} color="bg-purple-600" />
                <SkillBar skill="Machine Learning" percentage={60} icon={Cpu} delay={300} color="bg-purple-700" />
                <SkillBar skill="Deep Learning" percentage={60} icon={Cpu} delay={300} color="bg-purple-800" />
                <SkillBar skill="Google Colab" percentage={80} icon={Cpu} delay={300} color="bg-purple-900" />
                <SkillBar skill="Flask" percentage={60} icon={Cpu} delay={300} color="bg-purple-500" />
              </div>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-lg border border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground mb-6 flex items-center">
                <Database className="mr-3 h-6 w-6 text-purple-400" />
                AI Tools & Platforms
              </h3>
              <div className="space-y-6">
                <SkillBar skill="Google Colab" percentage={80} icon={Database} delay={100} color="bg-purple-500" />
                <SkillBar skill="ChatGPT" percentage={95} icon={Database} delay={200} color="bg-purple-600" />
                <SkillBar skill="GitHub Copilot" percentage={80} icon={Code} delay={300} color="bg-purple-700" />
                <SkillBar skill="Gemini" percentage={90} icon={Cpu} delay={300} color="bg-purple-800" />
                <SkillBar skill="V0 by Vercel" percentage={90} icon={Cpu} delay={300} color="bg-purple-900" />
                <SkillBar skill="Grok" percentage={95} icon={Cpu} delay={300} color="bg-purple-500" />
                <SkillBar skill="Cursor" percentage={85} icon={Database} delay={200} color="bg-purple-600" />
              </div>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-lg border border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground mb-6 flex items-center">
                <Database className="mr-3 h-6 w-6 text-purple-400" />
                Soft Skills
              </h3>
              <div className="space-y-6">
                <SkillBar skill="Leadership" percentage={90} icon={Database} delay={100} color="bg-purple-500" />
                <SkillBar skill="Team Management" percentage={85} icon={Database} delay={200} color="bg-purple-600" />
                <SkillBar skill="Presentation" percentage={75} icon={Code} delay={300} color="bg-purple-700" />
                <SkillBar skill="Problem Solving" percentage={80} icon={Cpu} delay={300} color="bg-purple-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-purple-950">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Building a strong foundation in Computer Science and Engineering
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-900 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-2">
                        Bachelor of Engineering - Computer Science
                      </h3>
                      <p className="text-purple-400 font-medium text-base sm:text-lg">
                        Chitkara University
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300 text-sm sm:text-base">
                          Expected Graduation: May 2027
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300 text-sm sm:text-base">CGPA: 8.59/10</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Pursuing a comprehensive education in Computer Science with
                      focus on software engineering, artificial intelligence, and web
                      technologies. Actively participating in hackathons and
                      competitive programming to apply theoretical knowledge in
                      practical scenarios.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-purple-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
                Let&apos;s Connect
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let&apos;s build something amazing together
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-900 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-6">Get in Touch</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                  I&apos;m always excited to discuss new opportunities, innovative projects, or just chat about technology.
                  Whether you&apos;re looking for a collaborator on your next big idea or want to connect with a fellow
                  developer, I&apos;d love to hear from you!
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-900 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Email</p>
                    <a
                      href="mailto:ridhbht4@gmail.com"
                      className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer underline decoration-purple-400/50 hover:decoration-purple-300 text-sm sm:text-base"
                    >
                      ridhbht4@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-900 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Phone</p>
                    <p className="text-purple-400 text-sm sm:text-base">+91 98172 45943</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-900 rounded-full flex items-center justify-center">
                    <Location className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Location</p>
                    <p className="text-purple-400 text-sm sm:text-base">Punjab, India</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 sm:pt-8">
                <h4 className="text-base sm:text-lg font-bold font-sans text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ridhibhatia17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900/50 border border-purple-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ridhibhatia17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900/50 border border-purple-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:ridhbht4@gmail.com"
                    className="w-12 h-12 bg-gray-900/50 border border-purple-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-110"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-6">Send a Message</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 w-full"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com"
                        className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Let's collaborate on a project"
                        className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        className="bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none w-full"
                        required
                      />
                    </div>
                    {formStatus.message && (
                      <p
                        className={`text-sm ${
                          formStatus.type === "success" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {formStatus.message}
                      </p>
                    )}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-purple-950 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
              Ridhi Bhatia
            </div>
            <p className="text-gray-400 text-sm sm:text-base">Computer Science Student • Web Developer • AI Enthusiast</p>
            <div className="flex items-center justify-center space-x-6 pt-4">
              <a
                href="https://github.com/ridhibhatia17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ridhibhatia17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:ridhbht4@gmail.com" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-6 sm:pt-8 border-t border-purple-500/20">
              <p className="text-gray-500 text-sm">© 2025 Ridhi Bhatia</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}