import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroSection from '@/components/Page/HeroSection';
import Features from '@/components/Page/Features';
import Testimonials from '@/components/Page/Testimonials';
import Pricing from '@/components/Page/Pricing';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<HeroSection />
			<Features />
			<Testimonials />
			<Pricing />
		</>
	);
}
