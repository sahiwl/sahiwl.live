'use client'; // Mark this as a Client Component

import { allActions } from '@/lib/actions';
import { KBarProvider } from 'kbar';
import { useRouter } from 'next/navigation';

export function KBarProviderWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Define your actions
  // const actions = [
  //   {
  //     id: 'home',
  //     name: 'Home',
  //     shortcut: ['h'],
  //     keywords: 'go home',
  //     perform: () => router.push('/'),
  //   },
  //   {
  //     id: 'about',
  //     name: 'About',
  //     shortcut: ['a'],
  //     keywords: 'go about',
  //     perform: () => router.push('/about'),
  //   },
  //   {
  //     id: 'contact',
  //     name: 'Contact',
  //     shortcut: ['c'],
  //     keywords: 'go contact',
  //     perform: () => router.push('/contact'),
  //   },
  // ];

  return <KBarProvider actions={allActions}>{children}
  </KBarProvider>;
}