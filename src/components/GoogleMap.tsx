'use client';

import { useEffect, useRef, useState } from 'react';
import { businessInfo } from '@/data/business';

interface GoogleMapProps {
  className?: string;
  height?: string;
  zoom?: number;
  showInfoWindow?: boolean;
}

// Default coordinates for St Johns, FL (business location)
const DEFAULT_CENTER = {
  lat: 30.0595,
  lng: -81.5593,
};

export default function GoogleMap({ 
  className = '', 
  height = '400px', 
  zoom = 13,
  showInfoWindow = true 
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    // Check if Google Maps is available
    if (!window.google) {
      loadGoogleMaps();
      return;
    }

    initializeMap();
  }, [loadGoogleMaps, initializeMap]);

  const loadGoogleMaps = useCallback(() => {
    // Check if API key is available
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      setMapError('Google Maps API key not configured');
      return;
    }

    // Create script element to load Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places`;
    script.async = true;
    script.defer = true;

    // Define callback function
    window.initMap = () => {
      setIsMapLoaded(true);
      initializeMap();
    };

    script.onerror = () => {
      setMapError('Failed to load Google Maps');
    };

    document.head.appendChild(script);
  }, []);

  const initializeMap = useCallback(() => {
    if (!mapRef.current || !window.google) return;

    try {
      // Create map
      const map = new window.google.maps.Map(mapRef.current, {
        center: DEFAULT_CENTER,
        zoom: zoom,
        styles: [
          // Custom map styling for professional appearance
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ffffff' }, { lightness: 17 }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }],
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 18 }],
          },
          {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 16 }],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 21 }],
          },
        ],
      });

      // Create marker
      const marker = new window.google.maps.Marker({
        position: DEFAULT_CENTER,
        map: map,
        title: businessInfo.name,
        icon: {
          url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%232563eb'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
          scaledSize: new window.google.maps.Size(32, 32),
          anchor: new window.google.maps.Point(16, 32),
        },
      });

      // Create info window if requested
      if (showInfoWindow) {
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 250px;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">${businessInfo.name}</h3>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">${businessInfo.address}</p>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                <strong>Phone:</strong> <a href="tel:${businessInfo.phone}" style="color: #2563eb; text-decoration: none;">${businessInfo.phone}</a>
              </p>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                <strong>Hours:</strong> ${businessInfo.hours}
              </p>
              <a href="https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none; font-size: 14px;">Get Directions →</a>
            </div>
          `,
        });

        // Show info window by default
        infoWindow.open(map, marker);

        // Toggle info window on marker click
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      }

    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError('Error loading map');
    }
  }, []);

  // Fallback component when map can't load
  const MapFallback = () => (
    <div 
      className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
      style={{ height }}
    >
      <div className="text-center p-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{businessInfo.name}</h3>
        <p className="text-gray-600 mb-3">{businessInfo.address}</p>
        <a 
          href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          View on Google Maps
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        {mapError && (
          <p className="text-xs text-gray-500 mt-3">
            {mapError === 'Google Maps API key not configured' 
              ? 'Interactive map will be available once Google Maps is configured.' 
              : 'Unable to load interactive map.'}
          </p>
        )}
      </div>
    </div>
  );

  // Show fallback if there's an error or map hasn't loaded
  if (mapError || !isMapLoaded) {
    return <MapFallback />;
  }

  return (
    <div className={className}>
      <div 
        ref={mapRef}
        style={{ height, width: '100%' }}
        className="rounded-lg shadow-sm"
      />
    </div>
  );
}

// Extend Window interface to include google maps
declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement | null, options?: unknown) => unknown;
        Marker: new (options?: unknown) => unknown;
        InfoWindow: new (options?: unknown) => unknown;
        LatLng: new (lat: number, lng: number) => unknown;
      };
    };
    initMap: () => void;
  }
}
