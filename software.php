<?php if ($CURRENT_PAGE == "software") { ?>
	<meta name="description" content="" />
	<meta name="keywords" content="" /> 
<?php } ?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="logo.png"/>
    <!----======== CSS ======== -->
    <!--<link rel="stylesheet" href="style.css">-->
	<link href="software.css" rel="stylesheet">
    <!----===== Boxicons CSS ===== -->
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <title>Software</title> 
</head>
<body>
    <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="logo.png" alt="">
                </span>

                <div class="text logo-text">
                    <span class="name">VELOCITY</span>
                    <span class="profession">Software</span>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <li class="search-box">
                    <i class='bx bx-search icon'></i>
                    <input type="text" placeholder="Search...">
                </li>

                <ul class="menu-links">
                
                    <li class="nav-link">
                        <a href="software.php">
                            <i class='bx bx-grid-alt icon' ></i>
                            <span class="text nav-text">Dashboard</span>
                        </a>
                    </li>
                
                    <li class="nav-link">
                        <a href="../index.html">
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Home</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="text nav-text">Stats</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-wallet icon' ></i>
                            <span class="text nav-text">Wallet</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="https://discord.gg/khaUkXxneH">
                            <i class='bx bxl-discord-alt icon' ></i>
                            <span class="text nav-text">Discord</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="https://velocity-shop.000webhostapp.com/">
                            <i class='bx bxl-vuejs icon' ></i>
                            <span class="text nav-text">Velocity</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div class="bottom-content">
                
                <li class="">
                    <a href="../login/login.php">
                        <i class='bx bx-log-in icon' ></i>
                        <span class="text nav-text">Login</span>
                    </a>
                </li>

                <li class="">
                    <a href="logout.php">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark mode</span>

                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>

    <section class="home">
        <div class="text">Our software</div>
    </section>

	<!--<div class="container">
		<img src="./[img]/code.jpg" class="img">
		<div class="overlay">
			<div class="text">Hello World</div>
		</div>
	</div>-->

    <script src="script.js"></script>

</body>
</html>