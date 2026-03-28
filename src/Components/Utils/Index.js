export function gtag_report_conversion(url) {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location = url;
    }
  };

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18015237494/nbl7CPPRlpEcEPbqqo5D',
      value: 1.0,
      currency: 'INR',
      event_callback: callback,
    });
  }

  return false;
}