import { useState, useEffect } from "react";
import { Users, Edit3, Check, X, Camera, RotateCcw, Sparkles } from "lucide-react";
import { TeamMember, INITIAL_TEAM_MEMBERS } from "../data/blogData.ts";

export function TeamSection() {
  const [members, setMembers] = useState<TeamMember[]>(() => {
    try {
      const saved = localStorage.getItem("tarapoto_team_members");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_TEAM_MEMBERS;
  });

  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("tarapoto_team_members", JSON.stringify(members));
    } catch (e) {
      console.error(e);
    }
  }, [members]);

  const handleEditClick = (member: TeamMember) => {
    setEditingMember({ ...member });
    setIsEditorOpen(true);
  };

  const handleSaveMember = () => {
    if (!editingMember) return;
    setMembers((prev) =>
      prev.map((m) => (m.id === editingMember.id ? editingMember : m))
    );
    setIsEditorOpen(false);
    setEditingMember(null);
  };

  const handleResetDefaults = () => {
    if (window.confirm("¿Deseas restaurar los nombres y fotos predeterminados de los 6 integrantes?")) {
      setMembers(INITIAL_TEAM_MEMBERS);
      localStorage.removeItem("tarapoto_team_members");
    }
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingMember) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingMember({
          ...editingMember,
          photoUrl: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="video-equipo" className="py-16 lg:py-24 border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest font-mono text-amber-800 font-semibold mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-700" />
              Equipo de Investigación · 6 Integrantes
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
              Investigadores y Autores del Proyecto
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 font-serif italic">
              Estudio multidisciplinario desarrollado por estudiantes e investigadores en Tarapoto, San Martín.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetDefaults}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 bg-white border border-stone-300 rounded-lg shadow-sm transition-colors"
              title="Restaurar valores de fábrica"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer</span>
            </button>
          </div>
        </div>

        {/* 6 Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-stone-200 text-[11px] font-mono px-2.5 py-1 rounded">
                  Integrante #{index + 1}
                </div>
                <button
                  onClick={() => handleEditClick(member)}
                  className="absolute bottom-3 right-3 bg-amber-900/90 hover:bg-amber-800 text-white p-2 rounded-full shadow-md transition-all opacity-90 group-hover:opacity-100 flex items-center gap-1 text-xs px-3"
                  title="Editar nombre y foto de este integrante"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Editar</span>
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug group-hover:text-amber-900 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed font-sans line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                  <span>{member.institution}</span>
                  <span className="text-amber-700 font-medium">Tarapoto</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative footer note for user customization */}
        <div className="mt-12 p-4 bg-amber-50 border border-amber-200/80 rounded-xl flex items-center justify-between flex-wrap gap-4 text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Personalización de Integrantes:</strong> Puedes hacer clic en el botón <em>"Editar"</em> de cada tarjeta para colocar las fotos reales de tus 6 compañeros y sus nombres completos cuando desees. Los cambios se guardan automáticamente en tu navegador.
            </span>
          </div>
        </div>

      </div>

      {/* Modal to Edit Team Member */}
      {isEditorOpen && editingMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <h4 className="font-serif text-xl font-bold text-stone-900">
                Editar Datos del Integrante
              </h4>
              <button
                onClick={() => setIsEditorOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 py-4 text-sm">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-800"
                  placeholder="Ej: Juan Pérez Sánchez"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Rol o Cargo en el Proyecto
                </label>
                <input
                  type="text"
                  value={editingMember.role}
                  onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-800"
                  placeholder="Ej: Coordinador de Campo"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Institución Universitaria
                </label>
                <input
                  type="text"
                  value={editingMember.institution}
                  onChange={(e) => setEditingMember({ ...editingMember, institution: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-800"
                  placeholder="Ej: Universidad Nacional de San Martín"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Breve Biografía o Especialidad
                </label>
                <textarea
                  rows={2}
                  value={editingMember.bio}
                  onChange={(e) => setEditingMember({ ...editingMember, bio: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-800"
                  placeholder="Breve descripción del aporte del integrante..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Foto del Integrante
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-stone-100 overflow-hidden border border-stone-300 shrink-0">
                    <img
                      src={editingMember.photoUrl}
                      alt="Vista previa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <input
                      type="text"
                      value={editingMember.photoUrl}
                      onChange={(e) => setEditingMember({ ...editingMember, photoUrl: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-800 font-mono"
                      placeholder="URL de imagen (https://...)"
                    />
                    <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded border border-stone-300">
                      <Camera className="w-3.5 h-3.5 text-stone-600" />
                      <span>Subir archivo desde tu dispositivo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={() => setIsEditorOpen(false)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveMember}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-800 rounded-lg transition-colors"
              >
                <Check className="w-4 h-4" />
                <span>Guardar Cambios</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
