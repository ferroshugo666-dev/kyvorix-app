export default function Home() {
  const aiTools = [
    { name: "Summarize PDF", desc: "Summary in seconds", tag: "NEW" },
    { name: "Translate PDF", desc: "Keeps layout", tag: "AI" },
    { name: "Chat with PDF", desc: "Ask anything", tag: "AI" },
    { name: "PDF to Markdown", desc: "For LLMs & Notion", tag: "AI" },
    { name: "OCR PDF", desc: "Scan to text", tag: "" },
    { name: "Compare PDF", desc: "Find differences", tag: "" },
  ]
  const tools = [
    { name: "Merge PDF", desc: "Combine PDFs" },
    { name: "Split PDF", desc: "Separate pages" },
    { name: "Remove pages", desc: "Delete pages" },
    { name: "Extract pages", desc: "Get pages" },
    { name: "Organize PDF", desc: "Reorder" },
    { name: "Rotate PDF", desc: "Rotate pages" },
    { name: "Compress PDF", desc: "Reduce size" },
    { name: "Repair PDF", desc: "Fix PDF" },
    { name: "Page numbers", desc: "Add numbers" },
    { name: "Watermark", desc: "Add watermark" },
    { name: "JPG to PDF", desc: "" },
    { name: "Word to PDF", desc: "" },
    { name: "PowerPoint to PDF", desc: "" },
    { name: "Excel to PDF", desc: "" },
    { name: "HTML to PDF", desc: "" },
    { name: "PDF to JPG", desc: "" },
    { name: "PDF to Word", desc: "" },
    { name: "PDF to PowerPoint", desc: "" },
    { name: "PDF to Excel", desc: "" },
    { name: "PDF to PDF/A", desc: "" },
    { name: "Protect PDF", desc: "" },
    { name: "Unlock PDF", desc: "" },
    { name: "Sign PDF", desc: "" },
    { name: "Redact PDF", desc: "Hide info" },
    { name: "Edit PDF", desc: "" },
  ]
  return (
    <main className="min-h-screen bg-white text-[#111]">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 h-[64px] flex items-center justify-between">
          <div className="font-black text-xl">KYVORIX<span className="text-[#FF7A00]">APP</span></div>
          <button className="bg-[#FF7A00] text-white text-sm font-bold px-5 py-2.5 rounded-lg">Get Started</button>
        </div>
      </header>
      <section className="bg-[#FFFBF7] py-20 text-center">
        <h1 className="text-5xl font-extrabold">Every tool you need<br/>to work with PDFs</h1>
        <p className="mt-4 text-gray-600">31 tools + AI - kyvorixapp.com</p>
      </section>
      <div className="max-w-[1320px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
          {aiTools.map(t => (
            <div key={t.name} className="rounded-2xl p-5 bg-[#111] text-white">
              <div className="text-[10px] font-bold text-[#FF7A00]">{t.tag}</div>
              <div className="mt-2 font-semibold text-[14px]">{t.name}</div>
              <div className="text-[12px] text-gray-400 mt-1">{t.desc}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map(t => (
            <div key={t.name} className="border border-gray-100 rounded-2xl p-5 hover:border-[#FF7A00]">
              <div className="font-semibold text-[14px]">{t.name}</div>
              <div className="text-[12px] text-gray-500 mt-1">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
