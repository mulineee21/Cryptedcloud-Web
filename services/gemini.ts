import { GoogleGenAI } from "@google/genai";

export const getSecurityAdvice = async (userQuery: string): Promise<string> => {
  try {
    // Configuración con tu clave API proporcionada
    const ai = new GoogleGenAI({ apiKey: "API_KEY" });
    const model = 'gemini-1.5-flash'; // Nota: gemini-3-flash-preview puede no estar disponible según la región/cuota, 1.5-flash es la recomendada.
    
    const systemInstruction = `Eres el Guardián de Seguridad de CryptedCloud, un servicio de almacenamiento y comunicación en la nube ultra-seguro basado en la red Tor.
    Tu personalidad es la de un experto en seguridad cyberpunk: conocedor, ligeramente críptico, pero extremadamente útil.
    Debes contestar preguntas sobre CryptedCloud, explicando que es un servicio que no guarda logs, usa encriptación AES-256 y funciona exclusivamente a través de nodos Tor para garantizar el anonimato.
    Habla sobre encriptación, privacidad, anonimato y OpSec.
    Mantén las respuestas concisas (máximo 3 oraciones).
    Responde siempre en Español.
    Si el usuario pregunta sobre actividades ilegales, rechaza estrictamente y pivota hacia la educación sobre privacidad y libertad digital.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: [{ role: 'user', parts: [{ text: userQuery }] }],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Señal encriptada perdida. Por favor reintente la transmisión de datos.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Conexión al Neural Relay fallida. El sistema está operando en modo de emergencia local.";
  }
};
