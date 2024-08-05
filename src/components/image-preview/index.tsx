import { Close, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { useState } from 'react';

interface ImagePreviewProps {
  open: boolean;
  src?: string[];
  handleClose: () => void;
}

export default function ({ open, src = [], handleClose }: ImagePreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, src.length - 1));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        className: 'rounded-2xl w-[30rem] h-fit p-6 lg:p-8',
      }}
    >
      <DialogTitle className="pt-0 px-0 font-clash font-semibold grid grid-cols-6 items-center">
        <span />
        <h3 className="text-center whitespace-nowrap col-span-4">Image Preview</h3>
        <IconButton
          className="bg-black w-7 h-7 justify-self-end"
          size="small"
          onClick={handleClose}
        >
          <Close className="p-1.5 text-white" />
        </IconButton>
      </DialogTitle>
      <DialogContent className="p-0">
        {src.length > 0 && (
          <img
            className="w-full rounded-lg"
            src={src[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
        )}
        <div className="flex flex-col space-y-6 justify-center items-center mt-4">
          <div className="flex items-center space-x-2">
            {Array.from(Array(src.length).keys()).map((i) => (
              <span
                key={`asset image indicator ${i}`}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === i ? 'bg-primary' : 'bg-gray-100/[.3]'
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
          <div className="flex space-x-3 justify-center items-center">
            <IconButton
              className="w-8 h-8 bg-primary"
              size="small"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
            >
              <KeyboardArrowLeft className="p-1 text-black" />
            </IconButton>
            <IconButton
              className="w-8 h-8 bg-primary"
              size="small"
              onClick={handleNext}
              disabled={currentIndex === src.length - 1}
              style={{ opacity: currentIndex === src.length - 1 ? 0.3 : 1 }}
            >
              <KeyboardArrowRight className="p-1 text-black" />
            </IconButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
