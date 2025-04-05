<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Download War Thunder - Free-to-play military game">
    <title>Download War Thunder - Choose Your Platform</title>
    <link rel="shortcut icon" href="Images/WTReader.png" type="image/x-icon">
    <link rel="stylesheet" href="/Css/reset.css">
    <link rel="stylesheet" href="/Css/Style.css">
    <link rel="stylesheet" href="/Css/responsive.css">
</head>
<body>
    <?php include 'partials/header.php'; ?>

    <main class="download-page">
        <section class="download-hero">
            <div class="container">
                <h1>Download War Thunder</h1>
                <p class="subtitle">Join millions of players worldwide in the ultimate military combat experience</p>
            </div>
        </section>

        <section class="download-options">
            <div class="container">
                <div class="download-card">
                    <div class="card-header">
                        <img src="Images/WTpag.jpeg" alt="F-15 and SU-27" class="game-image">
                        <div class="game-info">
                            <h2>War Thunder</h2>
                            <p class="game-tagline">The most comprehensive free-to-play MMO military game</p>
                            <div class="game-meta">
                                <span class="rating">4.8 ★★★★★</span>
                                <span class="players">50M+ players</span>
                            </div>
                        </div>
                    </div>

                    <div class="platform-selection">
                        <h3>Select your platform:</h3>
                        <div class="platform-grid">
                            <div class="platform-option">
                                <img src="Images/logo-pc.svg" alt="PC">
                                <h4>Windows PC</h4>
                                <p>Direct download or via Steam</p>
                                <button class="btn-download"  data-platform="pc">Download (2.3GB)</button>
                            </div>
                            <div class="platform-option">
                                <img src="Images/logo-ps5.svg" alt="PlayStation">
                                <h4>PlayStation</h4>
                                <p>PS4 & PS5</p>
                                <button class="btn-download" data-platform="ps">Download from PSN</button>
                            </div>
                            <div class="platform-option">
                                <img src="Images/logo-xbox-series-s.svg" alt="Xbox">
                                <h4>Xbox</h4>
                                <p>Xbox One & Series X/S</p>
                                <button class="btn-download" data-platform="xbox">Download from Store</button>
                            </div>
                        </div>
                    </div>

                    <div class="system-requirements">
                        <h3>System Requirements</h3>
                        <div class="requirements-grid">
                            <div class="requirements-col">
                                <h4>Minimum</h4>
                                <ul>
                                    <li>OS: Windows 7/8/10 (64-bit)</li>
                                    <li>CPU: Dual-Core 2.2 GHz</li>
                                    <li>RAM: 4GB</li>
                                    <li>GPU: DirectX 10.1, 1GB VRAM</li>
                                    <li>Storage: 8GB</li>
                                </ul>
                            </div>
                            <div class="requirements-col">
                                <h4>Recommended</h4>
                                <ul>
                                    <li>OS: Windows 10/11 (64-bit)</li>
                                    <li>CPU: Quad-Core 3.5 GHz</li>
                                    <li>RAM: 16GB</li>
                                    <li>GPU: DirectX 11, 4GB VRAM</li>
                                    <li>Storage: SSD, 20GB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <script src="JS/play.js" defer></script>
</body>
</html>