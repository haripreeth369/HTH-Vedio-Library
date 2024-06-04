import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const VideoPopup = ({ video, onClose }) => {
  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scrolling when the component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Modal show={true} onHide={onClose} centered size="lg" dialogClassName="fullscreen-modal">
      <Modal.Body className="p-0" style={{ position: 'relative' }}>
        <Button variant="secondary" onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}>
          Close
        </Button>
        {video.type === 'url' ? (
          <iframe
            width="100%"
            height="100%"
            src={video.src.replace("watch?v=", "embed/")}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video"
            style={{ height: 'calc(100vh - 20px)', width: '100%' }}
          ></iframe>
        ) : (
          <video width="100%" height="100%" controls style={{ height: 'calc(100vh - 20px)', width: '100%' }} autoPlay>
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default VideoPopup;
