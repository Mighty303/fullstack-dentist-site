'use client';
import { useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import View360, { EquirectProjection, LoadingSpinner, ControlBar } from '@egjs/react-view360';

const VirtualTour = ({ src, initialYaw, initialPitch }) => {
  const view360Ref = useRef(null);

  useEffect(() => {
    if (view360Ref.current) {
      view360Ref.current.fov = 120; // Adjust this value as needed for a wider view
    }
  }, []);

  const projection = useMemo(() => new EquirectProjection({
    src,
  }), [src]);

  const loadingSpinner = useMemo(() => new LoadingSpinner(), []);
  const controlBar = useMemo(() => new ControlBar(), []);

  return (
    <div className="view360-container w-full h-full md:w-2/3 md:h-2/3 rounded-2xl border-4 border-black">
      <View360 
        ref={view360Ref}
        className="is-16by9" 
        projection={projection}
        initialYaw={initialYaw}
        initialPitch={initialPitch}
        plugins={[loadingSpinner, controlBar]}
      />
    </div>
  )
};

VirtualTour.propTypes = {
  src: PropTypes.string.isRequired,
  initialYaw: PropTypes.number,
  initialPitch: PropTypes.number,
};

VirtualTour.defaultProps = {
  initialYaw: 0,
  initialPitch: 0,
};

export default VirtualTour;
