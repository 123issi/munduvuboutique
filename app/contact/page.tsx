'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          formId: 'contact-form',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative h-64 bg-gradient-to-r from-blue-600 to-red-500">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20customer%20service%20and%20contact%20center%20with%20friendly%20staff%20helping%20customers%2C%20professional%20business%20communication%20environment%2C%20bright%20welcoming%20atmosphere%20with%20blue%20white%20red%20color%20scheme&width=1200&height=300&seq=contactbanner&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contactez-nous
              </h1>
              <p className="text-xl">
                Notre équipe est là pour vous aider - Réponse rapide garantie
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Parlons de vos besoins
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Que vous ayez une question sur nos produits, besoin d'aide pour une commande ou souhaitez simplement nous dire bonjour, n'hésitez pas à nous contacter !
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                    <i className="ri-map-pin-fill text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      42 Petit Marché, Rue Maréchal Leclerc<br />
                      Saint-Denis, La Réunion
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                    <i className="ri-whatsapp-fill text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/262693639938"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors cursor-pointer"
                    >
                      06 93 63 99 38
                    </a>
                    <p className="text-sm text-gray-500">Réponse rapide garantie</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full flex-shrink-0">
                    <i className="ri-mail-fill text-red-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a 
                      href="mailto:munduvuapetit@gmail.com"
                      className="text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                    >
                      munduvuapetit@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                    <i className="ri-facebook-fill text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Facebook</h3>
                    <a 
                      href="https://facebook.com/beatrice.munduvu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      Beatrice Munduvu
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0">
                    <i className="ri-global-fill text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Site Web</h3>
                    <a 
                      href="https://www.munduvuapetitprix.boutique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors cursor-pointer"
                    >
                      munduvuapetitprix.boutique
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <i className="ri-truck-fill text-green-600 text-2xl mr-3"></i>
                  <h3 className="font-semibold text-green-800">Livraison Gratuite</h3>
                </div>
                <p className="text-green-700">
                  Profitez de la livraison gratuite sur toutes vos commandes à La Réunion. 
                  Commandez dès maintenant !
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Envoyez-nous un message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-circle-fill text-green-600 text-xl mr-3"></i>
                    <p className="text-green-800">
                      Merci ! Votre message a été envoyé avec succès. Nous vous répondrons rapidement.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-error-warning-fill text-red-600 text-xl mr-3"></i>
                    <p className="text-red-800">
                      Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                    </p>
                  </div>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="Commande">Question sur une commande</option>
                    <option value="Produit">Information produit</option>
                    <option value="Livraison">Question livraison</option>
                    <option value="Retour">Retour/Échange</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-vertical"
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 caractères
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Notre Localisation
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.9845989624477!2d55.45063531475654!3d-20.88240!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827e5c5a8e6b3d%3A0x8b9c7b9c7b9c7b9c!2sRue%20Maréchal%20Leclerc%2C%20Saint-Denis%2C%20La%20Réunion!5e0!3m2!1sfr!2s!4v1234567890123!5m2!1sfr!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Munduvu à petit prix"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}