import { useState, useEffect } from "react";

const initialStudents = [
  {
    id: 1,
    nim: "2401001",
    nama: "Raka Pratama",
    noHp: "081298760101",
    email: "raka.pratama@mail.com",
    alamat: "Jl. Pemuda No. 12, Surabaya",
    programStudi: "Teknik Informatika",
    tahunMasuk: 2024,
  },
  {
    id: 2,
    nim: "2401002",
    nama: "Salsabila Nurhaliza",
    noHp: "081298760102",
    email: "salsabila.n@mail.com",
    alamat: "Jl. Darmo Permai III No. 7, Surabaya",
    programStudi: "Sistem Informasi",
    tahunMasuk: 2024,
  },
  {
    id: 3,
    nim: "2301015",
    nama: "Bagas Santoso",
    noHp: "081298760103",
    email: "bagas.santoso@mail.com",
    alamat: "Jl. Raya Gubeng No. 45, Surabaya",
    programStudi: "Teknik Elektro",
    tahunMasuk: 2023,
  },
  {
    id: 4,
    nim: "2301022",
    nama: "Dewi Lestari",
    noHp: "081298760104",
    email: "dewi.lestari@mail.com",
    alamat: "Jl. Kertajaya Indah No. 3, Surabaya",
    programStudi: "Manajemen",
    tahunMasuk: 2023,
  },
  {
    id: 5,
    nim: "2201033",
    nama: "Rizky Ramadhan",
    noHp: "081298760105",
    email: "rizky.ramadhan@mail.com",
    alamat: "Jl. Ahmad Yani No. 88, Sidoarjo",
    programStudi: "Teknik Informatika",
    tahunMasuk: 2022,
  },
  {
    id: 6,
    nim: "2201041",
    nama: "Putri Anggraini",
    noHp: "081298760106",
    email: "putri.anggraini@mail.com",
    alamat: "Jl. Manyar Kertoadi No. 21, Surabaya",
    programStudi: "Akuntansi",
    tahunMasuk: 2022,
  },
];

function formatTime(date) {
  return date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function formatDate(date) {
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function App() {
  // useState: data mahasiswa disimpan di dalam state
  const [students, setStudents] = useState(initialStudents);

  // useState: waktu saat ini
  const [now, setNow] = useState(new Date());

  // useEffect: jalankan interval 1 detik, bersihkan saat unmount
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="page">
      <header className="header">
        <h1>Student Management</h1>
        <h2>Daftar Data Mahasiswa</h2>
      </header>

      <section className="info-bar">
        <div className="info-card">
          <span className="info-label">Jumlah Mahasiswa</span>
          <span className="info-value">{students.length}</span>
        </div>
        <div className="info-card clock">
          <span className="info-label">{formatDate(now)}</span>
          <span className="info-value mono">{formatTime(now)}</span>
        </div>
      </section>

      <section className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. Hp</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="mono">{student.nim}</td>
                <td className="name">{student.nama}</td>
                <td className="mono">{student.noHp}</td>
                <td>
                  <a href={`mailto:${student.email}`}>{student.email}</a>
                </td>
                <td>{student.alamat}</td>
                <td>
                  <span className="badge">{student.programStudi}</span>
                </td>
                <td>{student.tahunMasuk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
