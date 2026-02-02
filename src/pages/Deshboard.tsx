import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  Copy, 
  Check, 
  Users, 
  Phone,
  ArrowLeft,
  Search,
  User,
  AlertTriangle,
  X,
  RefreshCw // Tambahkan icon refresh buat jaga-jaga mau ganti angka manual
} from 'lucide-react';
import { supabase } from '../supabaseClient';

interface Referral {
  id: number;
  name: string;
  ref_number: string;
  phone_number: string;
  created_at: string;
}

const Deshboard = () => {
  const [referrals, setReferrals] = useState<Referral[]>([]);
  // Inisialisasi ref_number kosong dulu, nanti diisi via useEffect
  const [newRef, setNewRef] = useState({ name: '', ref_number: '', phone_number: '' });
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  
  const [deleteModal, setDeleteModal] = useState<{show: boolean, id: number | null}>({
    show: false,
    id: null
  });

  // Fungsi Helper untuk generate angka acak
  const generateRandomRef = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  };

  useEffect(() => {
    fetchReferrals();
    // Isi ref_number otomatis saat pertama kali load
    setNewRef(prev => ({ ...prev, ref_number: generateRandomRef() }));
  }, []);

  const fetchReferrals = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('referrals')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) setReferrals(data);
    setLoading(false);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validasi dasar
    if (!newRef.name || !newRef.ref_number || !newRef.phone_number) return;

    const { error } = await supabase
      .from('referrals')
      .insert([newRef]);

    if (!error) {
      // Reset form dan generate angka baru lagi untuk input selanjutnya
      setNewRef({ 
        name: '', 
        ref_number: generateRandomRef(), 
        phone_number: '' 
      });
      fetchReferrals();
    } else {
      alert("Error adding data: " + error.message);
    }
  };

  // ... fungsi confirmDelete dan copyToClipboard tetap sama ...
  const confirmDelete = async () => {
    if (!deleteModal.id) return;
    const { error } = await supabase.from('referrals').delete().eq('id', deleteModal.id);
    if (!error) {
      fetchReferrals();
      setDeleteModal({ show: false, id: null });
    } else {
      alert("Gagal menghapus: " + error.message);
    }
  };

  const copyToClipboard = (refNumber: string, id: number) => {
    const baseUrl = window.location.origin;
    const fullLink = `${baseUrl}/?refNumber=${refNumber}`;
    navigator.clipboard.writeText(fullLink);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white p-6 md:p-12 font-sans relative">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Referral <span className="text-brand-cyan">Management</span></h1>
            <p className="text-gray-400 mt-1">Kelola dan pantau tim marketing Anda dengan mudah.</p>
          </div>
          <a href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Kembali ke Landing Page
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-brand-navy/50 border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-primary/20 text-brand-primary rounded-xl"><Users size={24}/></div>
              <div>
                <p className="text-sm text-gray-400">Total Mitra</p>
                <p className="text-2xl font-bold">{referrals.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-brand-navy border border-white/10 p-6 rounded-2xl sticky top-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Plus size={20} className="text-brand-cyan"/> Tambah Mitra
              </h2>
              <form onSubmit={handleAdd} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Nama Lengkap</label>
                  <input 
                    type="text"
                    required
                    placeholder="Contoh: John Doe"
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan transition-all"
                    value={newRef.name}
                    onChange={(e) => setNewRef({...newRef, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Ref Number (Otomatis)</label>
                  <div className="relative">
                    <input 
                      type="text"
                      readOnly // Dibuat readOnly supaya user nggak capek ngisi
                      className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-gray-400 cursor-not-allowed focus:outline-none"
                      value={newRef.ref_number}
                    />
                    <button 
                      type="button"
                      onClick={() => setNewRef({...newRef, ref_number: generateRandomRef()})}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-brand-cyan"
                      title="Ganti angka acak"
                    >
                      <RefreshCw size={18} />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">WhatsApp</label>
                  <input 
                    type="text"
                    required
                    placeholder="628xxxxxx"
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan transition-all"
                    value={newRef.phone_number}
                    onChange={(e) => setNewRef({...newRef, phone_number: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-cyan py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-brand-primary/20"
                >
                  Simpan Data
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-brand-navy/30 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h2 className="font-semibold">Daftar Mitra Aktif</h2>
                <Search size={18} className="text-gray-500" />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 text-gray-400 text-sm">
                      <th className="p-4 font-medium">Nama</th>
                      <th className="p-4 font-medium">Kode Ref</th>
                      <th className="p-4 font-medium">WhatsApp</th>
                      <th className="p-4 font-medium text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence mode='popLayout'>
                      {loading ? (
                         <tr><td colSpan={4} className="p-10 text-center text-gray-500">Memuat data...</td></tr>
                      ) : referrals.map((ref) => (
                        <motion.tr 
                          key={ref.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-2 font-medium">
                              <User size={14} className="text-brand-cyan" />
                              {ref.name}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="font-mono text-gray-400">{ref.ref_number}</span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Phone size={12} />
                              {ref.phone_number}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center justify-center gap-2">
                              <button 
                                onClick={() => copyToClipboard(ref.ref_number, ref.id)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                  copiedId === ref.id 
                                  ? 'bg-green-500 text-white' 
                                  : 'bg-brand-primary/20 text-brand-primary border border-brand-primary/30 hover:bg-brand-primary hover:text-white'
                                }`}
                              >
                                {copiedId === ref.id ? <Check size={14}/> : <Copy size={14}/>}
                                {copiedId === ref.id ? 'Tersalin' : 'Copy'}
                              </button>
                              
                              <button 
                                onClick={() => setDeleteModal({ show: true, id: ref.id })}
                                className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Delete Tetap Sama */}
      <AnimatePresence>
        {deleteModal.show && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeleteModal({ show: false, id: null })}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-brand-navy border border-white/10 p-8 rounded-3xl max-w-sm w-full relative z-10 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-red-500/20 text-red-500 rounded-2xl">
                  <AlertTriangle size={24} />
                </div>
                <button 
                  onClick={() => setDeleteModal({ show: false, id: null })}
                  className="text-gray-500 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <h3 className="text-xl font-bold mb-2">Hapus Data?</h3>
              <p className="text-gray-400 mb-8">Data yang dihapus tidak dapat dikembalikan. Apakah Anda yakin?</p>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setDeleteModal({ show: false, id: null })}
                  className="py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-medium"
                >
                  Batal
                </button>
                <button 
                  onClick={confirmDelete}
                  className="py-3 rounded-xl bg-red-500 hover:bg-red-600 transition-all font-bold shadow-lg shadow-red-500/20"
                >
                  Ya, Hapus
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Deshboard;