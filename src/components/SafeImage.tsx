import { useState } from 'react';
import { HeartPulse } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = '',
  priority = false,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F3F8FC] via-[#E5F2FA] to-[#D7ECEB] p-6 text-center text-[#17324D] ${className}`}
      >
        <HeartPulse className="mb-2 h-8 w-8 text-[#0877C9]" aria-hidden="true" />
        <p className="max-w-xs text-xs font-medium text-[#17324D]/75">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
