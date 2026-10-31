import { useState, useEffect } from "react";
import { X, Check, FileText } from "lucide-react";
import { SectionContent } from "../data/blogData.ts";

interface EditSectionModalProps {
  section: SectionContent | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: SectionContent) => void;
}

export function EditSectionModal({
  section,
  isOpen,
  onClose,
  onSave,
}: EditSectionModalProps) {
  const [title, setTitle] = useState("");
  const [textRaw, setTextRaw] = useState("");

  useEffect(() => {
    if (section) {
      setTitle(section.title);
      setTextRaw(section.paragraphs.join("\n\n"));
    }
  }, [section]);

  if (!isOpen || !section) return null;

  const handleSave = () => {
    const paragraphs = textRaw
      .split("\n\n")
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    onSave({
      ...section,
      title,
      paragraphs: paragraphs.length > 0 ? paragraphs : section.paragraphs,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95">
        
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-700" />
            <h4 className="text-base font-bold text-stone-900">
              Pegar / Editar Texto del PDF ({section.badge})
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4 text-xs font-sans">
          <div>
            <label className="block font-semibold uppercase tracking-wider text-stone-600 mb-1">
              Título del Punto
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-600 font-bold"
            />
          </div>

          <div>
            <label className="block font-semibold uppercase tracking-wider text-stone-600 mb-1">
              Contenido (Párrafos del PDF separados por doble salto de línea)
            </label>
            <textarea
              rows={8}
              value={textRaw}
              onChange={(e) => setTextRaw(e.target.value)}
              placeholder="Pega aquí el texto tal cual aparece en tu PDF..."
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-sky-600 font-sans"
            />
            <p className="text-[11px] text-stone-400 mt-1 font-sans">
              Tip: Puedes incluir corchetes como [1], [2] para enlazar automáticamente con las fuentes académicas de la derecha.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-xs transition-colors"
          >
            <Check className="w-4 h-4" />
            <span>Guardar en el Blog</span>
          </button>
        </div>

      </div>
    </div>
  );
}
