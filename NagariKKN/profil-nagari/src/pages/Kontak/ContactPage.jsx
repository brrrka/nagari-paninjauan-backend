// src/pages/ContactPage.jsx
import React from 'react';

function ContactPage() {
  const gmapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.892385434135!2d100.1746736939179!3d-0.23496557491800532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd56b36c3f15fbb%3A0xf7e2ad434bd72862!2sKtr.%20Nag.%20PANINJAUAN!5e0!3m2!1sid!2sid!4v1753371184087!5m2!1sid!2sid";
  const gmapsDirectionUrl = "https://maps.app.goo.gl/wkw4gFRw1zxtsmYB8";

  return (
    <main className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-8 font-bold text-nagari-brown font-serif">Hubungi Kami</h1>
          <p className="text-gray-600 mt-2 text-lg">Kami siap melayani dan memberikan informasi yang Anda butuhkan.</p>
        </div>

        {/* Informasi Kontak */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Email Card (Sekarang bisa diklik) */}
          <a href="mailto:kontak@paninjauan.go.id" className="block bg-gray-50 p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-nagari-green mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-nagari-brown mb-2">Email</h3>
            <p className="text-gray-600 hover:text-nagari-green">
              kontak@paninjauan.go.id
            </p>
          </a>

          {/* WhatsApp Card (Sekarang bisa diklik) */}
          <a href="https://wa.me/6281236547890" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-nagari-green mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-nagari-brown mb-2">WhatsApp</h3>
            <p className="text-gray-600 hover:text-nagari-green">
              +62 812-3654-7890
            </p>
          </a>

          {/* Lokasi Card */}
          <a href={gmapsDirectionUrl} target="_blank" rel="noopener noreferrer" className="block bg-gray-50 p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-nagari-green mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-nagari-brown mb-2">Lokasi</h3>
            <p className="text-gray-600">Kantor Wali Nagari Paninjauan</p>
          </a>
        </div>
        
        {/* Google Maps Embed */}
        <div className="mt-16 rounded-xl shadow-lg overflow-hidden">
          <iframe
            src={gmapsEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Kantor Wali Nagari Paninjauan"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;