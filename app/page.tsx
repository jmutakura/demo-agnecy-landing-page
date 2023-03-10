import Image from 'next/image';
import HeroSection from '@/components/Page/HeroSection';
import Features from '@/components/Page/Features';
import Testimonials from '@/components/Page/Testimonials';
import Pricing from '@/components/Page/Pricing';
import Statistics from '@/components/Statistics';

export default function Home() {
	return (
		<>
			<HeroSection />
			<Features />
			<Testimonials />
			<Pricing />
			<Statistics />
		</>
	);
}
