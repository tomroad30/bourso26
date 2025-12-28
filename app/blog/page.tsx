'use client';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Blog from '@/app/components/Blog';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Notre Blog</h1>
            <p className="text-lg text-gray-600">Découvrez nos conseils et astuces pour tirer le meilleur parti de BoursoBank</p>
          </div>
          <Blog />
        </div>
      </main>
      <Footer />
    </>
  );
}
