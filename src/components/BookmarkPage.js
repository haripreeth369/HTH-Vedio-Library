import React from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoItem from './VideoItem';

const BookmarkPage = ({ videos, onPlay, onRemove, onBookmark }) => {
  return (
    <Row className="mt-4">
      {videos.map((video, index) => (
        <Col md={4} key={index}>
          <VideoItem
            video={video}
            onPlay={() => onPlay(video)}
            onRemove={() => onRemove(video)}
            onBookmark={() => onBookmark(video)}
          />
        </Col>
      ))}
    </Row>
  );
};

export default BookmarkPage;
