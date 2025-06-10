<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'Home', id: 'home-section' },
  { name: 'Profile', id: 'profile-section' },
  { name: 'Photo', id: 'photo-section' },
  { name: 'About', id: 'about-section' },
  { name: 'Services', id: 'services-section' },
  { name: 'Portfolio', id: 'portfolio-section' },
  { name: 'Team', id: 'team-section' },
  { name: 'Blog', id: 'blog-section' },
  { name: 'FAQ', id: 'faq-section' },
  { name: 'Contact', id: 'contact-section' },
  { name: 'Testimonials', id: 'testimonials-section' },
];

const activeSection = ref<string>('home-section');

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  navItems.forEach((item) => {
    const section = document.getElementById(item.id);
    if (section) observer.observe(section);
  });
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans antialiased relative">
    <nav class="fixed top-1/2 -translate-y-1/2 left-6 z-50 bg-white shadow-xl p-3 rounded-full hidden md:flex flex-col items-center space-y-3 border border-gray-100">
      <template v-for="item in navItems" :key="item.id">
        <a
          @click.prevent="scrollToSection(item.id)"
          :href="`#${item.id}`"
          class="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out group"
          :class="{ 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-lg': activeSection === item.id, 'text-gray-700 hover:bg-gray-100': activeSection !== item.id }"
        >
          <span class="text-xl">
            <template v-if="item.name === 'Home'">🏠</template>
            <template v-else-if="item.name === 'Profile'">🧑‍💻</template>
            <template v-else-if="item.name === 'Photo'">📸</template>
            <template v-else-if="item.name === 'About'">ℹ️</template>
            <template v-else-if="item.name === 'Services'">🛠️</template>
            <template v-else-if="item.name === 'Portfolio'">🗂️</template>
            <template v-else-if="item.name === 'Team'">👥</template>
            <template v-else-if="item.name === 'Blog'">✍️</template>
            <template v-else-if="item.name === 'FAQ'">❓</template>
            <template v-else-if="item.name === 'Contact'">📧</template>
            <template v-else-if="item.name === 'Testimonials'">💬</template>
          </span>
          <span class="absolute left-full ml-4 whitespace-nowrap bg-gray-800 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {{ item.name }}
          </span>
        </a>
      </template>
    </nav>

    <nav class="fixed bottom-0 left-0 w-full z-50 bg-white shadow-2xl md:hidden flex justify-around items-center py-3 border-t border-gray-100">
      <template v-for="item in navItems" :key="item.id">
        <a
          @click.prevent="scrollToSection(item.id)"
          :href="`#${item.id}`"
          class="flex flex-col items-center justify-center text-xs p-2 rounded-lg transition-all duration-300 ease-in-out"
          :class="{ 'text-purple-700 font-bold bg-purple-50': activeSection === item.id, 'text-gray-600 hover:bg-gray-50': activeSection !== item.id }"
        >
          <span class="text-xl mb-1">
            <template v-if="item.name === 'Home'">🏠</template>
            <template v-else-if="item.name === 'Profile'">🧑‍💻</template>
            <template v-else-if="item.name === 'Photo'">📸</template>
            <template v-else-if="item.name === 'About'">ℹ️</template>
            <template v-else-if="item.name === 'Services'">🛠️</template>
            <template v-else-if="item.name === 'Portfolio'">🗂️</template>
            <template v-else-if="item.name === 'Team'">👥</template>
            <template v-else-if="item.name === 'Blog'">✍️</template>
            <template v-else-if="item.name === 'FAQ'">❓</template>
            <template v-else-if="item.name === 'Contact'">📧</template>
            <template v-else-if="item.name === 'Testimonials'">💬</template>
          </span>
          {{ item.name }}
        </a>
      </template>
    </nav>

    <main class="pt-0 md:pl-32 lg:pl-48">
      <section id="home-section" class="section bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white min-h-screen flex items-center justify-center">
        <div class="text-center space-y-6 px-4 py-16 md:py-24">
          <h1 class="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-2xl animate-fade-in-down">
            Welcome to Our <br class="md:hidden">Awesome Page!
          </h1>
          <p class="text-lg md:text-xl max-w-3xl mx-auto opacity-90 animate-fade-in-up">
            Discover a seamless experience as you navigate through our meticulously crafted sections.
          </p>
          <a @click.prevent="scrollToSection('profile-section')" href="#profile-section" class="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-bounce-in">
            Get Started
          </a>
        </div>
      </section>

      <section id="profile-section" class="section bg-white text-center py-20 px-4">
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
      </section>

      <section id="photo-section" class="section bg-gray-900 text-white py-20 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-12 relative animate-slide-in-left">
          Visual Journey
          <span class="block w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          <div class="group relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in-up">
            <img
              src="https://placehold.co/600x450/4A5568/CBD5E0?text=Abstract+Lines"
              alt="Photo 1"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p class="text-white text-xl font-semibold transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">Abstract Lines</p>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in-up delay-100">
            <img
              src="https://placehold.co/600x450/2C3E50/ECF0F1?text=Urban+Exploration"
              alt="Photo 2"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p class="text-white text-xl font-semibold transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">Urban Exploration</p>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in-up delay-200">
            <img
              src="https://placehold.co/600x450/7B3423/FEEBCF?text=Nature's+Peace"
              alt="Photo 3"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p class="text-white text-xl font-semibold transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">Nature's Peace</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-section" class="section bg-white py-20 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 relative animate-slide-in-right">
          About Us
          <span class="block w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div class="max-w-3xl text-center text-lg text-gray-700 leading-relaxed space-y-6 animate-fade-in">
          <p>
            We are a team of passionate creators dedicated to building exceptional digital experiences. Our focus is on blending innovative design with robust functionality to deliver solutions that truly make an impact.
          </p>
          <p>
            Our mission is to empower businesses and individuals alike by providing intuitive, efficient, and visually stunning applications. We believe in the power of design to solve complex problems and connect with users on a deeper level.
          </p>
          <p>
            Committed to excellence and continuous improvement, we strive to exceed expectations and foster long-lasting relationships with our clients. Let's build something amazing together!
          </p>
        </div>
      </section>

      <section id="services-section" class="section bg-blue-50 py-20 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 relative animate-slide-in-left">
          Our Services
          <span class="block w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
            <p class="text-gray-700">Crafting responsive and high-performance websites tailored to your needs.</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
            <p class="text-gray-700">Creating intuitive and aesthetically pleasing user interfaces for seamless experiences.</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Mobile App Development</h3>
            <p class="text-gray-700">Building native and cross-platform mobile applications for iOS and Android.</p>
          </div>
        </div>
      </section>

      <section id="portfolio-section" class="section bg-gradient-to-br from-green-500 to-teal-500 text-white py-20 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-12 relative animate-slide-in-right">
          Our Portfolio
          <span class="block w-20 h-1 bg-white mx-auto mt-4 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          <div class="bg-gray-800 p-6 rounded-xl shadow-lg group transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <img src="https://placehold.co/400x250/2D3748/A0AEC0?text=Project+Alpha" alt="Project Alpha" class="rounded-lg mb-4 transform group-hover:scale-110 transition-transform duration-300 ease-in-out">
            <h3 class="text-xl font-bold text-white mb-2">Project Alpha</h3>
            <p class="text-gray-300 text-sm">A modern e-commerce platform with intuitive user flows.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-xl shadow-lg group transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <img src="https://placehold.co/400x250/2D3748/A0AEC0?text=Project+Beta" alt="Project Beta" class="rounded-lg mb-4 transform group-hover:scale-110 transition-transform duration-300 ease-in-out">
            <h3 class="text-xl font-bold text-white mb-2">Project Beta</h3>
            <p class="text-gray-300 text-sm">Interactive dashboard for data visualization and analytics.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-xl shadow-lg group transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <img src="https://placehold.co/400x250/2D3748/A0AEC0?text=Project+Gamma" alt="Project Gamma" class="rounded-lg mb-4 transform group-hover:scale-110 transition-transform duration-300 ease-in-out">
            <h3 class="text-xl font-bold text-white mb-2">Project Gamma</h3>
            <p class="text-gray-300 text-sm">Mobile application focused on health and wellness tracking.</p>
          </div>
        </div>
      </section>

      <section id="team-section" class="section bg-purple-50 py-20 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 relative animate-slide-in-left">
          Meet Our Team
          <span class="block w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          <div class="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <img src="https://placehold.co/150x150/A0AEC0/4A5568?text=Team+Member+1" alt="Team Member 1" class="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-purple-200 transition-all duration-300 ease-in-out group-hover:border-purple-500">
            <h3 class="text-xl font-bold text-gray-900">Alice Johnson</h3>
            <p class="text-purple-600 transition-colors duration-300 ease-in-out group-hover:text-purple-800">Lead Developer</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <img src="https://placehold.co/150x150/A0AEC0/4A5568?text=Team+Member+2" alt="Team Member 2" class="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-purple-200 transition-all duration-300 ease-in-out group-hover:border-purple-500">
            <h3 class="text-xl font-bold text-gray-900">Bob Williams</h3>
            <p class="text-purple-600 transition-colors duration-300 ease-in-out group-hover:text-purple-800">UI/UX Designer</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <img src="https://placehold.co/150x150/A0AEC0/4A5568?text=Team+Member+3" alt="Team Member 3" class="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-purple-200 transition-all duration-300 ease-in-out group-hover:border-purple-500">
            <h3 class="text-xl font-bold text-gray-900">Charlie Brown</h3>
            <p class="text-purple-600 transition-colors duration-300 ease-in-out group-hover:text-purple-800">Marketing Specialist</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <img src="https://placehold.co/150x150/A0AEC0/4A5568?text=Team+Member+4" alt="Team Member 4" class="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-purple-200 transition-all duration-300 ease-in-out group-hover:border-purple-500">
            <h3 class="text-xl font-bold text-gray-900">Diana Prince</h3>
            <p class="text-purple-600 transition-colors duration-300 ease-in-out group-hover:text-purple-800">Project Manager</p>
          </div>
        </div>
      </section>

      <section id="blog-section" class="section bg-gray-100 py-20 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 relative animate-slide-in-right">
          Our Latest Blog
          <span class="block w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
            <img src="https://placehold.co/600x350/C6F6D5/2D3748?text=Blog+Post+1" alt="Blog Post 1" class="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">The Future of Web Design</h3>
              <p class="text-gray-700 text-sm mb-4">Exploring new trends and technologies shaping the web.</p>
              <a href="#" class="text-blue-600 hover:underline font-semibold transition-colors duration-300 ease-in-out hover:text-blue-800">Read More &rarr;</a>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
            <img src="https://placehold.co/600x350/FEEBCF/7B3423?text=Blog+Post+2" alt="Blog Post 2" class="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Mastering Vue 3 Composables</h3>
              <p class="text-gray-700 text-sm mb-4">A deep dive into building reusable logic in Vue.js applications.</p>
              <a href="#" class="text-blue-600 hover:underline font-semibold transition-colors duration-300 ease-in-out hover:text-blue-800">Read More &rarr;</a>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
            <img src="https://placehold.co/600x350/EBF8FF/2B6CB0?text=Blog+Post+3" alt="Blog Post 3" class="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">The Power of Tailwind CSS</h3>
              <p class="text-gray-700 text-sm mb-4">How utility-first CSS frameworks boost your development workflow.</p>
              <a href="#" class="text-blue-600 hover:underline font-semibold transition-colors duration-300 ease-in-out hover:text-blue-800">Read More &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq-section" class="section bg-white py-20 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 relative animate-slide-in-left">
          Frequently Asked Questions
          <span class="block w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div class="max-w-3xl w-full mx-auto space-y-6">
          <div class="bg-gray-50 p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100">
            <h3 class="text-xl font-bold text-gray-900 mb-2">What services do you offer?</h3>
            <p class="text-gray-700">We offer comprehensive web development, UI/UX design, and mobile app development services.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100">
            <h3 class="text-xl font-bold text-gray-900 mb-2">How can I request a quote?</h3>
            <p class="text-gray-700">You can fill out the contact form on our contact page, and we'll get back to you within 24 hours.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Do you provide ongoing support?</h3>
            <p class="text-gray-700">Yes, we offer various support and maintenance packages to ensure your project runs smoothly.</p>
          </div>
        </div>
      </section>

      <section id="testimonials-section" class="section bg-indigo-500 text-white py-20 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-12 relative animate-slide-in-right">
          What Our Clients Say
          <span class="block w-20 h-1 bg-white mx-auto mt-4 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <div class="bg-indigo-600 p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <p class="text-lg italic mb-4">"The team delivered an outstanding website that exceeded all our expectations. Professional, responsive, and truly creative!"</p>
            <div class="flex items-center">
              <img src="https://placehold.co/60x60/A0AEC0/4A5568?text=Client+1" alt="Client 1" class="rounded-full w-12 h-12 object-cover mr-4 border-2 border-white transition-all duration-300 ease-in-out">
              <div>
                <p class="font-bold text-lg">John Smith</p>
                <p class="text-indigo-200 text-sm">CEO, InnovateTech</p>
              </div>
            </div>
          </div>
          <div class="bg-indigo-600 p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <p class="text-lg italic mb-4">"Their design expertise is unparalleled. Our new mobile app has received rave reviews for its usability and sleek design."</p>
            <div class="flex items-center">
              <img src="https://placehold.co/60x60/A0AEC0/4A5568?text=Client+2" alt="Client 2" class="rounded-full w-12 h-12 object-cover mr-4 border-2 border-white transition-all duration-300 ease-in-out">
              <div>
                <p class="font-bold text-lg">Maria Garcia</p>
                <p class="text-indigo-200 text-sm">Founder, HealthFlow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-section" class="section bg-white py-20 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 relative animate-slide-in-left">
          Get in Touch
          <span class="block w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div class="max-w-2xl w-full mx-auto bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-xl hover:border-gray-200">
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" id="name" name="name" class="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out" placeholder="Your Name">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out" placeholder="your@example.com">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" name="message" rows="5" class="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </main>

    <footer class="bg-gray-900 text-gray-300 text-center p-6 text-sm">
      <p>&copy; 2025 Awesome Single Page App. All rights reserved.</p>
      <p class="mt-2">Made with ❤️ by Your Name/Company</p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-x: hidden; /* Prevent horizontal scroll from animations */
}

.section {
  min-height: 100vh;
  padding: 6rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Keyframe Animations (no changes here as they are already smooth) */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounceIn {
  0% { transform: scale(0.1); opacity: 0; }
  60% { transform: scale(1.1); opacity: 1; }
  80% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}


.animate-fade-in-down {
  animation: fadeInDown 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.animate-bounce-in {
  animation: bounceIn 1s ease-out forwards;
  animation-delay: 0.5s;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

/* Animation delays for staggered appearance */
.animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
.animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
.animate-fade-in-up.delay-300 { animation-delay: 0.3s; }

</style>