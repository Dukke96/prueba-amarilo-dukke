import Image from 'next/image';
import VideoBackground from './components/VideoBackground';
import NavbarTopBarPreview from './components/NavBar';
import DropdownsBar from './components/DropdownsBar';
import Navbar from './components/NavBar';
import ProjectsTabs from './components/ProjectsTabs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="mx-auto container">
        <VideoBackground />
        <Navbar />
        <DropdownsBar />
        <div className='flex mx-auto justify-center'>
          <ProjectsTabs />
        </div>
      </div>
    </main>
  );
}
