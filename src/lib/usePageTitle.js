import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = `RSP Enterprises – ${title}`;
  }, [title]);
}
