# ProjectMandiri1_John-David-Kusuma-N_206_TIF
Membuat Website Portofolio menggunakan HTML untuk struktur halaman, CSS native buatan sendiri, framework CSS (Bootstrap), dan JavaScript buatan sendiri.

HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio John David</title>
    <link href="bootstrap-5.3.8-dist/bootstrap-5.3.8-dist/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="bootstrap-5.3.8-dist/bootstrap-5.3.8-dist/js/bootstrap.min.js">
    <link rel="stylesheet" href="styleprojectmandiri.css">
</head>
<body>
    <!-- Navigation -->
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Web Portofolio John David</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="#" onclick="showPage('home')">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onclick="showPage('about')">Tentang</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onclick="showPage('projects')">Proyek</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- Home Page -->
    <div id="home" class="page active">
        <section class="hero">
            <div class="hero-content">
                <h1>John David Kusuma Novianto</h1>
                <p>24051204206</p>
                <p>Mahasiswa S1 Teknik Informatika Universitas Negeri Surabaya</p>
                <a href="#" class="btn btn-custom btn-primary-custom" onclick="showPage('projects')">Proyek Saya</a>
                <a href="#" class="btn btn-custom btn-secondary-custom ms-2" onclick="showPage('about')">More About Me</a>
            </div>
        </section>

        <section class="container">
            <h2>Keahlian Utama</h2>
            <div class="row g-4">
                <div class="col-md-3 col-sm-6">
                    <div class="card-custom text-center">
                        <i class="fas fa-code" style="font-size: 2.5rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
                        <h3>Frontend</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="card-custom text-center">
                        <i class="fas fa-database" style="font-size: 2.5rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
                        <h3>Backend</h3>
                        <p>Node.js, Python, Java</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="card-custom text-center">
                        <i class="fas fa-palette" style="font-size: 2.5rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
                        <h3>Design</h3>
                        <p>Canva, Figma, CapCut</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="card-custom text-center">
                        <i class="fas fa-tools" style="font-size: 2.5rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
                        <h3>Tools</h3>
                        <p>Visual Studio Code, Google Colab, GitHub</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- About Page -->
    <div id="about" class="page">
        <section class="container">
            <h2>Tentang Saya</h2>
            <div class="row align-items-center g-5">
                <div class="col-md-6">
                    <div class="card-custom">
                        <h3>Profil Singkat</h3>
                        <p>Saya adalah seorang mahasiswa S1 program studi Teknik Informatika angkatan 24 dan memiliki passion di bidang teknologi dan inovasi. Saya memiliki latar belakang di bidang Networking karena jenjang saya sebelumnya yaitu saat SMK, saya telah mengerjakan beberapa proyek untuk memenuhi penilaian selama masa perkuliahan.</p>
                        <q><i>Pemrograman bukan tentang apa yang Anda ketahui; ini tentang apa yang dapat Anda cari tahu.</i></q> <p>- Chris Pine</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card-custom">
                        <h3>Pengalaman Pembelajaran</h3>
                        <div style="margin-bottom: 1.5rem;">
                            <h4 style="color: var(--primary-color);">Interaksi Manusia dan Komputer</h4>
                            <p style="color: #94a3b8; margin-bottom: 0.5rem;">Semester 1</p>
                            <p>Mempelajari prinsip-prinsip desain antarmuka pengguna (UI), evaluasi kegunaan sistem, faktor psikologis pengguna, serta proses merancang dan membangun aplikasi yang berpusat pada pengguna</p>
                        </div>
                        <div>
                            <h4 style="color: var(--primary-color);">Pemrograman Berorientasi Obyek</h4>
                            <p style="color: #94a3b8; margin-bottom: 0.5rem;">Semester 2</p>
                            <p>Mempelajari konsep dasar PBO seperti kelas, objek, enkapsulasi, pewarisan, dan polimorfisme</p>
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <h4 style="color: var(--primary-color);">Pemrograman Berbasis Platform</h4>
                            <p style="color: #94a3b8; margin-bottom: 0.5rem;">Semester 3</p>
                            <p>Mempelajari perancangan, pengembangan, dan evaluasi aplikasi untuk berbagai platform seperti web, desktop, dan mobile</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top: 4rem;">
                <h3 style="text-align: center; color: var(--primary-color); margin-bottom: 2rem;">Skill & Teknologi</h3>
                <div style="text-align: center;">
                    <span class="skill-badge">HTML</span>
                    <span class="skill-badge">CSS</span>
                    <span class="skill-badge">JavaScript</span>
                    <span class="skill-badge">Java</span>
                    <span class="skill-badge">CSS Framework</span>
                    <span class="skill-badge">Phyton</span>
                    <span class="skill-badge">Networking</span>
                    <span class="skill-badge">Fiber Optic</span>
                    <span class="skill-badge">Figma</span>
                    <span class="skill-badge">Cisco Packet Tracer</span>
                    <span class="skill-badge">Bootstrap</span>
                    <span class="skill-badge">Visual Studio Code</span>
                    <span class="skill-badge">Google Colab</span>
                </div>
            </div>
        </section>
    </div>

    <!-- Projects Page -->
    <div id="projects" class="page">
        <section class="container">
            <h2>Proyek Yang Sudah Dikerjakan</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="card-custom">
                        <div><img src="Screenshot proyek Kalkulator.png" alt="Gambar Kalkulator" style="height: 150px; border-radius: 8px; margin-bottom: 1rem;"></div>
                        <h3>Kalkulator Sederhana</h3>
                        <p>Website Kalkulator sederhana yang bisa mengoperasikan 1 angka dengan 1 angka yang lain dengan 4 jenis operasi bilangan seperti penjumlahan, pengurangan, perkalian, dan pembagian</p>
                        <div style="margin-top: 1rem;">
                            <span class="skill-badge">CSS</span>
                            <span class="skill-badge">JavaScript</span>
                            <span class="skill-badge">HTML</span>
                            <span class="skill-badge">CSS</span>
                            <span class="skill-badge">CSS Framework</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="card-custom">
                        <div><img src="Screenshot Praktek web TI.png" alt="Gambar Web TI" style="height: 150px; border-radius: 8px; margin-bottom: 1rem;"></div>
                        <h3>Website Jurusan TI</h3>
                        <p>Praktek membuat website home TI semirip mungkin menggunakan HTML dan CSS secara mandiri</p>
                        <div style="margin-top: 1rem;">
                            <span class="skill-badge">HTML</span>
                            <span class="skill-badge">CSS</span>
                            <span class="skill-badge">Bootstrap</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="card-custom">
                        <div><img src="Screenshot Hasil CV Kreatif.png" alt="Gambar CV Kreatif Sederhana" style="height: 150px; border-radius: 8px; margin-bottom: 1rem;"></div>
                        <h3>CV Kreatif</h3>
                        <p>Membuat CV Kreatif menggunakan HTML dan CSS Sederhana yang ada dalam cheatsheet CSS</p>
                        <div style="margin-top: 1rem;">
                            <span class="skill-badge">HTML</span>
                            <span class="skill-badge">CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2025 Portofolio John David Kusuma Novianto.</p>
            <p style="margin-top: 1rem; font-size: 0.9rem;">24051204206@mhs.unesa.ac.id +62 822-3310-5822</p>
        </div>
    </footer>

    <script src="bootstrap-5.3.8-dist/bootstrap-5.3.8-dist/js/bootstrap.min.js"></script>
    <script src="projectmandiri.js"></script>
