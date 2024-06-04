import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import VideoItem from './VideoItem';
import VideoPopup from './VideoPopup';
import BookmarkPage from './BookmarkPage';

const VideoLibrary = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  const handleAddVideo = (event) => {
    event.preventDefault();
    const url = event.target.url.value;
    const file = event.target.file.files[0];
    const name = event.target.name.value;

    if (url) {
      setVideos([...videos, { type: 'url', src: url, name, isBookmarked: false }]);
    } else if (file) {
      const src = URL.createObjectURL(file);
      setVideos([...videos, { type: 'file', src, name, isBookmarked: false }]);
    }
  };

  const handlePlayVideo = (video) => {
    setCurrentVideo(video);
    setShowPopup(true);
  };


  const handleBookmark = (video) => {
    video.isBookmarked = !video.isBookmarked;
    setVideos([...videos]);
    if (video.isBookmarked) {
      setBookmarkedVideos([...bookmarkedVideos, video]);
    } else {
      setBookmarkedVideos(bookmarkedVideos.filter((v) => v !== video));
    }
  };

  const handleRemoveVideo = (video) => {
    setVideos(videos.filter((v) => v !== video));
    setBookmarkedVideos(bookmarkedVideos.filter((v) => v !== video));
  };

  return (
    <Container>
      <h1 className="my-4">Video Library</h1>
      <Form onSubmit={handleAddVideo}>
        <Form.Group controlId="formVideoName">
          <Form.Label>Video Name</Form.Label>
          <Form.Control type="text" placeholder="Enter video name" name="name" required />
        </Form.Group>
        <Form.Group controlId="formVideoUrl" className="mt-3">
          <Form.Label>Video URL</Form.Label>
          <Form.Control type="url" placeholder="Enter video URL" name="url" />
        </Form.Group>
        <Form.Group controlId="formVideoFile" className="mt-3">
          <Form.Label>Or Upload Video File</Form.Label>
          <Form.Control type="file" name="file" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Add Video
        </Button>
      </Form>
      <Row className="mt-4">
        {videos.map((video, index) => (
          <Col md={4} key={index}>
            <VideoItem
              video={video}
              onPlay={() => handlePlayVideo(video)}
              onBookmark={() => handleBookmark(video)}
              onRemove={() => handleRemoveVideo(video)}
            />
          </Col>
        ))}
      </Row>
      {showPopup && (
        <VideoPopup
          video={currentVideo}
          onClose={() => setShowPopup(false)}
        />
      )}
      <Button
        variant="secondary"
        className="mt-4"
        onClick={() => setShowBookmarks(!showBookmarks)}
      >
        {showBookmarks ? 'Back to Library' : 'View Bookmarks'}
      </Button>
      {showBookmarks && <BookmarkPage videos={bookmarkedVideos} onPlay={handlePlayVideo} onRemove={handleRemoveVideo} onBookmark={handleBookmark} />}
    </Container>
  );
};

export default VideoLibrary;
