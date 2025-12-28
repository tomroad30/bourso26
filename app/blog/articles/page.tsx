import Link from 'next/link';

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <Link href="/blog" className="text-[#D20073] hover:underline font-medium text-sm mb-4 inline-block">
          ← Retour aux articles
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mt-4">Articles</h1>
      </div>
    </main>
  );
}
