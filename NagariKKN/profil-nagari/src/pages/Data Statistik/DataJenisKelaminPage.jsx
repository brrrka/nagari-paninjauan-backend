// src/pages/DataJenisKelaminPage.jsx
import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const dataKelamin = [
  { no: 1, jorong: 'Jorong Paninjauan', laki: 352, perempuan: 344, total: 696 },
  { no: 2, jorong: 'Jorong Pauah', laki: 270, perempuan: 282, total: 552 },
  { no: 3, jorong: 'Jorong Cicawan', laki: 228, perempuan: 222, total: 450 },
  { no: 4, jorong: 'Jorong Data Simpang Dingin', laki: 295, perempuan: 303, total: 598 },
];
const totalLaki = 1145;
const totalPerempuan = 1151;
const totalPenduduk = 2296;

const chartData = {
    labels: dataKelamin.map(item => item.jorong),
    datasets: [
        {
            label: 'Laki-Laki',
            data: dataKelamin.map(item => item.laki),
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1,
            borderRadius: 5,
        },
        {
            label: 'Perempuan',
            data: dataKelamin.map(item => item.perempuan),
            backgroundColor: 'rgba(239, 68, 68, 0.8)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 1,
            borderRadius: 5,
        }
    ],
};

function DataJenisKelaminPage() {
  const [chartType, setChartType] = useState('grouped');

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: 'bottom' },
        datalabels: { display: false },
        tooltip: {
            callbacks: {
                label: (context) => `${context.dataset.label}: ${context.parsed.y.toLocaleString('id-ID')} Jiwa`
            }
        }
    },
    scales: {
        y: { beginAtZero: true, stacked: chartType === 'stacked', title: { display: true, text: 'Jumlah Jiwa' }},
        x: { stacked: chartType === 'stacked', grid: { display: false } }
    }
  };

  return (
    <main className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-nagari-brown">Data Penduduk per Jenis Kelamin</h1>
          <p className="text-lg text-nagari-brown mt-2">Komposisi Laki-laki dan Perempuan di Nagari Paninjauan</p>
          <p className="text-justify text-base mt-6">Data berikut menampilkan distribusi penduduk berdasarkan jenis kelamin di empat jorong utama wilayah administratif. Grafik ini memberikan gambaran proporsi jumlah laki-laki dan perempuan di setiap wilayah.</p>
        </motion.div>

        {/* --- KARTU STATISTIK UTAMA (DIPERBARUI) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Kartu Laki-Laki dengan Ikon */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-6 rounded-2xl shadow-lg border flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                    <img src="/images/man.svg" alt="Laki-laki" className="w-10 h-10" />
                </div>
                <div>
                    <p className="text-lg text-gray-500">Total Laki-Laki</p>
                    <p className="text-3xl font-bold text-nagari-brown">{totalLaki.toLocaleString('id-ID')}</p>
                </div>
            </motion.div>
            
            {/* Kartu Perempuan dengan Ikon */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-6 rounded-2xl shadow-lg border flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                    <img src="/images/woman.svg" alt="Perempuan" className="w-10 h-10" />
                </div>
                <div>
                    <p className="text-lg text-gray-500">Total Perempuan</p>
                    <p className="text-3xl font-bold text-nagari-brown">{totalPerempuan.toLocaleString('id-ID')}</p>
                </div>
            </motion.div>
            
            {/* Kartu Total Penduduk dengan Gaya Baru */}
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
        
        <motion.div
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
             className="bg-white p-6 rounded-2xl shadow-xl border"
        >
            <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
              <h2 className="text-xl font-bold text-nagari-brown m-0">Grafik Populasi per Jorong</h2>
              <select 
                value={chartType} 
                onChange={(e) => setChartType(e.target.value)}
                className="border-gray-300 rounded-lg shadow-sm"
              >
                <option value="grouped">Grouped Chart</option>
                <option value="stacked">Stacked Chart</option>
              </select>
            </div>
            <div className="w-full mx-auto" style={{ height: '400px' }}>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
        >
            <h2 className="text-2xl font-bold text-nagari-brown mb-6 text-center">Rincian Data</h2>
            <p className='mb-6'> Dari grafik di atas, terlihat bahwa komposisi penduduk laki-laki dan perempuan di setiap jorong relatif seimbang. Berikut ini adalah rincian jumlah penduduk berdasarkan jenis kelamin dan total populasi di setiap jorong, lengkap dengan persentase distribusinya: </p>
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

export default DataJenisKelaminPage;