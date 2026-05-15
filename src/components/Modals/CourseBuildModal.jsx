import React, { useState } from 'react';
import { Modal, Box, Typography, ButtonBase, ImageList, ImageListItem, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// styling for modal content <Box />
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '60vw',
  maxHeight: '85vh',
  overflowY: 'auto',
  bgcolor: '#f7fcfd',
  border: '2px solid #541076',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const itemData = [
  { img: '/images/course-1.png', altText: 'Screenshot of an Everfi course page' },
  { img: '/images/course-2.png', altText: 'Screenshot of an Everfi course page' },
  { img: '/images/course-3.png', altText: 'Screenshot of an Everfi course page' },
  { img: '/images/course-4.png', altText: 'Screenshot of an Everfi course page' },
  { img: '/images/course-5.png', altText: 'Screenshot of an Everfi course page' },
  { img: '/images/course-6.png', altText: 'Screenshot of an Everfi course page' },
];

function CourseBuildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ButtonBase onClick={handleOpen} variant="contained" className="modalButton">Course Building</ButtonBase>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 4,
              top: 4,
              color: '#541076',
            }}
          >
            <CloseIcon />
          </IconButton>
          <ImageList sx={{ width: '60vw', height: 'auto' }} cols={3} >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  // srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}`}
                  alt={item.altText}
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Typography id="modal-title" variant="h6" component="h2" className="sans-h2">
            Course Building
          </Typography>
          <Typography id="modal-description">
            As an Engineer on the Course Building Team at Everfi, I helped build over 40 courses for students, financial institutions and business clients that focused 
            on the subjects of financial education, essential life skills education, and workplace compliance training. On these projects, I worked as both 
            a lead where I was the primary contact responsible for all page/module builds, and as a collaborator where I worked alongside other Engineers 
            to meet higher priority deadlines, usually for larger projects. The workflow typically consisted of taking design wireframes from the Product team and building pages/modules in alignment with client 
            visions of structure, content and styling, while also ensuring desired functionality of components and proper pathing throughout the course. These builds were then passed on 
            to the Quality Engineering team for final checks before release. This all contributed to building a library of over 100 courses that would go on to reach millions of end users.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default CourseBuildModal;