</body>
</html>


CSS


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --dark-bg: #0f172a;
    --light-text: #f1f5f9;
    --card-bg: #1e293b;
    --bs-body-color: #f1f5f9;
    --bs-body-bg: #0f172a;
}

/* Bootstrap utilities dan custom styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, var(--dark-bg) 0%, #1a1f35 100%);
    color: var(--light-text);
    min-height: 100vh;
}

/* Header & Navigation */
header {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(99, 102, 241, 0.3);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-link {
    color: var(--light-text) !important;
    margin: 0 0.5rem;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-color) !important;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent);
    border-radius: 50%;
    top: 50%;
    left: 10%;
    transform: translate(-50%, -50%);
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translate(-50%, -50%); }
    50% { transform: translate(-50%, -60%); }
}

.hero-content {
    z-index: 1;
    animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero h1 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero p {
    font-size: 1.5rem;
    color: #cbd5e1;
    margin-bottom: 2rem;
}

.btn-custom {
    padding: 0.75rem 2rem;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-primary-custom {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    text-decoration: none;
}

.btn-primary-custom:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
    color: white;
}

.btn-secondary-custom {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    text-decoration: none;
}

.btn-secondary-custom:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
}

/* Section Styles */
section {
    padding: 5rem 0;
}

section h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Card Styles */
.card-custom {
    background: var(--card-bg);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    height: 100%;
}

.card-custom:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.2);
}

.card-custom h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-weight: 600;
}

.skill-badge {
    display: inline-block;
    background: rgba(99, 102, 241, 0.2);
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    margin: 0.25rem;
    font-size: 0.9rem;
    border: 1px solid rgba(99, 102, 241, 0.5);
}

/* Footer */
footer {
    background: rgba(15, 23, 42, 0.95);
    border-top: 1px solid rgba(99, 102, 241, 0.3);
    padding: 3rem 0 1rem;
    text-align: center;
    color: #94a3b8;
}

footer a {
    color: var(--primary-color);
    text-decoration: none;
    margin: 0 0.5rem;
    transition: all 0.3s ease;
}

footer a:hover {
    color: var(--secondary-color);
}


/* Hidden pages */
.page {
    display: none;
}

.page.active {
    display: block;
    animation: fadeInUp 0.5s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }

    .hero p {
        font-size: 1.1rem;
    }

    section h2 {
        font-size: 2rem;
    }
}

JavaScript

// Navigation & Page Switching
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    document.getElementById(pageName).classList.add('active');
    
    const activeLink = document.querySelector(`a[onclick="showPage('${pageName}')"]`);
    if (activeLink) activeLink.classList.add('active');
    
    window.scrollTo(0, 0);
}

// Mobile nav close di link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});
