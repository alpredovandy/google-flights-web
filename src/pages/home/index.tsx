import HomeFeatures from '@/features/home';
import { FlightProvider } from '@/features/home/store/provider';

const HomePage = () => {
    return (
        <FlightProvider>
            <HomeFeatures />
        </FlightProvider>
    );
};

export default HomePage;
