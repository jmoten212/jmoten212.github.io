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
//   { img: '/images/qe-1.png', altText: 'Screenshot of a Cypress test file in VS Code with a generate-test terminal command' },
//   { img: '/images/qe-2.png', altText: 'Screenshot of an Applitools batch of results from a Cypress automation run from an Everfi course'  },
//   { img: '/images/qe-3.png', altText: 'Screenshot of a bash terminal displaying test results from a round of regression testing against Everfi courses'  },
// ];

function QualityEngModal({ open, onClose }) {
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
          Quality Engineering
        </Typography>
        <Typography id="modal-description">
          As a Quality Engineer at Everfi, I tested course, component and SDK code primarily through automation. 
          I worked as part of the Course Automation Team, which was responsible for creating and running automated tests that served as the main aspect of integration and regression testing. 
          For these automated tests we mainly used Cypress, creating E2E suites that simulated user flow through courses as part of component releases. 
          We also used tools like Circle CI and GitHub Actions to run these tests for CI/CD and Applitools for visual assertion checks. In order to 
          streamline the process of creating the Cypress test files, our team collaborated on a project to create a CLI tool to automate generation of Cypress test files from course structures. 
          The tool took a reusable set of Cypress tests that were created to replicate component structures and placed them in a test file, mirroring how they appeared in the course by reading and 
          mapping through course structures. This work greatly reduced the amount of time and lift needed to test courses for releases 
          and had a significant impact on overall project delivery times.
        </Typography>
      </Box>
    </Modal>
  );
}

export default QualityEngModal;
