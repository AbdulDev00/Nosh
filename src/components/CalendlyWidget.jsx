import React, { useEffect, useRef, useState } from 'react';

const CalendlyWidget = () => {
  const calendlyRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          const scriptId = "calendly-widget-script";

          if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            script.onload = () => {
              if (window.Calendly) {
                window.Calendly.initInlineWidget({
                  url: 'https://calendly.com/noshaiautomation/45min?hide_gdpr_banner=1',
                  parentElement: calendlyRef.current,
                });
              }
            };
            document.body.appendChild(script);
          } else {
            // Already loaded
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/noshaiautomation/45min?hide_gdpr_banner=1',
              parentElement: calendlyRef.current,
            });
          }

          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (calendlyRef.current) {
      observer.observe(calendlyRef.current);
    }

    return () => observer.disconnect();
  }, [hasLoaded]);

  return (
    <div
      ref={calendlyRef}
      style={{ minWidth: '320px', height: '700px' }}
    >
      {!hasLoaded && (
        <div className="bg-gray-800 animate-pulse w-full h-full rounded-md" />
      )}
    </div>
  );
};

export default CalendlyWidget;
