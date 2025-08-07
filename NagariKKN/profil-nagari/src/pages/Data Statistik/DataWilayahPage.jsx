// src/pages/DataWilayahPage.jsx
import React, { useState, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, ChartDataLabels);

const dataJorong = [
  { no: 1, nama: 'Jorong Paninjauan', jumlah: 696 },
  { no: 2, nama: 'Jorong Pauah', jumlah: 552 },
  { no: 3, nama: 'Jorong Cicawan', jumlah: 450 },
  { no: 4, nama: 'Jorong Data Simpang Dingin', jumlah: 598 },
];
const totalPenduduk = dataJorong.reduce((sum, jorong) => sum + jorong.jumlah, 0);

const originalBackgroundColors = [
  'rgba(239, 68, 68, 0.8)',
  'rgba(34, 197, 94, 0.8)',
  'rgba(59, 130, 246, 0.8)',
  'rgba(249, 115, 22, 0.8)',
];
const originalBorderColors = Array(4).fill('#FFFFFF');

const chartData = {
  labels: dataJorong.map(j => j.nama),
  datasets: [
    {
      label: 'Jumlah Penduduk',
      data: dataJorong.map(j => j.jumlah),
      backgroundColor: originalBackgroundColors,
      borderColor: originalBorderColors,
      borderWidth: 2,
    },
  ],
};

function DataWilayahPage() {
  const [chartType, setChartType] = useState('pie');
  const [isDownloadMenuOpen, setDownloadMenuOpen] = useState(false);
  const chartRef = useRef(null);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
        labels: { usePointStyle: true, padding: 20, },
        onHover: (event, legendItem, legend) => {
          const chart = legend.chart;
          chart.data.datasets[0].backgroundColor = originalBackgroundColors.map((color, index) => 
            index === legendItem.index ? color.replace('0.8', '1') : color.replace('0.8', '0.2')
          );
          chart.update();
        },
        onLeave: (event, legendItem, legend) => {
          const chart = legend.chart;
          chart.data.datasets[0].backgroundColor = originalBackgroundColors;
          chart.update();
        }
      },
      datalabels: {
        formatter: (value) => ((value / totalPenduduk) * 100).toFixed(1) + '%',
        color: 'white',
        font: { weight: 'bold', size: 14, },
      }
    }
  };

  const downloadChart = (format) => {
    const chart = chartRef.current;
    if (chart) {
      const url = chart.toBase64Image(format === 'jpeg' ? 'image/jpeg' : 'image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = `diagram-populasi-${chartType}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadMenuOpen(false);
    }
  };

  return (
    <main className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-nagari-brown mb-4 ">Data Wilayah Administratif</h1>
          <p className="text-base text-justify text-black  mt-2">Sebaran populasi penduduk berdasarkan wilayah administratif dapat dilihat pada diagram berikut. Data ini mencakup 4 jorong utama dengan jumlah penduduk yang bervariasi</p>
        </motion.div>

        {/* Layout Utama: Diagram & Kartu Statistik */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 ">

          {/* Kolom Kiri: Diagram */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-xl border"
          >
            <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
              <h2 className="text-xl font-bold text-nagari-brown m-0">Distribusi Populasi</h2>
              <div className="flex items-center gap-4">
                <select 
                  value={chartType} 
                  onChange={(e) => setChartType(e.target.value)}
                  className="border-gray-300 rounded-lg shadow-sm"
                >
                  <option value="pie">Pie Chart</option>
                  <option value="bar">Bar Chart</option>
                </select>
                <div className="relative">
                  <button onClick={() => setDownloadMenuOpen(!isDownloadMenuOpen)} className="p-2 rounded-md hover:bg-gray-100">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  </button>
                  {isDownloadMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20 border">
                      <a onClick={() => downloadChart('png')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Save as PNG</a>
                      <a onClick={() => downloadChart('jpeg')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Save as JPEG</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full h-96">
              {chartType === 'pie' ? <Pie ref={chartRef} data={chartData} options={chartOptions} /> : <Bar ref={chartRef} data={chartData} options={chartOptions} />}
            </div>
          </motion.div>

          {/* Kolom Kanan: Kartu Statistik */}
          <div className="lg:col-span-2 space-y-6">
            {dataJorong.map((jorong, index) => (
              <motion.div
                key={jorong.no}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white p-5 rounded-2xl shadow-lg border flex items-center space-x-4"
              >
                <div style={{ backgroundColor: originalBackgroundColors[index] }} className="w-4 h-16 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-gray-800">{jorong.nama}</p>
                  <p className="text-sm text-gray-500">Jumlah Penduduk</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-nagari-brown">{jorong.jumlah.toLocaleString('id-ID')}</p>
                  <p className="text-sm font-semibold text-green-600">{((jorong.jumlah / totalPenduduk) * 100).toFixed(1)}%</p>
                </div>
              </motion.div>
            ))}
             <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-nagari-brown text-white p-5 rounded-2xl shadow-lg flex items-center justify-between"
              >
                <p className="font-bold text-lg">Total Penduduk</p>
                <p className="text-2xl font-bold">{totalPenduduk.toLocaleString('id-ID')}</p>
              </motion.div>
          </div>
        </div>

        {/* Tabel Data (diletakkan di bawah layout utama) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
            <h2 className="text-2xl font-bold text-nagari-brown mb-6 text-center">Rincian Data per Jorong</h2>
                  <p className="text-base text-black mb-4">Dari diagram di atas, terlihat bahwa Jorong Paninjauan memiliki jumlah penduduk terbanyak. Sementara itu, Jorong Cicawan memiliki jumlah penduduk paling sedikit. Berikut ini adalah rincian jumlah penduduk berdasarkan wilayah administratif yang terdata di setiap jorong:</p>
            <div className="overflow-x-auto relative shadow-lg sm:rounded-lg border bg-white">
                <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs text-white uppercase bg-nagari-brown">
                    <tr>
                    <th scope="col" className="py-3 px-6">No</th>
                    <th scope="col" className="py-3 px-6">Jorong</th>
                    <th scope="col" className="py-3 px-6 text-right">Jumlah Penduduk (Jiwa)</th>
                    </tr>
                </thead>
                <tbody>
                    {dataJorong.map((item) => (
                    <tr key={item.no} className="bg-white border-b hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium">{item.no}</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">{item.nama}</td>
                        <td className="py-4 px-6 text-right">{item.jumlah.toLocaleString('id-ID')}</td>
                    </tr>
                    ))}
                </tbody>
                <tfoot className="font-bold bg-gray-100">
                    <tr>
                    <td colSpan="2" className="py-3 px-6 text-center">Jumlah</td>
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

export default DataWilayahPage;