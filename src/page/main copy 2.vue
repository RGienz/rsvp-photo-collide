// main.vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Import content from separate files
import { homeContent, homeImages } from '../data/Home'; // Import homeImages
import { profileContent } from '../data/Profile';
import { photoContent } from '../data/Photo';
import { aboutContent } from '../data/about';
import { servicesContent } from '../data/Service';
import { portfolioContent } from '../data/Porfolio';
import { teamContent } from '../data/Tea';
import { blogContent } from '../data/Blog';
import { faqContent } from '../data/FAQ';
import { contactContent } from '../data/Contact';
import { testimonialsContent } from '../data/Testimonials';


interface NavItem {
  name: string;
  id: string;
  content: string; // Add a content property to store the HTML string
}

const navItems: NavItem[] = [
  { name: 'Home', id: 'home-section', content: homeContent },
  { name: 'Profile', id: 'profile-section', content: profileContent },
  { name: 'Photo', id: 'photo-section', content: photoContent },
  { name: 'About', id: 'about-section', content: aboutContent },
  { name: 'Services', id: 'services-section', content: servicesContent },
  { name: 'Portfolio', id: 'portfolio-section', content: portfolioContent },
  { name: 'Team', id: 'team-section', content: teamContent },
  { name: 'Blog', id: 'blog-section', content: blogContent },
  { name: 'FAQ', id: 'faq-section', content: faqContent },
  { name: 'Contact', id: 'contact-section', content: contactContent },
  { name: 'Testimonials', id: 'testimonials-section', content: testimonialsContent },
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
    <nav class="fixed top-1/2 -translate-y-1/2 left-6 z-50 bg-transparent p-3 rounded-full hidden md:flex flex-col items-center space-y-3">
      <template v-for="item in navItems" :key="item.id">
        <a
          @click.prevent="scrollToSection(item.id)"
          :href="`#${item.id}`"
          class="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out group"
          :class="{ 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-lg': activeSection === item.id, 'text-gray-700 hover:bg-gray-100': activeSection !== item.id }"
        >
          <span class="text-xl">
            <template v-if="item.name === 'Home'">🏠</template>
            <template v-else-if="item.name === 'Profile'">🧸</template>
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

    <!-- <nav class="fixed bottom-0 left-0 w-full z-50 bg-white shadow-2xl md:hidden flex justify-around items-center py-3 border-t border-gray-100"> -->
    <nav class="fixed bottom-0 left-0 w-full z-50 bg-transparent md:hidden flex justify-around items-center py-3 ">
      <template v-for="item in navItems" :key="item.id">
        <a
          @click.prevent="scrollToSection(item.id)"
          :href="`#${item.id}`"
          class="flex flex-col items-center justify-center text-xs p-2 rounded-lg transition-all duration-300 ease-in-out"
          :class="{ 'text-purple-700 font-bold bg-purple-50': activeSection === item.id, 'text-gray-600 hover:bg-gray-50': activeSection !== item.id }"
        >
          <span class="text-xl mb-1">
            <template v-if="item.name === 'Home'">🏠</template>
            <template v-else-if="item.name === 'Profile'">🧸</template>
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

    <!-- <main class="pt-0 md:pl-32 lg:pl-48"> -->
    <main class="pt-0 md:pl-32 lg:pl-0 bg-green-400">
      <template v-for="item in navItems" :key="item.id">
        <section :id="item.id" class="section" :class="{
          'bg-gray-100': item.name === 'Home',
          'bg-white text-center': item.name === 'Profile',
          'bg-gray-900 text-white': item.name === 'Photo',
          'bg-white': item.name === 'About',
          'bg-blue-50': item.name === 'Services',
          'bg-gradient-to-br from-green-500 to-teal-500 text-white': item.name === 'Portfolio',
          'bg-purple-50': item.name === 'Team',
          'bg-gray-200': item.name === 'Blog',
          'bg-white-100': item.name === 'FAQ',
          'bg-indigo-500 text-white': item.name === 'Testimonials',
          'bg-white-200': item.name === 'Contact'
        }">
            <div v-if="item.id === 'home-section'">
            <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 relative animate-slide-in-right text-center">
              Sample
              <span class="block w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></span>
            </h2>
            <div class="w-full max-w-xl mx-auto"> <div v-for="(image, index) in homeImages" :key="index"
                   class="relative overflow-hidden rounded-lg shadow-lg group mb-6 animate-fade-in-up"
                   :style="{ 'animation-delay': `${index * 0.1}s` }">
                <img :src="image.src" :alt="image.alt"
                     class="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105 aspect-[3/4]" /> <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p class="text-white text-lg font-semibold">{{ image.title }}</p>
                </div>
              </div>
            </div>
            </div>
            <div v-else v-html="item.content"></div>
        </section>
      </template>
    </main>

    <footer class="bg-gray-900 text-gray-300 text-center p-6 text-sm">
      <p>&copy; 2025 Awesome Single Page App. All rights reserved.</p>
      <p class="mt-2">Made with ❤️ by Your Name/Company</p>
    </footer>
  </div>
</template>

<style>
/* Import Google Fonts for 'Inter' */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-x: hidden;
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

/* Keyframe Animations for entrance effects */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  80% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Application of Keyframe Animations */
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

/* Animation delays for staggered appearance (e.g., in photo gallery) */
.animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
.animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
.animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
</style>