"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MessageCircle, Mail, MapPin, Check } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("zeal@zealav.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: "Inquiry",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "ZealAV Website",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Form submission failed", result);
        setStatus("idle");
        alert("Something went wrong. Please try again or use our email directly.");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("Something went wrong. Please try again or use our email directly.");
    }
  };

  return (
    <section id="contact" className="py-0 md:py-0 px-0 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto border-t-2 border-black pt-24 relative">
        <div className="absolute right-0 top-0 w-8 h-8 border-r-2 border-b-2 border-black" />

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">{t("title")}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Details */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <button onClick={handleCopyEmail} className="w-full text-left group flex items-start gap-6 p-6 border-2 border-black/10 hover:border-black rounded-xl transition-all duration-300 cursor-pointer">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-all ${copied ? 'bg-green-500 text-white' : 'bg-black text-white'}`}>
                {copied ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-1 transition-colors ${copied ? 'text-green-500' : ''}`}>{copied ? "Copied!" : t("email_us")}</h3>
                <p className="text-gray-600 font-medium">zeal@zealav.com</p>
              </div>
            </button>

            <a href="https://wa.me/35799499728" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-6 p-6 border-2 border-black/10 hover:border-black rounded-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{t("whatsapp")}</h3>
                <p className="text-gray-600 font-medium">+357 99 499728</p>
              </div>
            </a>

            <div className="group flex items-start gap-6 p-6 border-2 border-black/10 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-gray-300 text-black rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{t("head_office")}</h3>
                <p className="text-gray-600 font-medium">Limassol Centre Block B Office 405,<br />2 Riga Fereou Street,<br />Limassol 3095,<br />Cyprus</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-black text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Design Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />

            <h3 className="text-3xl font-bold mb-8">{t("send_message")}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-400">{t("full_name")}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-0 py-3 border-b-2 border-white/20 focus:outline-none focus:border-white bg-transparent text-white transition-colors placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-400">{t("email_address")}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-0 py-3 border-b-2 border-white/20 focus:outline-none focus:border-white bg-transparent text-white transition-colors placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-400">{t("message")}</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-0 py-3 border-b-2 border-white/20 focus:outline-none focus:border-white bg-transparent text-white resize-none transition-colors placeholder:text-gray-600"
                  placeholder="..."
                />
              </div>
              <div className="flex items-center gap-6 mt-8">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? t("button_sending") : t("button_send")}
                </button>
                {status === "success" && (
                  <span className="text-green-400 font-bold">{t("success_msg")}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
