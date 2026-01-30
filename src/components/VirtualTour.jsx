'use client';
import { useMemo, useEffect, useRef, useState, Component } from 'react';
import PropTypes from 'prop-types';
import View360, { EquirectProjection, LoadingSpinner, ControlBar } from '@egjs/react-view360';

function checkWebGLSupport() {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

class WebGLErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    if (error?.message?.includes('WebGL') || error?.code === 'WEBGL_NOT_SUPPORTED' || error?.name === 'View360Error') {
      return { hasError: true };
    }
    throw error;
  }

  componentDidCatch(error) {
    if (error?.message?.includes('WebGL') || error?.code === 'WEBGL_NOT_SUPPORTED') {
      this.setState({ hasError: true });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const VirtualTour = ({ src, initialYaw, initialPitch }) => {
  const [webglUnsupported, setWebglUnsupported] = useState(false);

  useEffect(() => {
    if (!checkWebGLSupport()) {
      setWebglUnsupported(true);
      return;
    }
    const handler = (e) => {
      const err = e?.reason || e?.error || e;
      if (err?.message?.includes('WebGL') || err?.code === 'WEBGL_NOT_SUPPORTED' || err?.name === 'View360Error') {
        setWebglUnsupported(true);
      }
    };
    window.addEventListener('unhandledrejection', handler);
    return () => window.removeEventListener('unhandledrejection', handler);
  }, []);
  const view360Ref = useRef(null);

  useEffect(() => {
    if (view360Ref.current) {
      try {
        view360Ref.current.fov = 120;
      } catch {
        // Ignore
      }
    }
  }, []);

  const projection = useMemo(() => new EquirectProjection({ src }), [src]);
  const loadingSpinner = useMemo(() => new LoadingSpinner(), []);
  const controlBar = useMemo(() => new ControlBar(), []);

  const fallback = (
    <div className="relative w-full max-w-4xl mx-auto min-w-0 rounded-2xl border-4 border-black overflow-hidden">
      <img src={src} alt="Clinic virtual tour" className="w-full h-auto object-cover" />
      <p className="text-center py-4 text-gray-600 text-sm">
        Your browser does not support the interactive 360° viewer. Viewing static image.
      </p>
    </div>
  );

  if (webglUnsupported) return fallback;

  return (
    <WebGLErrorBoundary fallback={fallback}>
      <div className="relative w-full max-w-4xl mx-auto min-w-0 rounded-2xl border-4 border-black overflow-hidden">
        <View360
          ref={view360Ref}
          className="is-16by9"
          projection={projection}
          initialYaw={initialYaw}
          initialPitch={initialPitch}
          plugins={[loadingSpinner, controlBar]}
        />
      </div>
    </WebGLErrorBoundary>
  );
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
