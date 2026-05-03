import React from 'react';
import { Instagram } from 'lucide-react';
const igPosts = [
  {
    type: 'video',
    url: '/videos/mallu-1.mp4',
  },
  {
    type: 'video',
    url: '/videos/mallu-2.mp4',
  },
  {
    type: 'video',
    url: '/videos/mallu-3.mp4',
  },
  {
    type: 'video',
    url: '/videos/Video-523.mp4',
  },
  {
    type: 'video',
    url: '/videos/Video-711.mp4',
  },
  {
    type: 'video',
    url: '/videos/207cb5d4-8f3d-4197-aee8-a6d34c5185ae.mp4',
  },
];

export function InstagramGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-12">
          <Instagram size={32} className="text-[#C9A961] mb-4" />
          <h2 className="text-3xl font-serif text-[#1a1a1a]">
            @annubeautysalon
          </h2>
          <p className="text-gray-500 mt-2">
            Follow for daily inspiration and behind the scenes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {igPosts.map((post, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-xl block bg-gray-100 shadow-sm"
            >
              {post.type === 'video' ? (
                <video
                  src={post.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[1.02]"
                  style={{ imageRendering: 'high-quality' }}
                />
              ) : (
                <img
                  src={post.url}
                  alt="Instagram post"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[1.02]"
                />
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}