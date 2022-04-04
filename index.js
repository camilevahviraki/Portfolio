    function showNav() {
        var nav_Id = document.getElementById("My_navList");

        var UnionIcon = document.getElementById("UnionIcon");

        let nav_class = document.getElementsByClassName('nav_list');

        let png_list = document.getElementsByClassName('links_png');

        let logo_1 = document.querySelector('a');

        let Nav_all = document.querySelector('nav');

        let nav_class_il = document.querySelectorAll('.nav_menu');

        let li_nav_ul = document.querySelectorAll('.li_nav');

        let section12 = document.getElementsByClassName('p_section12');

        let hide_nav = document.getElementById('clickMe2');

        let show_nav = document.getElementById('clickMe1');

        UnionIcon.style.display = 'none';
        logo_1.style.display = 'none';
        Nav_all.style.height = '100vh';
        Nav_all.style.alignItems = 'baseline';
        hide_nav.style.display = 'flex';
        show_nav.style.display = 'none';
        hide_nav.style.top = '12px';

        for (var i = 0; i < nav_class.length; i++) {
            nav_class[i].style.display = 'flex';
            nav_class[i].style.padding = '2px 0 0 0';
            section12[i].style.margin = '100vh 0 0 0';
            png_list[i].style.margin = '6px 0 120px 0';
        }

        for (var a = 0; a < nav_class_il.length; a++) {
            nav_class_il[a].style.padding = '16px';
        }

        console.log("NavBar available");
    }

    function hideNav() {
        let Nav_all = document.querySelector('nav');

        var UnionIcon = document.getElementById("UnionIcon");

        let logo = document.querySelector('a');

        let nav_class = document.getElementsByClassName('nav_list');

        let png_list = document.getElementsByClassName('links_png');

        let nav_class_il = document.querySelectorAll('.nav_menu');

        let li_nav_ul = document.querySelectorAll('.li_nav');

        let section12 = document.getElementsByClassName('p_section12');

        let hide_nav = document.getElementById('clickMe2');

        let show_nav = document.getElementById('clickMe1');

        UnionIcon.style.display = 'none';
        logo.style.display = 'flex';
        Nav_all.style.alignItems = 'center';
        Nav_all.style.height = '48px';
        hide_nav.style.display = 'none';
        show_nav.style.display = 'flex';


        for (var i = 0; i < nav_class.length; i++) {

            nav_class[i].style.padding = 'calc((100vh - 184px) / 2) 0 0 0';
            section12[i].style.margin = '48px 0 0 0';
            png_list[i].style.margin = '6px 0 6px 0';
            nav_class[i].style.display = 'none';
        }

        console.log("NavBar Hiden");
    }
    console.log("Phone screen")