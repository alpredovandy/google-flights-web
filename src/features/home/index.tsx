import BgFlight from '@/assets/image/BgFlight';

import * as Styled from '../home.styles';
import Information from './sections/Information';

const HomeFeatures = () => {
    return (
        <Styled.SlidingContainer>
            <BgFlight style={{ maxWidth: '1248px' }} />
            <Information />
        </Styled.SlidingContainer>
    );
};

export default HomeFeatures;
