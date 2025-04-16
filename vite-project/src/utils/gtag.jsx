
export function gtag_report_conversion(url) {
    const callback = function () {
      if (typeof url !== 'undefined') {
       // window.location = url;
       console.log(`Te redirigirían aquí ${url}`)
      }
    };
    window.gtag('event', 'conversion', {
      send_to: 'AW-16970665561/a3yYCOittLkaENmcn5w_',
      event_callback: callback,
    });
    return false;
  }