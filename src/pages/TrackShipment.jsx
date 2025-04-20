import React, { useState } from 'react';
import '../assets/css/trackShipment.css';

const TrackShipment = () => {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();

    // Mock tracking status — replace with API in future
    if (trackingId.trim() !== '') {
      setStatus({
        location: 'Lahore Distribution Center',
        stage: 'In Transit',
        estimatedDelivery: 'April 24, 2025',
        lastUpdated: '2 hours ago'
      });
    } else {
      setStatus(null);
    }
  };

  return (
    <section className="track-section">
      <h2>Track Your Shipment</h2>
      <form onSubmit={handleTrack} className="track-form">
        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          required
        />
        <button type="submit">Track</button>
      </form>

      {status && (
        <div className="status-box">
          <h3>Status: {status.stage}</h3>
          <p><strong>Current Location:</strong> {status.location}</p>
          <p><strong>Estimated Delivery:</strong> {status.estimatedDelivery}</p>
          <p><em>Last Updated: {status.lastUpdated}</em></p>
        </div>
      )}
    </section>
  );
};

export default TrackShipment;
