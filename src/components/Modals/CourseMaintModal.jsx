import React from 'react';
import { Modal, Box, Typography, ImageList, ImageListItem, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// styling for modal content <Box />
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'clamp(250px, 60vw, 800px)',
  maxHeight: '85vh',
  overflowY: 'auto',
  bgcolor: '#fefefe',
  border: '2px solid #252627',
  borderRadius: '0',
  boxShadow: 24,
  p: 4,
};

// const imageData = [
//   { img: '/images/maintenance-1.png', altText: 'Screenshot of an Everfi course page with Google Chrome Developer Tools open' },
// ];

function CourseMaintModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 4,
            top: 4,
            color: '#252627',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="modal-title" variant="h6" component="h2" className="sans-h2">
          Course Maintenance
        </Typography>
        <Typography id="modal-description">
          As an Engineer on the Course Maintenance Team at Everfi, I managed code and fixed bugs within the SDK and component 
          libraries that contributed to course builds. The work was in close collaboration with the Quality Engineering Team, 
          taking bugs that they found and reported, and deploying fixes for them within component releases. 
          Our work responsibilities also included API maintenance and resolving issues with Webhooks and RESTful APIs for user and course data. 
          As part of course and component release cycles, bug fixes were added and deployed depending on priority, sometimes warranting a hotfix or patched release. 
          Our work also included creating and implementing component unit tests to further shift the development cycle left, and ensure consistent and desired 
          functionality amongst maintenance and code changes. 
        </Typography>
      </Box>
    </Modal>
  );
}

export default CourseMaintModal;
