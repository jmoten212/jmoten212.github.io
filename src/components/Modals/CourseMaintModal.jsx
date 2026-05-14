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
  { img: '/images/maintenance-1.png', altText: 'Screenshot of an Everfi course page with Google Chrome Developer Tools open' },
];

function CourseMaintModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ButtonBase onClick={handleOpen} variant="contained" className="modalButton">Course Maintenance</ButtonBase>
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
          <ImageList sx={{ width: '60vw', height: 425 }} cols={1} rowHeight={225}>
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
            Course Maintenance
          </Typography>
          <Typography id="modal-description">
            As an Engineer on the Course Maintenance Team at Everfi, I managed code and fixed bugs within SDK and component 
            libraries that contributed to course builds. The work was mianly in collaboration with the Quality Engineering team, 
            taking bugs that they found and reported and deploying fixes for them within component releases. 
            This work also included API maintenance and resolving issues with Content-Partner and RESTful APIs for user and course data. 
            Bug fixes were added to course and component releases, and depending on the priority of the fix would sometimes warrant a hotfix or patched release. 
            Our work also included implementing component unit tests to further shift the development cycle left and ensure consistent and desired 
            functionality amongst maintenance and code changes. 
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default CourseMaintModal;
