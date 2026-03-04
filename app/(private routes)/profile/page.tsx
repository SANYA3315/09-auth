import { Metadata } from 'next';
import ProfilePageContent from './ProfilePage';

export const metadata: Metadata = {
  title: 'Profile | NoteHub',
  description: 'View and edit your user profile on NoteHub',
};

export default function Profile() {
  return (
    <ProfilePageContent />
  );
}