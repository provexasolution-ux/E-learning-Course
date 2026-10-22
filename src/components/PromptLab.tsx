import React, { useState } from 'react';
import { Copy, Check, Sparkles, ChevronRight } from 'lucide-react';

interface PromptScenario {
  id: string;
  title: string;
  category: string;
  rawPrompt: string;
  rawOutput: string;
  crtf: {
    context: string;
    role: string;
    task: string;
    format: string;
  };
  structuredPrompt: string;
  structuredOutput: string;
  whyItMatters: string;
}

const SCENARIOS: PromptScenario[] = [
  {
    id: 'email-official',
    title: 'Penulisan Emel Permohonan Bajet AI',
    category: 'Komunikasi Korporat',
    rawPrompt: 'Tolong tulis emel mohon bajet software AI dari bos saya.',
    rawOutput: `Subjek: Mohon bajet AI

Hai Bos,

Saya nak minta bajet untuk beli software AI bagi pasukan kita. Software ini bagus dan boleh tolong kerja kita jadi cepat. Harap bos boleh luluskan segera.

Terima kasih.`,
    crtf: {
      context: 'Pasukan pemasaran syarikat kami yang mempunyai 5 orang eksekutif meluangkan 15 jam seminggu menulis kandungan secara manual. Kami bercadang melanggan alat AI untuk memendekkan masa penghasilan kepada 4 jam seminggu.',
      role: 'Pengurus Operasi Pemasaran Digital Kanan yang berfikiran analitikal dan berorientasikan ROI.',
      task: 'Drafkan kertas cadangan emel rasmi kepada Ketua Pegawai Kewangan (CFO) untuk memohon peruntukan RM1,200/bulan bagi pelan langganan AI komersial pasukan.',
      format: 'Emel formal 3 perenggan: (1) Masalah & Kos Kehilangan Masa Semasa, (2) Unjuran Penjimatan Masa & ROI 3 Bulan, (3) Tindakan Kelulusan Seterusnya beserta senarai lampiran harga.'
    },
    structuredPrompt: `KONTEKS:
Pasukan pemasaran syarikat kami yang mempunyai 5 orang eksekutif meluangkan 15 jam seminggu menulis kandungan secara manual. Kami bercadang melanggan alat AI untuk memendekkan masa penghasilan kepada 4 jam seminggu.

PERANAN:
Bertindak sebagai Pengurus Operasi Pemasaran Digital Kanan yang berfikiran analitikal dan berorientasikan ROI.

TUGASAN:
Drafkan kertas cadangan emel rasmi kepada Ketua Pegawai Kewangan (CFO) untuk memohon peruntukan RM1,200/bulan bagi pelan langganan AI komersial pasukan. Sertakan unjuran produktiviti yang kukuh.

FORMAT:
Emel formal 3 perenggan:
1. Ringkasan Cabaran Semasa & Beban Jam Bekerja Manual
2. Justifikasi Kos RM1,200 vs Penjimatan 55 Jam/Bulan Pasukan (ROI)
3. Tindakan Kelulusan Seterusnya dan Lampiran Jadual Perbandingan Vendor`,
    structuredOutput: `Subjek: Cadangan Pengoptimuman Produktiviti: Permohonan Peruntukan Perisian Generative AI Pasukan Pemasaran (Q4)

Selamat sejahtera Puan Norazlina,

Saya ingin mengemukakan cadangan strategik bagi mengatasi kekangan masa operasi pasukan pemasaran kami. Berdasarkan audit suku tahun lalu, 5 orang eksekutif kandungan kami memperuntukkan purata 15 jam seminggu untuk penyediaan draf awal teks dan visual kempen. Situasi ini melambatkan pelancaran kempen pasaran dan mengehadkan keupayaan pasukan meneroka inisiatif bernilai tinggi.

Bagi menangani isu ini, kami memohon peruntukan belanjawan perisian kecerdasan buatan berjumlah RM1,200 sebulan (RM14,400 setahun). Melalui ujian rintis selama dua minggu, penggunaan model bahasa dan visual generatif ini berjaya mengurangkan masa penyediaan bahan kempen kepada 4 jam seminggu—iaitu penjimatan terkumpul sebanyak 55 jam kerja sebulan bagi seluruh pasukan. Penjimatan masa bernilai anggaran RM5,800 kos buruh ini membolehkan pasukan melipatgandakan output kempen sehingga 2.5 kali ganda tanpa pertambahan staf.

Bersama emel ini, saya lampirkan dokumen perbandingan 3 vendor terkemuka beserta langkah-langkah pematuhan data sulit organisasi. Sekiranya dipersetujui pihak Puan, kami bersedia untuk membentangkan ringkasan demonstrasi selama 10 minit pada hari Khamis ini.

Sekian, terima kasih atas pertimbangan pihak Puan.

Yang benar,
Ahmad Faiz bin Zulkifli
Pengurus Operasi Pemasaran Digital`,
    whyItMatters: 'Prompt mentah menghasilkan emel acuh tak acuh yang mudah ditolak. Prompt CRTF membekalkan angka ROI, justifikasi penjimatan jam, dan nada korporat yang meyakinkan pihak atasan.'
  },
  {
    id: 'data-summary',
    title: 'Analisis & Sintesis Data Jualan e-Dagang',
    category: 'Analisis Data',
    rawPrompt: 'Analisis data jualan ini dan bagitahu apa yang patut saya buat.',
    rawOutput: `Data anda menunjukkan jualan naik turun. Ada produk laku dan ada yang kurang laku. Anda patut buat promosi untuk produk yang kurang laku dan tambah stok produk yang laku.`,
    crtf: {
      context: 'Laporan jualan syarikat pakaian tempatan bagi bulan September menunjukkan jualan baju kurung moden melonjak 42% manakala jualan kemeja kasual merosot 18% akibat kekangan stok saiz M dan L.',
      role: 'Penganalisis Strategi Perniagaan Runcit & E-Dagang Kanan.',
      task: 'Kenal pasti punca kemerosotan, analisis korelasi inventori, dan cadangkan pelan tindakan segera untuk 30 hari akan datang.',
      format: 'Jadual ringkas punca dan penyelesaian, diikuti 3 cadangan keutamaan (Quick Wins) bernombor.'
    },
    structuredPrompt: `KONTEKS:
Laporan jualan syarikat pakaian tempatan bagi bulan September menunjukkan jualan baju kurung moden melonjak 42% manakala jualan kemeja kasual merosot 18% akibat kekangan stok saiz M dan L.

PERANAN:
Bertindak sebagai Penganalisis Strategi Perniagaan Runcit & E-Dagang Kanan.

TUGASAN:
Analisis punca jurang prestasi produk, kesan kehabisan saiz inventori, dan sediakan pelan pemulihan hasil bagi 30 hari mendatang.

FORMAT:
1. Jadual Analisis Punca Utama & Kesan Hasil
2. 3 Pelan Tindakan Pantas (Quick Wins 1-14 Hari)
3. Strategi Inventori Jangka Sederhana (Hari 15-30)`,
    structuredOutput: `### 1. Jadual Analisis Punca & Kesan Hasil
| Produk | Trend Jualan | Punca Utama | Kesan Hasil |
| :--- | :--- | :--- | :--- |
| **Baju Kurung Moden** | +42% YoY | Permintaan tinggi musim perayaan & padanan warna tular di TikTok | Margin keuntungan bersih meningkat RM34,000 |
| **Kemeja Kasual** | -18% MoM | Kehabisan stok saiz teras (M & L) selama 11 hari berturut-turut | Anggaran kerugian hasil jualan RM16,500 |

### 2. Tiga Pelan Tindakan Pantas (Hari 1 - 14)
1. **Prapesanan Saiz M & L Diskaun 10%**: Lancarkan kempen "Pre-Order Exclusive" bagi kemeja kasual saiz M & L untuk mengekalkan minat pelanggan sebelum bekalan kilang tiba.
2. **Kemas Kini Kempen Iklan Berbayar**: Alihkan 60% bajet iklan daripada kemeja kasual ke varian baju kurung moden yang mempunyai stok lengkap.
3. **Pemberitahuan Automatik Stok (Back-in-Stock Alert)**: Aktifkan butang pengesanan emel/SMS di laman web bagi menawan semula prospek yang meninggalkan troli akibat kekosongan saiz.`,
    whyItMatters: 'Model AI memerlukan peranan khusus dan pecahan format agar jawapan tidak bersifat amatur, sebaliknya memberikan format matriks eksekutif yang boleh terus dilaksanakan.'
  }
];

