export default function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "MD SHAZAN MAHMUD ARPON",
    "url": "https://arpon007.me",
    "image": "https://arpon007.me/profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/md-shazan-mahmud-arpon/",
      "https://github.com/arpondark"
    ],
    "jobTitle": "Fullstack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Developer"
    },
    "description": "Fullstack Developer | IoT Enthusiast | AI Passionate | Building innovative web solutions with modern technologies",
    "knowsAbout": [
      "Web Development",
      "IoT Development",
      "Artificial Intelligence",
      "React",
      "Next.js",
      "Three.js",
      "TypeScript",
      "Node.js"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "United International University",
      "sameAs": "https://www.uiu.ac.bd/"
    },
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Bangladesh"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
} 