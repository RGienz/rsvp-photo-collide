export const profileContent = `
<h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 relative animate-slide-in-right">
  My Profile
  <span class="block w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></span>
</h2>
<div class="max-w-xl w-full mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-transform duration-500 hover:scale-[1.02] animate-fade-in">
  <img
    src="https://placehold.co/400x400/A78BFA/ffffff?text=Your+Image"
    alt="Profile Picture"
    class="rounded-full mx-auto w-48 h-48 object-cover border-4 border-purple-500 shadow-lg mb-8 transform transition-transform duration-500 hover:rotate-3 hover:scale-105"
    onerror="this.onerror=null;this.src='https://placehold.co/400x400/CCCCCC/333333?text=Image+Error';"
  />
  <h3 class="text-3xl font-bold text-gray-900 mb-4">Jane Doe, Creative Designer</h3>
  <p class="text-gray-700 leading-relaxed text-lg italic">
    "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
  </p>
  <p class="text-gray-600 mt-6 text-base">
    Passionate about crafting intuitive and beautiful user experiences. I thrive on bringing ideas to life through thoughtful design and clean code. My journey is driven by curiosity and a commitment to continuous learning.
  </p>
</div>
`;