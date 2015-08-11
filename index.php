<?php require('core/core.php'); ?>

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>plane</title>
    <link rel="stylesheet" type="text/css" href="css/custom.css">
    <link rel="stylesheet" type="text/css" href="css/dialog.css">
    <link rel="stylesheet" type="text/css" href="css/slide.css">
    <script type="text/javascript" src="js/modernizr.custom.js"></script>
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
            <input type="search" onblur="if(this.value =!'') { this.value = ''; }">
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
<div class="plane-info">
    <a href="#" class="close-btn"></a>
    <div class="airline-logo"><img src="images/airline-logo.png"></div>

    <div id="cbp-fwslider" class="cbp-fwslider">
        <ul>
            <li><a href="#"><img src="images/plane.png" alt="img01"/></a></li>
            <li><a href="#"><img src="images/plane.png" alt="img02"/></a></li>
            <li><a href="#"><img src="images/plane.png" alt="img03"/></a></li>
        </ul>
    </div>
    <div class="airplane-model"><span>Jetsteam Jetsteam 41</span></div>
    <div class="flight-info">
        <span>
            <p>Flight NO.</p>
            <p>LH462</p>
        </span>
        <span>
            <p>Callsign</p>
            <p>DLH462</p>
        </span>
        <span>
            <p>Tail</p>
            <p>D-AIMG</p>
        </span>
    </div>
    <div class="route">
        <div class="line"></div>
        <div class="flag"></div>
    </div>
</div>
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
<script type="text/javascript" src="js/functions.js"></script>
<script type="text/javascript" src="js/plane.js"></script>
<script type="text/javascript" src="js/draggabilly.pkgd.min.js"></script>
<script type="text/javascript" src="js/dynamics.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/slide.min.js"></script>
<script>
    $( function() {
        /*
         - how to call the plugin:
         $( selector ).cbpFWSlider( [options] );
         - options:
         {
         // default transition speed (ms)
         speed : 500,
         // default transition easing
         easing : 'ease'
         }
         - destroy:
         $( selector ).cbpFWSlider( 'destroy' );
         */

        $( '#cbp-fwslider' ).cbpFWSlider();

    } );
</script>
</body>
</html>