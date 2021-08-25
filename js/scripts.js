/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

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

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
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

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});


//Gráfico de temperatura ambiente

var json= [{"created_at":"2021-08-24T10:03:14Z","entry_id":663,"field1":"16.40000"},{"created_at":"2021-08-24T10:08:15Z","entry_id":664,"field1":"16.40000"},{"created_at":"2021-08-24T10:13:15Z","entry_id":665,"field1":"16.20000"},{"created_at":"2021-08-24T10:18:15Z","entry_id":666,"field1":"14.50000"},{"created_at":"2021-08-24T10:23:16Z","entry_id":667,"field1":"16.70000"},{"created_at":"2021-08-24T10:28:16Z","entry_id":668,"field1":"16.20000"},{"created_at":"2021-08-24T10:33:17Z","entry_id":669,"field1":"16.30000"},{"created_at":"2021-08-24T10:38:17Z","entry_id":670,"field1":"16.30000"},{"created_at":"2021-08-24T10:43:17Z","entry_id":671,"field1":"16.20000"},{"created_at":"2021-08-24T10:48:18Z","entry_id":672,"field1":"16.20000"},{"created_at":"2021-08-24T10:53:18Z","entry_id":673,"field1":"16.10000"},{"created_at":"2021-08-24T10:58:19Z","entry_id":674,"field1":"15.90000"},{"created_at":"2021-08-24T11:03:19Z","entry_id":675,"field1":"16.20000"},{"created_at":"2021-08-24T11:08:19Z","entry_id":676,"field1":"16.30000"},{"created_at":"2021-08-24T11:13:20Z","entry_id":677,"field1":"16.40000"},{"created_at":"2021-08-24T11:18:20Z","entry_id":678,"field1":"16.40000"},{"created_at":"2021-08-24T11:23:21Z","entry_id":679,"field1":"16.20000"},{"created_at":"2021-08-24T11:28:21Z","entry_id":680,"field1":"16.20000"},{"created_at":"2021-08-24T11:33:21Z","entry_id":681,"field1":"16.50000"},{"created_at":"2021-08-24T11:38:25Z","entry_id":682,"field1":"16.30000"},{"created_at":"2021-08-24T11:43:25Z","entry_id":683,"field1":"16.30000"},{"created_at":"2021-08-24T11:48:26Z","entry_id":684,"field1":"16.60000"},{"created_at":"2021-08-24T11:53:28Z","entry_id":685,"field1":"16.80000"},{"created_at":"2021-08-24T11:58:36Z","entry_id":686,"field1":"17.00000"},{"created_at":"2021-08-24T12:03:37Z","entry_id":687,"field1":"17.20000"},{"created_at":"2021-08-24T12:08:37Z","entry_id":688,"field1":"17.20000"},{"created_at":"2021-08-24T12:13:39Z","entry_id":689,"field1":"17.10000"},{"created_at":"2021-08-24T12:18:44Z","entry_id":690,"field1":"17.30000"},{"created_at":"2021-08-24T12:23:49Z","entry_id":691,"field1":"17.40000"},{"created_at":"2021-08-24T12:28:57Z","entry_id":692,"field1":"17.60000"},{"created_at":"2021-08-24T12:33:58Z","entry_id":693,"field1":"17.40000"},{"created_at":"2021-08-24T12:39:03Z","entry_id":694,"field1":"17.70000"},{"created_at":"2021-08-24T12:44:09Z","entry_id":695,"field1":"18.80000"},{"created_at":"2021-08-24T12:49:10Z","entry_id":696,"field1":"19.40000"},{"created_at":"2021-08-24T12:59:17Z","entry_id":697,"field1":"23.40000"},{"created_at":"2021-08-24T13:04:17Z","entry_id":698,"field1":"27.10000"},{"created_at":"2021-08-24T13:09:22Z","entry_id":699,"field1":"28.50000"},{"created_at":"2021-08-24T13:14:23Z","entry_id":700,"field1":"31.60000"},{"created_at":"2021-08-24T13:19:39Z","entry_id":701,"field1":"33.80000"},{"created_at":"2021-08-24T13:24:43Z","entry_id":702,"field1":"31.80000"},{"created_at":"2021-08-24T13:29:46Z","entry_id":703,"field1":"33.70000"},{"created_at":"2021-08-24T13:34:58Z","entry_id":704,"field1":"32.30000"},{"created_at":"2021-08-24T13:45:06Z","entry_id":705,"field1":"27.50000"},{"created_at":"2021-08-24T16:14:09Z","entry_id":706,"field1":"28.50000"},{"created_at":"2021-08-24T16:19:10Z","entry_id":707,"field1":"28.50000"},{"created_at":"2021-08-24T16:24:10Z","entry_id":708,"field1":"25.80000"},{"created_at":"2021-08-24T16:29:11Z","entry_id":709,"field1":"24.90000"},{"created_at":"2021-08-24T16:34:11Z","entry_id":710,"field1":"24.50000"},{"created_at":"2021-08-24T16:39:12Z","entry_id":711,"field1":"24.30000"},{"created_at":"2021-08-24T16:44:12Z","entry_id":712,"field1":"24.40000"},{"created_at":"2021-08-24T16:49:13Z","entry_id":713,"field1":"24.50000"},{"created_at":"2021-08-24T16:54:13Z","entry_id":714,"field1":"24.50000"},{"created_at":"2021-08-24T22:18:10Z","entry_id":715,"field1":"23.90000"},{"created_at":"2021-08-24T22:24:58Z","entry_id":716,"field1":"23.70000"},{"created_at":"2021-08-24T22:25:27Z","entry_id":717,"field1":"23.80000"},{"created_at":"2021-08-24T22:26:01Z","entry_id":718,"field1":"23.70000"},{"created_at":"2021-08-24T22:30:44Z","entry_id":719,"field1":"23.70000"},{"created_at":"2021-08-24T22:32:09Z","entry_id":720,"field1":"23.70000"},{"created_at":"2021-08-24T22:36:14Z","entry_id":721,"field1":"23.60000"},{"created_at":"2021-08-24T22:44:23Z","entry_id":722,"field1":"23.60000"},{"created_at":"2021-08-24T22:52:37Z","entry_id":723,"field1":"23.60000"},{"created_at":"2021-08-24T22:55:23Z","entry_id":724,"field1":"23.60000"},{"created_at":"2021-08-24T23:01:59Z","entry_id":725,"field1":"23.70000"},{"created_at":"2021-08-24T23:10:15Z","entry_id":726,"field1":"23.70000"},{"created_at":"2021-08-24T23:18:28Z","entry_id":727,"field1":"23.60000"},{"created_at":"2021-08-24T23:26:41Z","entry_id":728,"field1":"23.60000"},{"created_at":"2021-08-24T23:34:56Z","entry_id":729,"field1":"23.40000"},{"created_at":"2021-08-24T23:43:10Z","entry_id":730,"field1":"23.30000"},{"created_at":"2021-08-24T23:51:25Z","entry_id":731,"field1":"23.30000"},{"created_at":"2021-08-24T23:59:39Z","entry_id":732,"field1":"23.10000"},{"created_at":"2021-08-25T00:02:25Z","entry_id":733,"field1":"23.40000"},{"created_at":"2021-08-25T00:02:54Z","entry_id":734,"field1":"23.30000"},{"created_at":"2021-08-25T00:03:12Z","entry_id":735,"field1":"23.50000"},{"created_at":"2021-08-25T00:03:59Z","entry_id":736,"field1":"23.50000"},{"created_at":"2021-08-25T00:09:01Z","entry_id":737,"field1":"23.40000"},{"created_at":"2021-08-25T00:14:01Z","entry_id":738,"field1":"22.60000"},{"created_at":"2021-08-25T00:19:00Z","entry_id":739,"field1":"21.30000"},{"created_at":"2021-08-25T00:24:01Z","entry_id":740,"field1":"20.60000"},{"created_at":"2021-08-25T00:29:00Z","entry_id":741,"field1":"20.70000"},{"created_at":"2021-08-25T00:33:59Z","entry_id":742,"field1":"20.50000"},{"created_at":"2021-08-25T00:38:58Z","entry_id":743,"field1":"20.40000"},{"created_at":"2021-08-25T00:43:57Z","entry_id":744,"field1":"20.20000"},{"created_at":"2021-08-25T00:48:56Z","entry_id":745,"field1":"20.20000"},{"created_at":"2021-08-25T00:53:55Z","entry_id":746,"field1":"20.10000"},{"created_at":"2021-08-25T00:58:55Z","entry_id":747,"field1":"20.00000"},{"created_at":"2021-08-25T01:03:55Z","entry_id":748,"field1":"19.70000"},{"created_at":"2021-08-25T01:08:58Z","entry_id":749,"field1":"19.40000"},{"created_at":"2021-08-25T01:14:11Z","entry_id":750,"field1":"19.50000"},{"created_at":"2021-08-25T01:19:09Z","entry_id":751,"field1":"19.50000"},{"created_at":"2021-08-25T01:24:09Z","entry_id":752,"field1":"19.30000"},{"created_at":"2021-08-25T01:29:42Z","entry_id":753,"field1":"19.10000"},{"created_at":"2021-08-25T01:34:40Z","entry_id":754,"field1":"19.10000"},{"created_at":"2021-08-25T01:39:43Z","entry_id":755,"field1":"19.40000"},{"created_at":"2021-08-25T01:44:41Z","entry_id":756,"field1":"19.40000"},{"created_at":"2021-08-25T01:49:47Z","entry_id":757,"field1":"19.50000"},{"created_at":"2021-08-25T01:54:55Z","entry_id":758,"field1":"19.40000"},{"created_at":"2021-08-25T01:59:53Z","entry_id":759,"field1":"19.30000"},{"created_at":"2021-08-25T02:04:53Z","entry_id":760,"field1":"19.10000"},{"created_at":"2021-08-25T02:18:54Z","entry_id":761,"field1":"19.20000"},{"created_at":"2021-08-25T02:23:54Z","entry_id":762,"field1":"19.30000"}]

var data=[];
var point=[];
for (var i in json){
    date= new Date(json[i].created_at);
    point.push(date.getTime());
  if (json[i].field1!=null){
    point.push(parseFloat(json[i].field1));
  }
  else{
    point.push(json[i].field1);
  }
  
    data.push(point);
    point=[];
}

Highcharts.chart('Graph-Temp', {
    chart: {
        marginBottom: 80
    },
    title: {
        text: 'Temperatura de secado',
        style:{
            fontSize: '22px',
            fontFamily: 'sans-serif'
        }
    },
    credits: false,
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Fecha'
        },
        labels: {
            style: {
                fontSize: '14px'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Temperatura'
        },
        labels: {
                format: '{value}'+ ' °C',
            style: {
                fontSize: '14px'
            }
        }
    },
    legend: {
        enabled:false
    },
    series: [{
        data: data
    }]
});