export const PromptLab: React.FC<{ initialPrompt?: string }> = ({ initialPrompt = '' }) => {
  const [activeTab, setActiveTab] = useState<'compare' | 'builder'>('compare');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('email-official');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const [builderContext, setBuilderContext] = useState<string>(
    initialPrompt || 'Perniagaan F&B kami menerima 20 aduan seminggu tentang kelewatan penghantaran makanan waktu puncak.'
  );
  const [builderRole, setBuilderRole] = useState<string>('Pengurus Khidmat Pelanggan Kanan');
  const [builderTask, setBuilderTask] = useState<string>(
    'Hasilkan 3 skrip templat permohonan maaf bagi pesanan lewat lebih 30 minit dengan pampasan kupon diskaun. Nada hendaklah empati, ikhlas dan sopan.'
  );
  const [builderFormat, setBuilderFormat] = useState<string>(
    'Format mesej WhatsApp / SMS rasmi bawah 100 patah perkataan setiap satu, disertakan pembolehubah [Nama Pelanggan] dan [Kod Kupon].'
  );

  const selectedScenario = SCENARIOS.find(s => s.id === selectedScenarioId) || SCENARIOS[0];

  const assembledPrompt = `KONTEKS:
${builderContext}

PERANAN:
Bertindak sebagai ${builderRole}

TUGASAN:
${builderTask}

FORMAT:
${builderFormat}`;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="text-xs font-sans font-bold uppercase tracking-widest text-amber-400">
            Makmal Praktikal Prompting
          </div>
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl font-bold tracking-wide text-white uppercase mt-1">
            FORMULA C-R-T-F UNTUK HASIL MAKSIMUM
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-0.5">
            Ketahui bagaimana struktur prompt mengubah mutu output kecerdasan buatan daripada biasa kepada standard eksekutif.
          </p>
        </div>

        {/* Segmented Switcher */}
        <div className="p-1 bg-black border border-white/15 flex items-center text-xs font-sans font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('compare')}
            className={`py-1.5 px-4 transition-all ${
              activeTab === 'compare'
                ? 'bg-white text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Bandingkan
          </button>
          <button
            onClick={() => setActiveTab('builder')}
            className={`py-1.5 px-4 transition-all ${
              activeTab === 'builder'
                ? 'bg-white text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Pembina CRTF
          </button>
        </div>
      </div>

      {/* MODE 1: COMPARISON */}
      {activeTab === 'compare' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-neutral-400 font-sans font-bold uppercase tracking-wider mr-1">Kajian Kes:</span>
            {SCENARIOS.map((sc) => (
              <button
                key={sc.id}
                onClick={() => setSelectedScenarioId(sc.id)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedScenarioId === sc.id
                    ? 'bg-white text-black'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                {sc.title}
              </button>
            ))}
          </div>

          <div className="p-4 bg-[#141414] border border-white/10 text-xs text-neutral-300 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">Mengapa Formula CRTF Berkesan: </span>
              {selectedScenario.whyItMatters}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Raw Prompt */}
            <div className="bg-[#0e0e0e] border border-white/10 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-sans font-bold text-neutral-400 uppercase tracking-wider">
                  Prompt Biasa (Tanpa Struktur)
                </span>
                <span className="text-[11px] font-mono text-red-400 font-bold">Jawapan Terlalu Umum</span>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans">Input Prompt:</div>
                <div className="p-3.5 bg-black border border-white/10 text-xs font-mono text-neutral-200 mt-1.5">
                  "{selectedScenario.rawPrompt}"
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans">Output Yang Dijana:</div>
                <div className="p-4 bg-black border border-white/5 text-xs text-neutral-300 leading-relaxed whitespace-pre-wrap mt-1.5 font-sans">
                  {selectedScenario.rawOutput}
                </div>
              </div>
            </div>

            {/* CRTF Prompt */}
            <div className="bg-[#0e0e0e] border border-white/20 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-sans font-bold text-amber-400 uppercase tracking-wider">
                  Prompt Formula CRTF
                </span>
                <button
                  onClick={() => copyToClipboard(selectedScenario.structuredPrompt, 'compare')}
                  className="flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:underline uppercase"
                >
                  {copiedType === 'compare' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'compare' ? 'Disalin' : 'Salin Prompt'}</span>
                </button>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans">Input Prompt CRTF:</div>
                <div className="p-3.5 bg-black border border-white/15 text-white text-xs font-mono leading-relaxed max-h-36 overflow-y-auto mt-1.5">
                  {selectedScenario.structuredPrompt}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans">Output Berkualiti Tinggi:</div>
                <div className="p-4 bg-black border border-white/10 text-xs text-neutral-200 leading-relaxed whitespace-pre-wrap max-h-56 overflow-y-auto mt-1.5 font-sans">
                  {selectedScenario.structuredOutput}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: BUILDER */}
      {activeTab === 'builder' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-[#0e0e0e] border border-white/10 p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="text-xs font-sans font-bold text-white uppercase tracking-wider mb-2">
              Lengkapkan 4 Elemen Utama Prompt Anda:
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-amber-400 uppercase">[C] Konteks</label>
              <textarea
                value={builderContext}
                onChange={(e) => setBuilderContext(e.target.value)}
                rows={2}
                className="w-full text-xs p-3 bg-black border border-white/15 focus:outline-none focus:border-white text-white font-sans"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-emerald-400 uppercase">[R] Peranan / Persona</label>
              <input
                type="text"
                value={builderRole}
                onChange={(e) => setBuilderRole(e.target.value)}
                className="w-full text-xs p-3 bg-black border border-white/15 focus:outline-none focus:border-white text-white font-sans"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-blue-400 uppercase">[T] Tugasan & Kekangan</label>
              <textarea
                value={builderTask}
                onChange={(e) => setBuilderTask(e.target.value)}
                rows={3}
                className="w-full text-xs p-3 bg-black border border-white/15 focus:outline-none focus:border-white text-white font-sans"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-400 uppercase">[F] Format Jawapan</label>
              <input
                type="text"
                value={builderFormat}
                onChange={(e) => setBuilderFormat(e.target.value)}
                className="w-full text-xs p-3 bg-black border border-white/15 focus:outline-none focus:border-white text-white font-sans"
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#141414] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Prompt Terbina
                </span>
                <button
                  onClick={() => copyToClipboard(assembledPrompt, 'builder')}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase bg-white text-black hover:bg-neutral-200 transition-colors"
                >
                  {copiedType === 'builder' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'builder' ? 'Disalin' : 'Salin Semua'}</span>
                </button>
              </div>

              <div className="p-4 bg-black border border-white/10 text-xs font-mono text-neutral-200 leading-relaxed max-h-[320px] overflow-y-auto whitespace-pre-wrap">
                {assembledPrompt}
              </div>
            </div>

            <div className="pt-4 text-xs text-neutral-400 font-sans">
              💡 Tip: Tampalkan arahan ini ke Gemini atau ChatGPT untuk jawapan yang optimum.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
