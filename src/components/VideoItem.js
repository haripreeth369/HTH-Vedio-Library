import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './VideoItem.css';

const VideoItem = ({ video, onPlay, onBookmark, onRemove }) => {
  return (
    <Card className="mb-4">
      {video.type === 'url' ? (
        <Card.Img variant="top" src={`https://img.youtube.com/vi/${video.src.split('v=')[1]}/0.jpg`} />
      ) : (
        <Card.Img variant="top" src={video.src} />
      )}
      <Card.Body>
        <Card.Title className="video-name">{video.name}</Card.Title>
        <Button variant="primary" className="mt-2" onClick={onPlay}>
          Play
        </Button>
        <Button variant="secondary" className="ms-2 mt-2" onClick={onBookmark}>
          {video.isBookmarked ? 'Unmark' : 'Bookmark'}
        </Button>
        <Button variant="danger" className="ms-2 mt-2" onClick={onRemove}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VideoItem;
