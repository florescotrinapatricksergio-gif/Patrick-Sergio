import { X, ZoomOut } from "lucide-react";

interface ImageModalProps {
  imageUrl: string | null;
  caption: string;
  onClose: () => void;
}

export function ImageModal({ imageUrl, caption, onClose }: ImageModalProps) {
  if (!imageUrl) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
          title="Cerrar imagen"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-auto max-h-[75vh] flex items-center justify-center bg-black">
          <img
            src={imageUrl}
            alt={caption}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[75vh] object-contain"
          />
        </div>

        <div className="p-4 bg-stone-900 border-t border-stone-800 text-stone-200 text-sm flex items-center justify-between">
          <span className="font-semibold">{caption}</span>
          <span className="text-xs text-stone-400 font-mono">Alta resolución</span>
        </div>
      </div>
    </div>
  );
}
