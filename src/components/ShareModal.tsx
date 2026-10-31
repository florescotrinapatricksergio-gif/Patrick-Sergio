import { useState } from "react";
import { X, Copy, Check, MessageSquare } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Revisa este artículo sobre "Dieta mediterránea en la prevención de cardiopatías en adultos de Tarapoto": ${currentUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <h4 className="text-base font-bold text-stone-900">
            Compartir Artículo Científico
          </h4>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4">
          <p className="text-xs text-stone-600 font-sans leading-relaxed">
            Comparte este blog con tus compañeros, profesores o en grupos de la universidad:
          </p>

          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full px-3 py-2 text-xs font-mono bg-stone-100 border border-stone-300 rounded-lg select-all"
            />
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors shrink-0"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "¡Copiado!" : "Copiar"}</span>
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={handleShareWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-2xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Compartir vía WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
