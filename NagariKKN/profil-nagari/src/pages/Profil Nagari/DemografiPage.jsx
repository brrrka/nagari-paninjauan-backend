// src/pages/DemografiPage.jsx
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend, ChartDataLabels);

// --- DATA VALID ---
const dataKelamin = [
  { no: 1, jorong: 'Jorong Paninjauan', laki: 352, perempuan: 344, total: 696 },
  { no: 2, jorong: 'Jorong Pauah', laki: 270, perempuan: 282, total: 552 },
  { no: 3, jorong: 'Jorong Cicawan', laki: 228, perempuan: 222, total: 450 },
  { no: 4, jorong: 'Jorong Data Simpang Dingin', laki: 295, perempuan: 303, total: 598 },
];
const totalLaki = 1145;
const totalPerempuan = 1151;
const totalPenduduk = 2296;

const dataUmur = [
    { umur: 'Balita (0-4)', jumlah: 158 },
    { umur: 'Anak-Anak (5-14)', jumlah: 398 },
    { umur: 'Remaja (15-24)', jumlah: 410 },
    { umur: 'Dewasa (25-54)', jumlah: 860 },
    { umur: 'Lansia (55+)', jumlah: 471 },
];

// --- Chart Data & Options ---
const genderChartData = {
    labels: ['Laki-Laki', 'Perempuan'],
    datasets: [{
        label: 'Jumlah Jiwa',
        data: [totalLaki, totalPerempuan],
        backgroundColor: ['rgba(59, 130, 246, 0.8)', 'rgba(239, 68, 68, 0.8)'],
        borderColor: ['#FFFFFF'],
        borderWidth: 2,
    }]
};
const genderChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: 'bottom' },
        datalabels: {
            formatter: (value) => `${((value / totalPenduduk) * 100).toFixed(1)}%`,
            color: 'white',
            font: { weight: 'bold', size: 16 }
        }
    }
};

const ageChartData = {
    labels: dataUmur.map(item => item.umur),
    datasets: [{
        label: 'Jumlah Penduduk',
        data: dataUmur.map(item => item.jumlah),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        borderWidth: 0,
        borderRadius: 5,
    }]
};
const ageChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
        legend: { display: false },
        datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value.toLocaleString('id-ID'),
            font: { weight: 'bold' },
            color: '#374151'
        }
    },
    scales: {
        x: { beginAtZero: true, title: { display: true, text: 'Jumlah Jiwa' } },
        y: { grid: { display: false } }
    }
};

