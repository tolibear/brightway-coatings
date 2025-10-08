import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  /**
   * Description of what the image will show
   */
  alt: string;
  /**
   * Width of the placeholder
   */
  width?: string | number;
  /**
   * Height of the placeholder
   */
  height?: string | number;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Aspect ratio for responsive sizing
   */
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
  /**
   * Background color theme
   */
  variant?: 'default' | 'blue' | 'gray';
  /**
   * Show the alt text as a caption below
   */
  showCaption?: boolean;
}

/**
 * ImagePlaceholder component for indicating where real images will be placed
 * 
 * @param props - ImagePlaceholderProps
 * @returns JSX.Element
 */
export default function ImagePlaceholder({
  alt,
  width,
  height,
  className,
  aspectRatio,
  variant = 'default',
  showCaption = false,
}: ImagePlaceholderProps) {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  };

  const variantClasses = {
    default: 'bg-gray-100 border-gray-200 text-gray-500',
    blue: 'bg-primary/5 border-blue-200 text-blue-500',
    gray: 'bg-gray-50 border-gray-300 text-gray-400',
  };

  const containerClasses = cn(
    'flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6',
    aspectRatio && aspectRatioClasses[aspectRatio],
    variantClasses[variant],
    className
  );

  const style: React.CSSProperties = {
    ...(width && { width }),
    ...(height && { height }),
  };

  return (
    <div className="space-y-2">
      <div className={containerClasses} style={style}>
        <ImageIcon className="w-8 h-8 mb-2" />
        <span className="text-sm font-medium text-center">
          [Image: {alt}]
        </span>
      </div>
      {showCaption && (
        <p className="text-xs text-gray-600 text-center italic">
          {alt}
        </p>
      )}
    </div>
  );
}
