<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>plane</title>
    <link rel="stylesheet" type="text/css" href="css/custom.css">
    <link rel="stylesheet" type="text/css" href="css/dialog.css">
</head>
<body>
<section class="navbar-top">
    <a href="#">
        <div class="logo"></div>
    </a>
    <ul class="nav-header">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contacts</a></li>
    </ul>
    <div class="user">
        <div class="person"><a href="#"><img src="images/login-norm-search.png"></a></div>
        <div class="search">
            <input type="search">
        </div>
    </div>
</section>
<div class="top-vrr">
    <ul class="vrr-menu">
        <li><a href="#">Coverage</a></li>
        <li><a href="#">Data &amp; History</a></li>
        <li><a href="#">Applications</a></li>
    </ul>
</div>
<section class="navbar-left">
    <ul class="cl-menu">
        <li id="air-craft">
            <a><img src="images/air-craft.png"></a>
            <div class="arrow-left"></div>
            <ul>
                <li>
                    <a href="#">Navidad 2015</a>
                </li>
                <li>
                    <a href="#">Navidad 2014</a>
                </li>
            </ul>
        </li>
        <li id="air-ports"><a><img src="images/air-ports.png"></a></li>
        <li id="play-log"><a><img src="images/play-log.png"></a></li>
        <li id="filter">
            <a><img src="images/filter.png"></a>
            <div class="arrow-left"></div>
            <ul>
                <li>
                    <a href="#">Navidad 2015</a>
                </li>
                <li>
                    <a href="#">Navidad 2014</a>
                </li>
            </ul>
        </li>
        <li id="settings "><a><img src="images/settings.png"></a></li>
    </ul>
    <a id="trigger-dialog" class="button button--dialog avatar">
        <img src="images/avatar.png">
    </a>
</section>

<div id="map_wrapper">
    <div id="map_canvas" class="mapping"></div>
</div>


<div class="dialog" id="dialog-1">
    <div class="mover-wrap dialog__content">
        <div class="handle"></div>
        <div class="mover">
            <div class="dialog__content-inner">
                <div class="dialog__header">
                    <button class="action action--close">
                        <i class="icon icon--cross"></i>
                        <span class="text-hidden">Close dialog</span>
                    </button>
                </div>
                <div class="dialog__body">
                    <div class="actions">
                        <div class="mover__element">
                            <div href="#" class="action">
                                <input type="text" class="sign-form">
                            </div>
                        </div>
                        <div class="mover__element">
                            <div href="#" class="action">
                                <input type="text" class="sign-form">
                            </div>
                        </div>
                        <div class="mover__element">
                            <div href="#" class="action">
                                <span class="action__subline">Forgot password?</span>
                                <input type="submit" value="SIGN IN" class="sign-submit">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dialog__footer">
                    <a href="#">New user? Sign up now</a>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/plane.js"></script>
<script type="text/javascript" src="js/draggabilly.pkgd.min.js"></script>
<script type="text/javascript" src="js/dynamics.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/jquery-1.7.0.min.js"></script>
<script type="text/javascript" src="js/jquery.tooltipster.min.js"></script>
</body>
</html>