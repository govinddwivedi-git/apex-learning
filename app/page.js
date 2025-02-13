"use client";
import { UserButton } from "@clerk/nextjs";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Link from "next/link";
import Image from "next/image";
import RotatingText from "@/components/ui/RotatingText";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="w-full z-50 mt-5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.svg"
              alt="Apex Learning Logo"
              width={45}
              height={45}
              className="rounded-xl shadow-lg group-hover:scale-105 transition-transform"
            />
            <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Apex Learning
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

          

          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      <main className="container mx-auto px-4">
        <section className="py-10">
          <SpotlightCard className="text-center p-16 border border-neutral-800 mt-5">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Welcome to Apex Learning
            </h1>
            <p className="text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Your AI-powered path to the Apex of Knowledge
            </p>
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-10 py-4 rounded-full font-medium transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </SpotlightCard>
        </section>

        <section className="py-8 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="p-8 border border-neutral-800 hover:border-neutral-700 transition-all hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg">{feature.description}</p>
            </SpotlightCard>
          ))}
        </section>

        {/* New Learning Flow Section */}
        <section className="py-8">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Create Your Learning Path
          </h2>
          <p className="text-gray-400 text-center mb-8 text-xl">
            Choose a category and select your study method
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Categories */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Select Your Category
              </h3>
              {Options.map((option, index) => (
                <SpotlightCard
                  key={index}
                  className="p-4 hover:scale-105 transition-all cursor-pointer flex items-center space-x-4"
                >
                  <Image
                    src={option.icon}
                    alt={option.name}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-lg font-medium bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      {option.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      Create custom content for {option.name.toLowerCase()}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Right side - Study Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Choose Study Method
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {MaterialList.map((material, index) => (
                  <SpotlightCard key={index}>
                    <div className="flex items-center space-x-3 mb-3">
                      <Image
                        src={material.icon}
                        alt={material.name}
                        width={32}
                        height={32}
                      />
                      <h4 className="text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {material.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-400">{material.desc}</p>
                  </SpotlightCard>
                ))}
              </div>
              <div className="">
                <SpotlightCard className="">
                  <p className="text-gray-400">
                    Studying just got smarter with our AI-powered app! Whether
                    you're preparing for exams, revising complex topics, or
                    organizing your study materials, our app generates
                    high-quality, personalized content tailored to your learning
                    needs. From concise summaries and key takeaways to
                    well-structured notes and question sets, our AI simplifies
                    studying, saves time, and enhances comprehension. Say
                    goodbye to overwhelming textbooks and scattered notes—our
                    app ensures you focus on what truly matters, making learning
                    more efficient and enjoyable. Empower your studies with AI
                    and unlock a smarter way to learn!
                  </p>
                </SpotlightCard>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Link
              href="/create"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
            >
              <span>Start Creating</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

const features = [
  {
    title: "AI-Powered Learning",
    description:
      "Personalized learning experiences tailored to your needs using advanced AI algorithms.",
  },
  {
    title: "Interactive Content",
    description:
      "Engage with dynamic content that makes learning both effective and enjoyable.",
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
