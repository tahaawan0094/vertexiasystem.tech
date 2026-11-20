import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Download, ArrowLeft, ShieldCheck } from 'lucide-react';
import './DownloadRedirectPage.css';

export default function DownloadRedirectPage({
  title,
  fileName,
  version,
  downloadUrl,
  backUrl,
  backLabel,
}) {
  useEffect(() => {
    document.title = `Downloading ${title} | VERTEXIA`;

    // Initiate automatic download
    const timer = setTimeout(() => {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', fileName);
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 400);

    return () => clearTimeout(timer);
  }, [downloadUrl, fileName, title]);

  const handleBack = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', backUrl);
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="dl-page-root">
      <div className="page-container" style={{ paddingTop: '16px' }}>
        <Navbar />
      </div>

      <main className="dl-main-sec">
        <div className="dl-card">
          <div className="dl-eb">[ VERTEXIA / OFFICIAL RELEASE ]</div>
          <h1 className="dl-h1">
            DOWNLOADING <em>{title.toUpperCase()}</em>
          </h1>
          <p className="dl-desc">
            Your download for <strong>{fileName}</strong> ({version}) should start automatically.
          </p>

          <div className="dl-meta-pill">
            <ShieldCheck size={16} className="dl-shield-icon" />
            <span>Windows 10/11 (64-bit) · Verified installer · Direct release</span>
          </div>

          <div className="dl-actions-row">
            <a href={downloadUrl} className="dl-btn dl-btn-primary">
              <span>Click if download didn't start</span>
              <Download size={14} />
            </a>
            <a href={backUrl} onClick={handleBack} className="dl-btn dl-btn-back">
              <ArrowLeft size={14} />
              <span>Back to {backLabel}</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
