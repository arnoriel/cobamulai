import axios from 'axios';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

// Data bisnis untuk context AI
const BUSINESS_CONTEXT = `
Nama Bisnis: cobamulai.
Lokasi: Bandung, Jawa Barat.
Layanan: 
1. AI & Automation (Chatbot cerdas, otomatisasi sistem).
2. SaaS Development (Membangun produk digital scalable).
3. Premium Web Design (UI/UX futuristik, SEO optimized).
Value: Keamanan enterprise grade, arsitektur cloud-native, support 24/7.
Tone: Profesional, futuristik, membantu, dan teknis namun mudah dimengerti.

Instruksi Format:
- Gunakan bullet points atau penomoran untuk daftar.
- Gunakan **bold** untuk kata kunci penting.
- Gunakan baris baru (newline) antar poin agar tidak menumpuk.
- Jangan gunakan heading (#) yang terlalu besar.
`;

export const getAIResponse = async (userMessage: string) => {
  if (!OPENROUTER_API_KEY) {
    throw new Error('API Key tidak ditemukan');
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'arcee-ai/trinity-large-preview:free',
        messages: [
          { 
            role: 'system', 
            content: `Anda adalah asisten virtual cobamulai. ${BUSINESS_CONTEXT} Jawablah dengan singkat dan ramah.` 
          },
          { role: 'user', content: userMessage }
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("AI Error:", error);
    return "Maaf, saya sedang mengalami gangguan teknis. Bisa hubungi kami via WhatsApp?";
  }
};