"use client"

export default function ContactSection() {
  return (
    <section id="contact" className="h-screen flex flex-col justify-center items-center bg-black text-white px-6">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-8">Let’s build something amazing together!</p>
      <a href="mailto:dhruv@example.com" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">
        Say Hello
      </a>
    </section>
  )
}
