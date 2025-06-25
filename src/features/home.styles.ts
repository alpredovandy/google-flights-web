import styled from 'styled-components';

const OptionText = styled.span``;

const PersonCountText = styled.span`
    color: #6e7277;
`;

const SelectedContainer = styled.div`
    display: flex;
`;

const SelectedIconContainer = styled.div`
    width: 20px;
    height: 20px;
    padding: 0 8px;
    fill: #6e7277;
`;

const SelectedText = styled.span`
    color: #3c3f42;
    font-size: 0.875rem;
    padding-right: 6px;
    padding-left: 8px;
`;
const DropdownIconContainer = styled.div`
    width: 20px;
    height: 20px;
    padding-right: 1.6rem;
    fill: #5f6368;
`;

const Title = styled.div`
    text-align: center;
    font-size: xxx-large;
    font-weight: 400;
    margin-bottom: 36px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    width: 100%;
    align-items: center;
    flex: 1;
    transition: all 0.5s;
    padding: 1rem;
`;

const SlidingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: sticky;
    top: 0;
`;

export {
    OptionText,
    SelectedContainer,
    SelectedIconContainer,
    SelectedText,
    DropdownIconContainer,
    PersonCountText,
    Title,
    Content,
    SlidingContainer,
};
