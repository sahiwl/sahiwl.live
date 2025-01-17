'use client'; // Mark this as a Client Component

import { allActions } from '@/lib/actions';
import { KBarProvider } from 'kbar';
import { useRouter } from 'next/navigation';

export function KBarProviderWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return <KBarProvider actions={allActions}>{children}
  </KBarProvider>;
}