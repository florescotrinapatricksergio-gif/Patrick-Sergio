/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { TopNav } from "./components/TopNav.tsx";
import { ArticleHeader } from "./components/ArticleHeader.tsx";
import { SectionCard } from "./components/SectionCard.tsx";
import { SidebarReferencias } from "./components/SidebarReferencias.tsx";
import { SidebarTikTok } from "./components/SidebarTikTok.tsx";
import { IntegrantesSection } from "./components/IntegrantesSection.tsx";
import { ImageModal } from "./components/ImageModal.tsx";
import { ShareModal } from "./components/ShareModal.tsx";
import { EditSectionModal } from "./components/EditSectionModal.tsx";
import { Footer } from "./components/Footer.tsx";
import { SectionContent, INITIAL_SECTIONS, INITIAL_CITATIONS } from "./data/blogData.ts";

export default function App() {
  const [sections, setSections] = useState<SectionContent[]>(() => {
    try {
      const saved = localStorage.getItem("tarapoto_blog_sections_v2");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_SECTIONS;
  });

  const [activeSectionId, setActiveSectionId] = useState<string>("importancia");
  const [enlargedImage, setEnlargedImage] = useState<{ url: string; caption: string } | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<SectionContent | null>(null);
  const [highlightedCitationId, setHighlightedCitationId] = useState<number | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem("tarapoto_blog_sections_v2", JSON.stringify(sections));
    } catch (e) {
      console.error(e);
    }
  }, [sections]);

  const handleNavigate = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const handleCitationClick = (citationId: number) => {
    setHighlightedCitationId(citationId);
    const element = document.getElementById(`citation-${citationId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setTimeout(() => {
      setHighlightedCitationId(null);
    }, 3500);
  };

  const handleSaveSection = (updated: SectionContent) => {
    setSections((prev) =>
      prev.map((s) => (s.id === updated.id ? updated : s))
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-stone-900 font-sans antialiased selection:bg-sky-100 selection:text-sky-900">
      
      {/* Top Dual Bar Navigation matching image.png */}
      <TopNav
        activeSection={activeSectionId}
        onNavigate={handleNavigate}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Article Title & Metadata Bar matching image.png */}
        <ArticleHeader onShareClick={() => setIsShareOpen(true)} />

        {/* Two-Column Layout (Matching image.png exactly!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT / MAIN COLUMN: Los 5 puntos con 2 imágenes cada uno */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* 1. IMPORTANCIA */}
            <SectionCard
              section={sections[0]}
              onImageClick={(url, caption) => setEnlargedImage({ url, caption })}
              onEditSectionText={(s) => setEditingSection(s)}
              onCitationClick={handleCitationClick}
            />

            {/* 2. TESIS INTERNACIONAL */}
            <SectionCard
              section={sections[1]}
              onImageClick={(url, caption) => setEnlargedImage({ url, caption })}
              onEditSectionText={(s) => setEditingSection(s)}
              onCitationClick={handleCitationClick}
            />

            {/* 3. TESIS NACIONAL */}
            <SectionCard
              section={sections[2]}
              onImageClick={(url, caption) => setEnlargedImage({ url, caption })}
              onEditSectionText={(s) => setEditingSection(s)}
              onCitationClick={handleCitationClick}
            />

            {/* 4. CAUSAS */}
            <SectionCard
              section={sections[3]}
              onImageClick={(url, caption) => setEnlargedImage({ url, caption })}
              onEditSectionText={(s) => setEditingSection(s)}
              onCitationClick={handleCitationClick}
            />

            {/* 5. CONSECUENCIAS */}
            <SectionCard
              section={sections[4]}
              onImageClick={(url, caption) => setEnlargedImage({ url, caption })}
              onEditSectionText={(s) => setEditingSection(s)}
              onCitationClick={handleCitationClick}
            />

          </main>

          {/* RIGHT COLUMN: Referencias Bibliográficas y Video de TikTok */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* VI. Fuentes Académicas (Referencias Bibliográficas Vancouver) */}
            <SidebarReferencias
              citations={INITIAL_CITATIONS}
              highlightedId={highlightedCitationId}
            />

            {/* Link del video de TikTok oficial y vista previa interactiva */}
            <SidebarTikTok />

          </aside>

        </div>

        {/* AL ÚLTIMO: LOS INTEGRANTES (6 Integrantes con editor en vivo) */}
        <IntegrantesSection />

      </div>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal for Image Expansion */}
      <ImageModal
        imageUrl={enlargedImage?.url ?? null}
        caption={enlargedImage?.caption ?? ""}
        onClose={() => setEnlargedImage(null)}
      />

      {/* Share Blog Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      {/* Paste / Edit PDF text Modal */}
      <EditSectionModal
        section={editingSection}
        isOpen={Boolean(editingSection)}
        onClose={() => setEditingSection(null)}
        onSave={handleSaveSection}
      />

    </div>
  );
}
