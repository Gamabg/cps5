import React from 'react';

const CardSkeleton = () => (
  <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, width: 200, background: '#f6f6f6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ width: '100%', height: 120, background: '#ddd', borderRadius: 4, marginBottom: 8 }} />
    <div style={{ width: '60%', height: 20, background: '#ccc', borderRadius: 4 }} />
  </div>
);

export default CardSkeleton;