function DemografiPage() {
  return (
    <main className="bg-gray-100">
      <div className="relative bg-nagari-brown py-24 text-white text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/people.jpeg')" }}
        ></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Demografi Nagari</h1>
            <p className="text-xl text-gray-300 mt-2">Struktur Kependudukan Nagari Paninjauan</p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl py-16 -mt-16 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
            <div className="bg-white p-8 rounded-2xl shadow-2xl border space-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-nagari-brown mb-2">Ringkasan Populasi</h2>
                    {/* PARAGRAF PEMBUKA BARU */}
                    <p className="text-gray-600">
                        Keseimbangan gender dalam populasi adalah salah satu indikator penting dalam melihat dinamika sosial kemasyarakatan. Total penduduk Nagari Paninjauan adalah <span className="font-bold">{totalPenduduk.toLocaleString('id-ID')} jiwa</span>.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-lg text-blue-600">Laki-Laki</p>
                        <p className="text-3xl font-bold text-blue-800">{totalLaki.toLocaleString('id-ID')}</p>
                    </div>
                     <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-lg text-red-600">Perempuan</p>
                        <p className="text-3xl font-bold text-red-800">{totalPerempuan.toLocaleString('id-ID')}</p>
                    </div>
                </div>
                <div className="w-full h-80">
                    <Pie data={genderChartData} options={genderChartOptions} />
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-2xl border space-y-8">
                <h2 className="text-2xl font-bold text-nagari-brown mb-2">Populasi Berdasarkan Usia</h2>
                 {/* PARAGRAF PEMBUKA BARU */}
                <p className="text-gray-600">
                    Struktur usia penduduk adalah fondasi dari perencanaan pembangunan jangka panjang, mulai dari generasi penerus hingga penduduk usia senja.
                </p>
                <div className="w-full" style={{ height: '28rem' }}>
                    <Bar data={ageChartData} options={ageChartOptions} />
                </div>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
        >
            <h2 className="text-2xl font-bold text-nagari-brown mb-6 text-center">Rincian Data Penduduk per Jorong</h2>
            {/* PARAGRAF ANALISIS BARU */}
            <p className="prose max-w-none text-justify text-gray-700 leading-relaxed mb-8">
                Dari data di atas, dapat disimpulkan bahwa komposisi penduduk laki-laki dan perempuan di Nagari Paninjauan secara keseluruhan sangat seimbang. Angka ini mencerminkan stabilitas demografis yang sehat. Berikut adalah rincian jumlah dan persentase penduduk berdasarkan jenis kelamin di setiap jorong:
            </p>
             <div className="not-prose overflow-x-auto relative shadow-lg sm:rounded-lg border bg-white">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="text-xs text-white uppercase bg-nagari-brown">
                        <tr>
                            <th rowSpan="2" className="py-3 px-6 align-middle">No</th>
                            <th rowSpan="2" className="py-3 px-6 align-middle">Jorong</th>
                            <th colSpan="2" className="py-3 px-6 text-center">Laki-Laki</th>
                            <th colSpan="2" className="py-3 px-6 text-center">Perempuan</th>
                            <th colSpan="2" className="py-3 px-6 text-center">Total</th>
                        </tr>
                        <tr>
                            <th className="py-2 px-6 text-center">Jumlah</th>
                            <th className="py-2 px-6 text-center">%</th>
                            <th className="py-2 px-6 text-center">Jumlah</th>
                            <th className="py-2 px-6 text-center">%</th>
                            <th className="py-2 px-6 text-center">Jumlah</th>
                            <th className="py-2 px-6 text-center">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataKelamin.map((item) => (
                        <tr key={item.no} className="bg-white border-b hover:bg-gray-50">
                            <td className="py-4 px-6 font-medium">{item.no}</td>
                            <td className="py-4 px-6 font-semibold text-gray-900">{item.jorong}</td>
                            <td className="py-4 px-6 text-center">{item.laki.toLocaleString('id-ID')}</td>
                            <td className="py-4 px-6 text-center text-xs text-gray-500">{((item.laki / item.total) * 100).toFixed(2)}%</td>
                            <td className="py-4 px-6 text-center">{item.perempuan.toLocaleString('id-ID')}</td>
                            <td className="py-4 px-6 text-center text-xs text-gray-500">{((item.perempuan / item.total) * 100).toFixed(2)}%</td>
                            <td className="py-4 px-6 text-center font-bold">{item.total.toLocaleString('id-ID')}</td>
                            <td className="py-4 px-6 text-center text-xs text-gray-500">{((item.total / totalPenduduk) * 100).toFixed(2)}%</td>
                        </tr>
                        ))}
                    </tbody>
                    <tfoot className="font-bold bg-gray-100">
                        <tr>
                            <td colSpan="2" className="py-3 px-6 text-center">Jumlah Total</td>
                            <td className="py-3 px-6 text-center">{totalLaki.toLocaleString('id-ID')}</td>
                            <td className="py-3 px-6 text-center text-xs">{((totalLaki / totalPenduduk) * 100).toFixed(2)}%</td>
                            <td className="py-3 px-6 text-center">{totalPerempuan.toLocaleString('id-ID')}</td>
                            <td className="py-3 px-6 text-center text-xs">{((totalPerempuan / totalPenduduk) * 100).toFixed(2)}%</td>
                            <td className="py-3 px-6 text-center">{totalPenduduk.toLocaleString('id-ID')}</td>
                            <td className="py-3 px-6 text-center text-xs">100.00%</td>
                        </tr>
                    </tfoot>
                </table>
             </div>
        </motion.div>
      </div>
    </main>
  );
}

export default DemografiPage;