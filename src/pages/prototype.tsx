import React from 'react';
import Layout from '@theme/Layout';

export default function PrototypePage() {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
        }}>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
          height="100%"
          width="100%"
          src="https://embed.figma.com/proto/BA5HetAimfj3rIm63mhqMU/ELVIRA-T23?node-id=9322-21108&p=f&scaling=contain&content-scaling=fixed&page-id=9310%3A6558&embed-host=share"
          allowFullScreen>
        </iframe>
      </div>
    </Layout>
  );
}