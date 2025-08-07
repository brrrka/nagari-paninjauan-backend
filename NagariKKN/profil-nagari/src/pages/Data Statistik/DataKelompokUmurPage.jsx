// src/pages/DataKelompokUmurPage.jsx
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const dataUmur = [
    { no: 1, umur: '0-4', jumlah: 158 },
    { no: 2, umur: '5-9', jumlah: 186 },
    { no: 3, umur: '10-14', jumlah: 212 },
    { no: 4, umur: '15-19', jumlah: 188 },
    { no: 5, umur: '20-24', jumlah: 222 },
    { no: 6, umur: '25-29', jumlah: 186 },
    { no: 7, umur: '30-34', jumlah: 146 },
    { no: 8, umur: '35-39', jumlah: 169 },
    { no: 9, umur: '40-44', jumlah: 150 },
    { no: 10, umur: '45-49', jumlah: 115 },
    { no: 11, umur: '50-54', jumlah: 93 },
    { no: 12, umur: '55-59', jumlah: 83 },
    { no: 13, umur: '60-64', jumlah: 112 },
    { no: 14, umur: '65-69', jumlah: 105 },
    { no: 15, umur: '70-74', jumlah: 73 },
    { no: 16, umur: '74+', jumlah: 98 },
];
const totalPenduduk = dataUmur.reduce((sum, item) => sum + item.jumlah, 0);
const usiaProduktif = dataUmur.filter(item => parseInt(item.umur) >= 15 && parseInt(item.umur) <= 64).reduce((sum, item) => sum + item.jumlah, 0);
const persentaseProduktif = ((usiaProduktif / totalPenduduk) * 100).toFixed(1);

// --- PALET 16 WARNA UNIK ---
const uniqueColors = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
  '#E7E9ED', '#8395A7', '#F6B93B', '#38ADA9', '#C44569', '#E056FD',
  '#78E08F', '#5758BB', '#FF7979', '#00D2D3'
];

const chartData = {
    labels: dataUmur.map(item => item.umur),
    datasets: [{
        label: 'Jumlah Penduduk',
        data: dataUmur.map(item => item.jumlah),
        backgroundColor: uniqueColors,
        borderRadius: 5,
        borderWidth: 0,
    }],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: (value) => value.toLocaleString('id-ID'),
            font: { weight: 'bold', size: 10 },
            color: '#4B5563'
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += context.parsed.y.toLocaleString('id-ID') + ' Jiwa';
                    }
                    return label;
                }
            }
        }
    },
    scales: {
        y: { beginAtZero: true },
        x: { grid: { display: false } }
    }
};

function DataKelompokUmurPage() {
  return (
    <main className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-nagari-brown">Data Kelompok Umur</h1>
          <p className="text-lg text-nagari-brown mt-2">Struktur Demografi Penduduk Nagari Paninjauan</p>
          <p className="text-base text-black mt-8 text-justify">Distribusi populasi penduduk berdasarkan kelompok usia memberikan gambaran tentang struktur demografi wilayah. Berikut adalah data jumlah penduduk di setiap kelompok usia Nagari Paninjauan :</p>
        </motion.div>

        {/* --- Kartu Statistik Utama --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-6 rounded-2xl shadow-lg border text-center">
                <p className="text-lg text-gray-500">Usia Produktif (15-64 Thn)</p>
                <p className="text-4xl font-bold text-nagari-brown">{usiaProduktif.toLocaleString('id-ID')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-white p-6 rounded-2xl shadow-lg border text-center">
                <p className="text-lg text-gray-500">% Usia Produktif</p>
                <p className="text-4xl font-bold text-nagari-green">{persentaseProduktif}%</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-nagari-brown text-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
                            <div className="bg-white/20 p-3 rounded-full">
                                <img src="/images/people.svg" alt="Total Penduduk" className="w-10 h-10" />
                            </div>
                            <div>
                                <p className="text-lg text-gray-200 font-semibold">Total Penduduk</p>
                                <p className="text-3xl font-bold">{totalPenduduk.toLocaleString('id-ID')}</p>
                            </div>
                        </motion.div>
        </div>

        {/* --- Diagram & Tabel --- */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-xl border"
        >
            <h2 className="text-xl font-semibold text-nagari-brown m-0 mb-4">Distribusi Populasi per Kelompok Umur</h2>
            <div className="w-full mx-auto" style={{ height: '500px' }}>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
        >
            <h2 className="text-2xl font-bold text-nagari-brown mb-6 text-center">Rincian Data</h2>
            <p className="text-justify mb-6 text-black"  >Dari diagram di atas, terlihat bahwa kelompok usia 20-24 tahun memiliki jumlah penduduk terbanyak. Berikut ini adalah rincian jumlah penduduk berdasarkan kelompok usia yang telah terdata:</p>
            <div className="not-prose overflow-x-auto relative shadow-lg sm:rounded-lg border bg-white">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-white uppercase bg-nagari-brown">
                <tr>
                  <th scope="col" className="py-3 px-6">No</th>
                  <th scope="col" className="py-3 px-6">Umur</th>
                  <th scope="col" className="py-3 px-6">Populasi</th>
                </tr>
              </thead>
              <tbody>
                {dataUmur.map((item) => (
                  <tr key={item.no} className="bg-white border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">{item.no}</td>
                    <td className="py-4 px-6 font-semibold text-gray-800">{item.umur}</td>
                    <td className="py-4 px-6 text-right">{item.jumlah.toLocaleString('id-ID')}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="font-bold bg-gray-100">
                <tr>
                  <td colSpan="2" className="py-3 px-6 text-center">Jumlah Total</td>
                  <td className="py-3 px-6 text-right">{totalPenduduk.toLocaleString('id-ID')}</td>
                </tr>
              </tfoot>
            </table>
            </div>
        </motion.div>
      </div>
    </main>
  );
}

export default DataKelompokUmurPage;