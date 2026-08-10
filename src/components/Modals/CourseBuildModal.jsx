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
//   { img: '/images/course-1.png', altText: 'Screenshot of an Everfi course page' },
//   { img: '/images/course-2.png', altText: 'Screenshot of an Everfi course page' },
//   { img: '/images/course-3.png', altText: 'Screenshot of an Everfi course page' },
//   { img: '/images/course-4.png', altText: 'Screenshot of an Everfi course page' },
//   { img: '/images/course-5.png', altText: 'Screenshot of an Everfi course page' },
//   { img: '/images/course-6.png', altText: 'Screenshot of an Everfi course page' },
// ];

function CourseBuildModal({ open, onClose }) {
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
          Course Building
        </Typography>
        <Typography id="modal-description">
          As an Engineer on the Course Building Team at Everfi, I helped build over 40 courses for students, financial institutions and business clients that focused 
          on the subjects of financial education, essential life skills education, and workplace compliance training. On these projects, I worked as both 
          a lead, where I was the primary contact responsible for all page/module builds, and as a collaborator, where I worked alongside other Engineers 
          to meet higher priority deadlines for larger projects. The workflow typically consisted of taking design wireframes from the Product Team and building courses page by page in alignment with client 
          visions of structure, content, and styling, while also ensuring desired functionality of components and proper pathing throughout the course. These builds were then passed on 
          to the Quality Engineering Team for final checks before release. This all contributed to building a library of over 100 courses that would go on to reach millions of end users. A few examples of 
          these course builds can be found here -
          <a href="https://demofi.everfi.com/" target="_blank" className='demofi-link'> https://demofi.everfi.com/</a>
        </Typography>
      </Box>
    </Modal>
  );
}

export default CourseBuildModal;
