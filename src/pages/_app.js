import Head from "next/head";
import Script from "next/script";
// import '../../public/js/scripts'

export default function MyApp({ Component, pageProps }) {

    const headerD = () => {
        window.addEventListener('DOMContentLoaded', event => {

            // Navbar shrink function
            var navbarShrink = function () {
                const navbarCollapsible = document.body.querySelector('#mainNav');
                if (!navbarCollapsible) {
                    return;
                }
                if (window.scrollY === 0) {
                    navbarCollapsible.classList.remove('navbar-shrink')
                } else {
                    navbarCollapsible.classList.add('navbar-shrink')
                }

            };

            // Shrink the navbar 
            navbarShrink();

            // Shrink the navbar when page is scrolled
            document.addEventListener('scroll', navbarShrink);

            //  Activate Bootstrap scrollspy on the main nav element
            const mainNav = document.body.querySelector('#mainNav');
            if (mainNav) {
                new bootstrap.ScrollSpy(document.body, {
                    target: '#mainNav',
                    rootMargin: '0px 0px -40%',
                });
            };

            // Collapse responsive navbar when toggler is visible
            const navbarToggler = document.body.querySelector('.navbar-toggler');
            const responsiveNavItems = [].slice.call(
                document.querySelectorAll('#navbarResponsive .nav-link')
            );
            responsiveNavItems.map(function (responsiveNavItem) {
                responsiveNavItem.addEventListener('click', () => {
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                    }
                });
            });

        });
    }
    return <>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
            <Script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossOrigin="" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
            <Script src="https://cdn.startbootstrap.com/sb-forms-latest.js" />
            <Script src="../../public/js/scripts" />
            <Script id="mainNav" onLoad={() => {
                window.addEventListener('DOMContentLoaded', event => {

                    // Navbar shrink function
                    var navbarShrink = function () {
                        const navbarCollapsible = document.body.querySelector('#mainNav');
                        if (!navbarCollapsible) {
                            return;
                        }
                        if (window.scrollY === 0) {
                            navbarCollapsible.classList.remove('navbar-shrink')
                        } else {
                            navbarCollapsible.classList.add('navbar-shrink')
                        }

                    };

                    // Shrink the navbar 
                    navbarShrink();

                    // Shrink the navbar when page is scrolled
                    document.addEventListener('scroll', navbarShrink);

                    //  Activate Bootstrap scrollspy on the main nav element
                    const mainNav = document.body.querySelector('#mainNav');
                    if (mainNav) {
                        new bootstrap.ScrollSpy(document.body, {
                            target: '#mainNav',
                            rootMargin: '0px 0px -40%',
                        });
                    };

                    // Collapse responsive navbar when toggler is visible
                    const navbarToggler = document.body.querySelector('.navbar-toggler');
                    const responsiveNavItems = [].slice.call(
                        document.querySelectorAll('#navbarResponsive .nav-link')
                    );
                    responsiveNavItems.map(function (responsiveNavItem) {
                        responsiveNavItem.addEventListener('click', () => {
                            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                                navbarToggler.click();
                            }
                        });
                    });

                });
            }} />
        </Head>
        <Component {...pageProps} />
    </>
}