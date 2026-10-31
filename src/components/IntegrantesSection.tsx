import { useState, useEffect } from "react";
import { Users, Edit3, Check, X, Camera, RotateCcw, Sparkles, GraduationCap } from "lucide-react";
import { TeamMember, INITIAL_TEAM_MEMBERS } from "../data/blogData.ts";

export function IntegrantesSection() {
  const [members, setMembers] = useState<TeamMember[]>(() => {
    try {
      const saved = localStorage.getItem("tarapoto_team_members_v2");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_TEAM_MEMBERS;
  });

  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("tarapoto_team_members_v2", JSON.stringify(members));
    } catch (e) {
      console.error(e);
    }
  }, [members]);

  const handleEditClick = (member: TeamMember) => {
    setEditingMember({ ...member });
    setIsModalOpen(true);
  };

  const handleSaveMember = () => {
    if (!editingMember) return;
    setMembers((prev) =>
      prev.map((m) => (m.id === editingMember.id ? editingMember : m))
    );
    setIsModalOpen(false);
    setEditingMember(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleResetDefaults = () => {
    if (window.confirm("¿Deseas restablecer los nombres y fotos predeterminados de los 6 integrantes?")) {
      setMembers(INITIAL_TEAM_MEMBERS);
      localStorage.removeItem("tarapoto_team_members_v2");
    }
  };

  return (
    <section id="integrantes" className="pt-12 pb-16 border-t border-stone-200 mt-12">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold flex items-center gap-1.5 mb-1.5">
            <Users className="w-4 h-4 text-sky-600" />
            EQUIPO DE INVESTIGACIÓN · 6 INTEGRANTES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Autores y Responsables del Estudio
          </h2>
          <p className="text-sm text-stone-500 font-sans mt-1">
            Universidad César Vallejo · Sede Tarapoto · Curso de Habilidades Comunicativas (Grupo 5)
          </p>
        </div>

        <button
          onClick={handleResetDefaults}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg shadow-2xs transition-colors shrink-0 self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5 text-stone-400" />
          <span>Restablecer datos</span>
        </button>
      </div>

      {/* 6 Members Grid (3 columns on lg, 2 on sm) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div
            key={member.id}
            className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:border-stone-300 hover:shadow-sm transition-all flex flex-col justify-between"
          >
            {/* Photo Header */}
            <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
              <img
                src={member.photoUrl}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded font-semibold">
                Integrante #{index + 1}
              </div>
              <button
                onClick={() => handleEditClick(member)}
                className="absolute bottom-2.5 right-2.5 bg-sky-700 hover:bg-sky-800 text-white p-2 rounded-full shadow-md transition-all flex items-center gap-1 text-xs px-2.5"
                title="Editar nombre y foto de este integrante"
              >
                <Edit3 className="w-3 h-3" />
                <span>Editar</span>
              </button>
            </div>

            {/* Info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-stone-900 group-hover:text-sky-700 transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-sky-800 mt-1 mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-sans">
                <span className="truncate">{member.institution}</span>
                <span className="text-sky-700 font-medium shrink-0 ml-2">Tarapoto</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Helpful Customization Callout */}
      <div className="mt-8 p-4 bg-sky-50/70 border border-sky-200/80 rounded-xl flex items-center gap-3 text-xs text-sky-900">
        <Sparkles className="w-4 h-4 text-sky-700 shrink-0" />
        <span>
          <strong>Personalización de Integrantes:</strong> Puedes hacer clic en el botón <strong>"Editar"</strong> de cada integrante para colocar los nombres reales de tus 6 compañeros y subir sus fotos cuando las tengas listas. Todo se guarda automáticamente en tu navegador.
        </span>
      </div>

      {/* Edit Member Modal */}
      {isModalOpen && editingMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h4 className="text-lg font-bold text-stone-900">
                Editar Datos del Integrante
              </h4>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 py-4 text-xs font-sans">
              <div>
                <label className="block font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Nombre Completo del Estudiante
                </label>
                <input
                  type="text"
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                  placeholder="Ej: Juan Pérez Sánchez"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Rol / Aporte en el Proyecto
                </label>
                <input
                  type="text"
                  value={editingMember.role}
                  onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                  placeholder="Ej: Redactor de Causas y Consecuencias"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Institución
                </label>
                <input
                  type="text"
                  value={editingMember.institution}
                  onChange={(e) => setEditingMember({ ...editingMember, institution: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                  placeholder="Ej: Universidad César Vallejo · Sede Tarapoto"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Breve descripción
                </label>
                <textarea
                  rows={2}
                  value={editingMember.bio}
                  onChange={(e) => setEditingMember({ ...editingMember, bio: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                  placeholder="Responsable de la investigación..."
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Foto de Perfil
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
                      className="w-full px-3 py-1.5 text-xs border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-600 font-mono"
                      placeholder="URL de imagen (https://...)"
                    />
                    <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded border border-stone-300">
                      <Camera className="w-3.5 h-3.5 text-stone-600" />
                      <span>Subir archivo de foto</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveMember}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-xs transition-colors"
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
