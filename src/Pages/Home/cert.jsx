import React, { useState, useEffect } from 'react';
import { ZoomIn, ZoomOut, Download, ExternalLink, Award } from 'lucide-react';

const BallerinaCertificateViewer = () => {
  const [zoom, setZoom] = useState(100);
  const [isLoading, setIsLoading] = useState(true);

  // Google Drive Certificate ID
  const certificateFileId = '1_0q8DWD3p9hNkDx6KYSiY6RBp0Qjbq5U';
  const certificatePreviewUrl = `https://drive.google.com/file/d/${certificateFileId}/preview`;
  const certificateViewUrl = `https://drive.google.com/file/d/${certificateFileId}/view`;
  const certificateDownloadUrl = `https://drive.google.com/uc?export=download&id=${certificateFileId}`;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const zoomIn = () => setZoom(prev => Math.min(prev + 25, 150));
  const zoomOut = () => setZoom(prev => Math.max(prev - 25, 75));

  return (
    <div className="ballerina-cert-viewer-root-wrapper">
      <div className="ballerina-cert-viewer-container">
        {/* Animated Mesh Background */}
        <div className="ballerina-mesh-bg">
        <div className="ballerina-mesh-gradient ballerina-mesh-1"></div>
        <div className="ballerina-mesh-gradient ballerina-mesh-2"></div>
        <div className="ballerina-mesh-gradient ballerina-mesh-3"></div>
        <div className="ballerina-mesh-gradient ballerina-mesh-4"></div>
        <div className="ballerina-mesh-gradient ballerina-mesh-5"></div>
      </div>

      {/* Header */}
      <div className="ballerina-cert-viewer-header">
        <div className="ballerina-header-content">
          <h1 className="ballerina-header-title">
            <Award className="ballerina-header-icon" />
            <span>Achievement Certificate</span>
          </h1>
          <p className="ballerina-header-subtitle">
            Congratulations on ranking in the Top 15 - Innovate With Ballerina 2025
          </p>
        </div>
      </div>

      {/* Top Download Button */}
      <div className="ballerina-top-actions">
        <a
          href={certificateDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ballerina-download-btn-top"
        >
          <Download className="ballerina-btn-icon" />
          <span className="ballerina-btn-text">Download Certificate</span>
        </a>
      </div>

      {/* Zoom Controls */}
      <div className="ballerina-zoom-controls-wrapper">
        <div className="ballerina-zoom-controls">
          <button
            onClick={zoomOut}
            className="ballerina-zoom-btn"
            title="Zoom Out"
          >
            <ZoomOut className="ballerina-zoom-icon" />
          </button>
          <div className="ballerina-zoom-display">
            <span className="ballerina-zoom-text">{zoom}%</span>
          </div>
          <button
            onClick={zoomIn}
            className="ballerina-zoom-btn"
            title="Zoom In"
          >
            <ZoomIn className="ballerina-zoom-icon" />
          </button>
          <a
            href={certificateViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ballerina-full-view-btn"
            title="Open in new tab"
          >
            <ExternalLink className="ballerina-external-icon" />
            <span className="ballerina-full-view-text">Full View</span>
          </a>
        </div>
      </div>

      {/* Certificate Viewer */}
      <div className="ballerina-viewer-content">
        <div className="ballerina-viewer-wrapper">
          {isLoading ? (
            <div className="ballerina-loading-state">
              <div className="ballerina-loading-content">
                <div className="ballerina-loading-spinner-wrapper">
                  <div className="ballerina-loading-spinner"></div>
                </div>
                <h3 className="ballerina-loading-title">Loading Certificate...</h3>
                <p className="ballerina-loading-subtitle">Please wait while we prepare your achievement</p>
              </div>
            </div>
          ) : (
            <div className="ballerina-certificate-card">
              <div
                className="ballerina-certificate-zoom-wrapper"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'center top',
                }}
              >
                <iframe
                  src={certificatePreviewUrl}
                  className="ballerina-certificate-iframe"
                  style={{ height: '80vh', minHeight: '600px' }}
                  title="Ballerina Certificate Preview"
                  loading="lazy"
                />
              </div>
              {/* Footer */}
              <div className="ballerina-certificate-footer">
                <div className="ballerina-footer-content">
                  <div className="ballerina-footer-info">
                    <Award className="ballerina-footer-icon" />
                    <span>Top 15 Achievement - Ballerina 2025</span>
                  </div>
                  <div className="ballerina-footer-hint">
                    Click "Full View" or "Download Certificate" for better quality
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="ballerina-cta-section">
        <div className="ballerina-cta-content">
          <div className="ballerina-cta-text-center">
            <h2 className="ballerina-cta-title">Share Your Achievement!</h2>
            <div className="ballerina-cta-buttons">
              <a
                href={certificateDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ballerina-cta-btn-primary"
              >
                <Download className="ballerina-cta-icon" />
                Download Certificate
              </a>
              <a
                href={certificateViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ballerina-cta-btn-secondary"
              >
                <ExternalLink className="ballerina-cta-icon" />
                Open in Drive
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Root Wrapper - Complete Isolation */
        .ballerina-cert-viewer-root-wrapper {
          all: initial;
          display: block;
          position: relative;
          isolation: isolate;
          contain: layout style paint;
          width: 100%;
          min-height: 100vh;
        }

        .ballerina-cert-viewer-root-wrapper * {
          box-sizing: border-box;
        }

        /* Container with Mesh Background */
        .ballerina-cert-viewer-container {
          min-height: 100vh;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow-x: hidden;
        }

        /* Animated Mesh Background */
        .ballerina-mesh-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: linear-gradient(135deg, 
            #0d2836 0%, 
            #1a3d4d 20%,
            #2d5a5f 40%,
            #5a7a6e 60%,
            #8b9566 80%,
            #b8a566 100%
          );
          overflow: hidden;
        }

        .ballerina-mesh-gradient {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: ballerina-float 20s ease-in-out infinite;
        }

        .ballerina-mesh-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(184, 165, 102, 0.6) 0%, transparent 70%);
          top: -10%;
          left: -10%;
          animation-delay: 0s;
        }

        .ballerina-mesh-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(62, 184, 166, 0.5) 0%, transparent 70%);
          top: 20%;
          right: -15%;
          animation-delay: -5s;
        }

        .ballerina-mesh-3 {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(90, 122, 110, 0.6) 0%, transparent 70%);
          bottom: 10%;
          left: 10%;
          animation-delay: -10s;
        }

        .ballerina-mesh-4 {
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(45, 90, 95, 0.5) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -15s;
        }

        .ballerina-mesh-5 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 149, 102, 0.5) 0%, transparent 70%);
          bottom: -5%;
          right: 5%;
          animation-delay: -7s;
        }

        @keyframes ballerina-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(50px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-30px, 30px) scale(0.9);
          }
          75% {
            transform: translate(30px, 50px) scale(1.05);
          }
        }

        /* All content above mesh background */
        .ballerina-cert-viewer-header,
        .ballerina-top-actions,
        .ballerina-zoom-controls-wrapper,
        .ballerina-viewer-content,
        .ballerina-cta-section {
          position: relative;
          z-index: 1;
        }

        /* Header */
        .ballerina-cert-viewer-header {
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(184, 165, 102, 0.2);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          backdrop-filter: blur(10px);
        }

        .ballerina-header-content {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2rem 1rem;
          text-align: center;
        }

        .ballerina-header-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: #111827;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin: 0;
        }

        .ballerina-header-icon {
          width: 1.75rem;
          height: 1.75rem;
          color: #3eb8a6;
        }

        .ballerina-header-subtitle {
          margin-top: 0.5rem;
          color: #4b5563;
          font-size: 1rem;
        }

        /* Top Actions */
        .ballerina-top-actions {
          display: flex;
          justify-content: flex-end;
          max-width: 72rem;
          margin: 0 auto;
          padding: 1.5rem 1rem 0;
        }

        .ballerina-download-btn-top {
          display: inline-flex;
          align-items: center;
          padding: 0.625rem 1.25rem;
          background: #3eb8a6;
          color: white;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px 0 rgba(62, 184, 166, 0.2);
          font-weight: 500;
          font-size: 0.9375rem;
        }

        .ballerina-download-btn-top:hover {
          background: #2d9d8e;
          box-shadow: 0 4px 8px 0 rgba(62, 184, 166, 0.3);
          transform: translateY(-1px);
        }

        .ballerina-btn-icon {
          width: 1.125rem;
          height: 1.125rem;
          margin-right: 0.5rem;
          flex-shrink: 0;
        }

        .ballerina-btn-text {
          white-space: nowrap;
        }

        /* Zoom Controls */
        .ballerina-zoom-controls-wrapper {
          max-width: 72rem;
          margin: 0 auto;
          padding: 1rem 1rem;
        }

        .ballerina-zoom-controls {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .ballerina-zoom-btn {
          padding: 0.625rem;
          border-radius: 0.5rem;
          color: #2d5a5f;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 2.5rem;
          min-height: 2.5rem;
        }

        .ballerina-zoom-btn:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: translateY(-1px);
        }

        .ballerina-zoom-btn:active {
          transform: translateY(0);
        }

        .ballerina-zoom-icon {
          width: 1.125rem;
          height: 1.125rem;
        }

        .ballerina-zoom-display {
          padding: 0.625rem 0.875rem;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 0.5rem;
          min-width: 4.5rem;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .ballerina-zoom-text {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #2d5a5f;
        }

        .ballerina-full-view-btn {
          display: flex;
          align-items: center;
          padding: 0.625rem 1rem;
          color: #2d5a5f;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.9375rem;
          white-space: nowrap;
        }

        .ballerina-full-view-btn:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: translateY(-1px);
        }

        .ballerina-external-icon {
          width: 1.125rem;
          height: 1.125rem;
          margin-right: 0.375rem;
          flex-shrink: 0;
        }

        .ballerina-full-view-text {
          white-space: nowrap;
        }

        /* Viewer Content */
        .ballerina-viewer-content {
          flex: 1;
          padding: 1.5rem 0;
        }

        .ballerina-viewer-wrapper {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Loading State */
        .ballerina-loading-state {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 24rem;
          padding: 2rem 1rem;
        }

        .ballerina-loading-content {
          text-align: center;
        }

        .ballerina-loading-spinner-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
          background: rgba(62, 184, 166, 0.15);
          border-radius: 9999px;
          margin-bottom: 1rem;
        }

        .ballerina-loading-spinner {
          width: 2rem;
          height: 2rem;
          border: 2px solid #3eb8a6;
          border-top-color: transparent;
          border-radius: 9999px;
          animation: ballerina-spin 1s linear infinite;
        }

        .ballerina-loading-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .ballerina-loading-subtitle {
          color: #6b7280;
          font-size: 0.9375rem;
        }

        @keyframes ballerina-spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Certificate Card */
        .ballerina-certificate-card {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }

        .ballerina-certificate-zoom-wrapper {
          position: relative;
          overflow: auto;
        }

        .ballerina-certificate-iframe {
          width: 100%;
          border: 0;
          display: block;
        }

        /* Certificate Footer */
        .ballerina-certificate-footer {
          background: #f9fafb;
          padding: 1rem 1.5rem;
          border-top: 1px solid #e5e7eb;
        }

        .ballerina-footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .ballerina-footer-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #4b5563;
        }

        .ballerina-footer-icon {
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .ballerina-footer-hint {
          font-size: 0.875rem;
          color: #6b7280;
        }

        /* CTA Section */
        .ballerina-cta-section {
          background: rgba(255, 255, 255, 0.95);
          border-top: 1px solid #e5e7eb;
          backdrop-filter: blur(10px);
        }

        .ballerina-cta-content {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        .ballerina-cta-text-center {
          text-align: center;
        }

        .ballerina-cta-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 1.5rem;
        }

        .ballerina-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .ballerina-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 0.875rem 1.75rem;
          background: #3eb8a6;
          color: white;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(62, 184, 166, 0.2);
          font-weight: 500;
          font-size: 1rem;
        }

        .ballerina-cta-btn-primary:hover {
          background: #2d9d8e;
          box-shadow: 0 6px 12px -1px rgba(62, 184, 166, 0.3);
          transform: translateY(-2px);
        }

        .ballerina-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.875rem 1.75rem;
          border: 2px solid rgba(45, 90, 95, 0.3);
          color: #2d5a5f;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 1rem;
        }

        .ballerina-cta-btn-secondary:hover {
          background: white;
          border-color: rgba(45, 90, 95, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .ballerina-cta-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
          flex-shrink: 0;
        }

        /* Tablet Responsive (768px - 1024px) */
        @media (max-width: 1024px) {
          .ballerina-header-content {
            padding: 1.75rem 1rem;
          }

          .ballerina-zoom-controls {
            gap: 0.625rem;
          }

          .ballerina-mesh-1,
          .ballerina-mesh-2,
          .ballerina-mesh-3,
          .ballerina-mesh-4,
          .ballerina-mesh-5 {
            filter: blur(60px);
          }
        }

        /* Mobile Responsive (max-width: 768px) */
        @media (max-width: 768px) {
          .ballerina-header-content {
            padding: 1.5rem 1rem;
          }

          .ballerina-header-title {
            font-size: 1.5rem;
            flex-direction: column;
            gap: 0.375rem;
          }

          .ballerina-header-icon {
            width: 1.5rem;
            height: 1.5rem;
          }

          .ballerina-header-subtitle {
            font-size: 0.9375rem;
            line-height: 1.5;
          }

          .ballerina-top-actions {
            padding: 1.25rem 1rem 0;
          }

          .ballerina-download-btn-top {
            padding: 0.625rem 1rem;
            font-size: 0.875rem;
          }

          .ballerina-btn-icon {
            width: 1rem;
            height: 1rem;
          }

          .ballerina-zoom-controls-wrapper {
            padding: 1rem;
          }

          .ballerina-zoom-controls {
            justify-content: center;
            gap: 0.5rem;
          }

          .ballerina-zoom-btn {
            padding: 0.5rem;
            min-width: 2.25rem;
            min-height: 2.25rem;
          }

          .ballerina-zoom-icon {
            width: 1rem;
            height: 1rem;
          }

          .ballerina-zoom-display {
            padding: 0.5rem 0.75rem;
            min-width: 4rem;
          }

          .ballerina-zoom-text {
            font-size: 0.875rem;
          }

          .ballerina-full-view-btn {
            padding: 0.5rem 0.875rem;
            font-size: 0.875rem;
          }

          .ballerina-external-icon {
            width: 1rem;
            height: 1rem;
          }

          .ballerina-viewer-content {
            padding: 1rem 0;
          }

          .ballerina-certificate-iframe {
            min-height: 500px !important;
            height: 70vh !important;
          }

          .ballerina-certificate-footer {
            padding: 1rem;
          }

          .ballerina-footer-content {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }

          .ballerina-footer-hint {
            font-size: 0.8125rem;
          }

          .ballerina-cta-content {
            padding: 2rem 1rem;
          }

          .ballerina-cta-title {
            font-size: 1.375rem;
            margin-bottom: 1.25rem;
          }

          .ballerina-cta-buttons {
            flex-direction: column;
            width: 100%;
            gap: 0.875rem;
          }

          .ballerina-cta-btn-primary,
          .ballerina-cta-btn-secondary {
            width: 100%;
            max-width: 22rem;
            justify-content: center;
            padding: 0.875rem 1.5rem;
          }

          .ballerina-mesh-1,
          .ballerina-mesh-2,
          .ballerina-mesh-3,
          .ballerina-mesh-4,
          .ballerina-mesh-5 {
            filter: blur(50px);
          }

          .ballerina-mesh-1 {
            width: 350px;
            height: 350px;
          }

          .ballerina-mesh-2 {
            width: 400px;
            height: 400px;
          }

          .ballerina-mesh-3 {
            width: 300px;
            height: 300px;
          }

          .ballerina-mesh-4 {
            width: 380px;
            height: 380px;
          }

          .ballerina-mesh-5 {
            width: 280px;
            height: 280px;
          }
        }

        /* Small Mobile (max-width: 480px) */
        @media (max-width: 480px) {
          .ballerina-header-content {
            padding: 1.25rem 0.75rem;
          }

          .ballerina-header-title {
            font-size: 1.25rem;
          }

          .ballerina-header-subtitle {
            font-size: 0.875rem;
          }

          .ballerina-top-actions {
            padding: 1rem 0.75rem 0;
          }

          .ballerina-download-btn-top {
            padding: 0.5rem 0.875rem;
            font-size: 0.8125rem;
          }

          .ballerina-btn-text {
            display: none;
          }

          .ballerina-btn-icon {
            margin-right: 0;
          }

          .ballerina-zoom-controls-wrapper {
            padding: 0.75rem;
          }

          .ballerina-zoom-display {
            min-width: 3.5rem;
            padding: 0.5rem 0.625rem;
          }

          .ballerina-full-view-text {
            display: none;
          }

          .ballerina-external-icon {
            margin-right: 0;
          }

          .ballerina-viewer-wrapper {
            padding: 0 0.75rem;
          }

          .ballerina-certificate-card {
            border-radius: 0.75rem;
          }

          .ballerina-certificate-iframe {
            min-height: 450px !important;
            height: 65vh !important;
          }

          .ballerina-certificate-footer {
            padding: 0.875rem;
          }

          .ballerina-footer-info,
          .ballerina-footer-hint {
            font-size: 0.8125rem;
          }

          .ballerina-cta-content {
            padding: 1.75rem 0.75rem;
          }

          .ballerina-cta-title {
            font-size: 1.25rem;
          }

          .ballerina-cta-btn-primary,
          .ballerina-cta-btn-secondary {
            padding: 0.75rem 1.25rem;
            font-size: 0.9375rem;
          }

          .ballerina-mesh-1,
          .ballerina-mesh-2,
          .ballerina-mesh-3,
          .ballerina-mesh-4,
          .ballerina-mesh-5 {
            filter: blur(40px);
          }

          .ballerina-mesh-1 {
            width: 280px;
            height: 280px;
          }

          .ballerina-mesh-2 {
            width: 320px;
            height: 320px;
          }

          .ballerina-mesh-3 {
            width: 250px;
            height: 250px;
          }

          .ballerina-mesh-4 {
            width: 300px;
            height: 300px;
          }

          .ballerina-mesh-5 {
            width: 230px;
            height: 230px;
          }
        }

        /* Extra Small Mobile (max-width: 360px) */
        @media (max-width: 360px) {
          .ballerina-header-title {
            font-size: 1.125rem;
          }

          .ballerina-header-subtitle {
            font-size: 0.8125rem;
          }

          .ballerina-zoom-btn,
          .ballerina-full-view-btn {
            min-width: 2rem;
            min-height: 2rem;
            padding: 0.375rem;
          }

          .ballerina-zoom-display {
            min-width: 3rem;
            padding: 0.375rem 0.5rem;
          }

          .ballerina-certificate-iframe {
            min-height: 400px !important;
            height: 60vh !important;
          }

          .ballerina-cta-title {
            font-size: 1.125rem;
          }

          .ballerina-cta-btn-primary,
          .ballerina-cta-btn-secondary {
            padding: 0.625rem 1rem;
            font-size: 0.875rem;
          }
        }

        /* Print Styles */
        @media print {
          .ballerina-mesh-bg,
          .ballerina-cert-viewer-header,
          .ballerina-top-actions,
          .ballerina-zoom-controls-wrapper,
          .ballerina-certificate-footer,
          .ballerina-cta-section {
            display: none;
          }

          .ballerina-cert-viewer-container {
            background: white;
          }

          .ballerina-certificate-card {
            box-shadow: none;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .ballerina-mesh-gradient {
            animation: none;
          }

          .ballerina-loading-spinner {
            animation: none;
          }
        }
      `}</style>
    </div>
    </div>
  );
};

export default BallerinaCertificateViewer;