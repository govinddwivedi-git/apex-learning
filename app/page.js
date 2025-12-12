"use client";
import { UserButton } from "@clerk/nextjs";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Link from "next/link";
import Image from "next/image";
import RotatingText from "@/components/ui/RotatingText";
import DarkVeil from "@/components/ui/DarkVeil";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <DarkVeil hueShift={27}/>
      </div>

      {/* Navbar with glass effect */}
      <nav className="w-full z-50 sticky top-0 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-yellow-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/logo.svg"
                alt="Apex Learning Logo"
                width={45}
                height={45}
                className="relative rounded-xl shadow-lg group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-3xl font-bold dark:bg-gradient-to-r dark:from-white dark:to-gray-400 dark:bg-clip-text dark:text-transparent">
              Apex Learning
              <span className="text-sm text-white font-bold bg-yellow-600 px-3 py-1 rounded-full shadow-lg shadow-yellow-600/30">
                ai
              </span>
            </span>
          </Link>
          <RotatingText
            texts={[
              "Smart Learning",
              "Study Made Easy",
              "Ace Your Exams!",
              "Learn Faster",
              "Your AI Study Buddy",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            {/* Status Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">AI-Powered Learning Platform</span>
            </div> */}

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Welcome to  <span className="text-blue-600">Apex Learning</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your AI-powered path to the <span className="text-white font-medium">Apex of Knowledge</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-white/10"
              >
                Get Started Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mt-20 max-w-3xl mx-auto">
            {[
              { value: "10K+", label: "Active Learners" },
              { value: "50K+", label: "Study Materials" },
              { value: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Apex?</h2>
            <p className="text-gray-400 text-lg">Powered by cutting-edge AI technology</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <SpotlightCard
                key={index}
                className="group p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Create Your Learning Path
            </h2>
            <p className="text-gray-400 text-lg">
              Choose a category and select your study method
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left side - Categories */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-purple-500 rounded-full" />
                <h3 className="text-xl font-semibold text-white">Select Your Category</h3>
              </div>
              <div className="space-y-3">
                {Options.map((option, index) => (
                  <SpotlightCard
                    key={index}
                    className="group p-5 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={option.icon}
                          alt={option.name}
                          width={28}
                          height={28}
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">{option.name}</h4>
                        <p className="text-sm text-gray-500">
                          AI-powered {option.name.toLowerCase()} prep
                        </p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Right side - Study Methods */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-pink-500 rounded-full" />
                <h3 className="text-xl font-semibold text-white">Choose Study Method</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {MaterialList.map((material, index) => (
                  <SpotlightCard 
                    key={index}
                    className="group p-5 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={material.icon}
                        alt={material.name}
                        width={26}
                        height={26}
                      />
                    </div>
                    <h4 className="text-lg font-medium text-white mb-1">{material.name}</h4>
                    <p className="text-sm text-gray-500">{material.desc}</p>
                  </SpotlightCard>
                ))}
              </div>

              <SpotlightCard className="p-6 border border-white/10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our <span className="text-white font-medium">AI-powered app</span> generates personalized content tailored to your learning needs—from summaries and notes to question sets. Study smarter, not harder.
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* CTA */}
          
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Transform Your Learning?</h3>
              <Link
                href="/create"
                className="group inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-white/10"
              >
                Start Creating Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-sm text-gray-500">No credit card required • Free to start</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-xl bg-black/30">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-500 text-sm">© 2026 Apex Learning. Empowering learners worldwide.</p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "AI-Powered Learning",
    description:
      "Personalized learning experiences tailored to your needs using advanced AI algorithms that adapt to your progress.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Interactive Content",
    description:
      "Engage with dynamic flashcards, quizzes, and notes that make learning both effective and enjoyable.",
    icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
  },
];

const Options = [
  {
    name: "Exam",
    icon: "/exam_1.png",
  },
  {
    name: "Job Interview",
    icon: "/job.png",
  },
  {
    name: "Practice",
    icon: "/practice.png",
  },
  {
    name: "Coding Prep",
    icon: "/code.png",
  },
  {
    name: "Other",
    icon: "/knowledge.png",
  },
];

const MaterialList = [
  {
    name: "Notes/Chapters",
    desc: "Read notes to understand the topic",
    icon: "/notes.png",
    path: "/notes",
    type: "notes",
  },
  {
    name: "Flashcards",
    desc: "Practice with flashcards and remember",
    icon: "/flashcard.png",
    path: "/flashcards",
    type: "flashcard",
  },
  {
    name: "Quiz",
    desc: "Test your knowledge with quiz",
    icon: "/quiz.png",
    path: "/quiz",
    type: "quiz",
  },
  {
    name: "Question/Answer",
    desc: "Evaluate with question/answer",
    icon: "/qa.png",
    path: "/qa",
    type: "qa",
  },
];
