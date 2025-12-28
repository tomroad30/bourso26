import { notFound } from 'next/navigation';

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <p className="text-gray-600">Article not found</p>
      </div>
    </div>
  );
}
