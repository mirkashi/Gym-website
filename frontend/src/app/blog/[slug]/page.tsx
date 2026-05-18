import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft } from "lucide-react";

const posts: Record<string, { title: string; content: string; image: string; date: string; readTime: string; category: string; author: string }> = {
  "5-best-exercises-for-beginners": {
    title: "5 Best Exercises for Beginners",
    date: "Dec 15, 2024",
    readTime: "5 min",
    category: "Beginner",
    author: "Marcus Steel",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
    content: `Starting your fitness journey can be overwhelming with so many exercises and routines to choose from. Here are the 5 most effective exercises to build a solid foundation.

## 1. Squats
Squats are the king of all exercises. They work your quads, hamstrings, glutes, and core simultaneously. Start with bodyweight squats before adding weight.

## 2. Push-Ups
Push-ups build upper body and core strength. They require no equipment and can be modified for any fitness level. Master the standard push-up before moving to variations.

## 3. Deadlifts
Deadlifts are essential for building posterior chain strength. They work your back, glutes, hamstrings, and grip. Learn proper form before adding heavy weight.

## 4. Plank
Core stability is the foundation of all movement. The plank builds deep core strength that translates to every other exercise. Aim for 3 sets of 30-60 seconds.

## 5. Pull-Ups / Rows
Upper back strength is often neglected by beginners. If you cannot do pull-ups yet, start with assisted pull-ups or dumbbell rows.

## Getting Started
Begin with 3 sessions per week, allowing rest days between workouts. Focus on form over weight, and progressively increase resistance as you get stronger.`,
  },
  "nutrition-guide-for-muscle-gain": {
    title: "Complete Nutrition Guide for Muscle Gain",
    date: "Dec 10, 2024",
    readTime: "8 min",
    category: "Nutrition",
    author: "Sofia Reyes",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop",
    content: `Building muscle requires more than just lifting weights — nutrition plays an equally critical role in your success.

## Caloric Surplus
To build muscle, you need to eat more calories than you burn. Aim for a modest surplus of 250-500 calories per day to maximize muscle gain while minimizing fat gain.

## Protein Intake
Protein is the building block of muscle. Aim for 0.7-1 gram of protein per pound of body weight daily. Good sources include chicken, fish, eggs, lean beef, Greek yogurt, and legumes.

## Carbohydrates for Fuel
Carbs fuel your workouts and replenish glycogen stores. Focus on complex carbs like oats, rice, sweet potatoes, and quinoa.

## Healthy Fats
Fats support hormone production, including testosterone which is crucial for muscle building. Include avocado, nuts, olive oil, and fatty fish in your diet.

## Meal Timing
While overall daily intake matters most, consuming protein within 2 hours post-workout can optimize muscle protein synthesis.

## Supplementation
Creatine monohydrate is the most researched supplement for muscle gain. Whey protein can help hit protein targets. Everything else is secondary.`,
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <article className="min-h-screen bg-dark pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm font-montserrat mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <span className="inline-block bg-primary text-white text-xs font-montserrat px-3 py-1 rounded-full mb-4">{post.category}</span>
        <h1 className="font-bebas text-4xl sm:text-6xl text-white leading-tight">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-400 text-sm">
          <span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
          <span className="flex items-center gap-1"><Clock size={14} />{post.readTime} read</span>
          <span>By {post.author}</span>
        </div>

        <div className="relative h-64 sm:h-96 mt-8 rounded-2xl overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>

        <div className="mt-10 prose prose-invert max-w-none">
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return <h2 key={i} className="font-bebas text-2xl text-white mt-8 mb-3 text-primary">{para.slice(3)}</h2>;
            }
            return <p key={i} className="text-gray-300 leading-relaxed mb-4">{para}</p>;
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border text-center">
          <p className="text-gray-400 text-sm">Ready to put this into practice?</p>
          <Link href="/auth/register" className="inline-block mt-3 font-montserrat font-semibold bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors">
            Start Free Trial
          </Link>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "5-best-exercises-for-beginners" },
    { slug: "nutrition-guide-for-muscle-gain" },
    { slug: "hiit-vs-steady-state-cardio" },
    { slug: "recovery-and-sleep" },
    { slug: "weight-loss-myths" },
    { slug: "building-home-gym" },
  ];
}
