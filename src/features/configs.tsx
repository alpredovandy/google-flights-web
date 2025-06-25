import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EastIcon from '@mui/icons-material/East';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';

import { NavbarListProps } from '@/components/NavbarMenu/types';

import * as Styled from './home.styles';

const optionsTrip: NavbarListProps[] = [
    {
        key: 'roundTrip',
        selected: (
            <Styled.SelectedContainer>
                <Styled.SelectedIconContainer>
                    <SyncAltIcon />
                </Styled.SelectedIconContainer>
                <Styled.SelectedText>Round trip</Styled.SelectedText>
            </Styled.SelectedContainer>
        ),
        option: (isSelected: boolean, index: number, additionalProps: MenuItemProps) => (
            <MenuItem value="roundTrip" key={index} {...additionalProps}>
                <Styled.DropdownIconContainer>{isSelected ? <CheckCircleIcon /> : ''}</Styled.DropdownIconContainer>
                <Styled.OptionText>Round trip</Styled.OptionText>
            </MenuItem>
        ),
    },
    {
        key: 'oneWay',
        selected: (
            <Styled.SelectedContainer>
                <Styled.SelectedIconContainer>
                    <EastIcon />
                </Styled.SelectedIconContainer>
                <Styled.SelectedText>One way</Styled.SelectedText>
            </Styled.SelectedContainer>
        ),
        option: (isSelected: boolean, index: number, additionalProps: MenuItemProps) => (
            <MenuItem value="oneWay" key={index} {...additionalProps}>
                <Styled.DropdownIconContainer>{isSelected ? <CheckCircleIcon /> : ''}</Styled.DropdownIconContainer>
                <Styled.OptionText>One-way</Styled.OptionText>
            </MenuItem>
        ),
    },
];

const optionsClass = [
    {
        key: 'economy',
        selected: (
            <Styled.SelectedContainer>
                <Styled.SelectedText>Economy</Styled.SelectedText>
            </Styled.SelectedContainer>
        ),
        option: (isSelected: boolean, index: number, additionalProps: MenuItemProps) => (
            <MenuItem value="economy" key={index} {...additionalProps}>
                <Styled.DropdownIconContainer>{isSelected ? <CheckCircleIcon /> : ''}</Styled.DropdownIconContainer>
                <Styled.OptionText>Economy</Styled.OptionText>
            </MenuItem>
        ),
    },
    {
        key: 'premium_economy',
        selected: (
            <Styled.SelectedContainer>
                <Styled.SelectedText>Premium Economy</Styled.SelectedText>
            </Styled.SelectedContainer>
        ),
        option: (isSelected: boolean, index: number, additionalProps: MenuItemProps) => (
            <MenuItem value="premium_economy" key={index} {...additionalProps}>
                <Styled.DropdownIconContainer>{isSelected ? <CheckCircleIcon /> : ''}</Styled.DropdownIconContainer>
                <Styled.OptionText>Premium Economy</Styled.OptionText>
            </MenuItem>
        ),
    },
    {
        key: 'business',
        selected: (
            <Styled.SelectedContainer>
                <Styled.SelectedText>Business</Styled.SelectedText>
            </Styled.SelectedContainer>
        ),
        option: (isSelected: boolean, index: number, additionalProps: MenuItemProps) => (
            <MenuItem value="business" key={index} {...additionalProps}>
                <Styled.DropdownIconContainer>{isSelected ? <CheckCircleIcon /> : ''}</Styled.DropdownIconContainer>
                <Styled.OptionText>Business</Styled.OptionText>
            </MenuItem>
        ),
    },
    {
        key: 'first',
        selected: (
            <Styled.SelectedContainer>
                <Styled.SelectedText>First</Styled.SelectedText>
            </Styled.SelectedContainer>
        ),
        option: (isSelected: boolean, index: number, additionalProps: MenuItemProps) => (
            <MenuItem value="first" key={index} {...additionalProps}>
                <Styled.DropdownIconContainer>{isSelected ? <CheckCircleIcon /> : ''}</Styled.DropdownIconContainer>
                <Styled.OptionText>First</Styled.OptionText>
            </MenuItem>
        ),
    },
];

export { optionsTrip, optionsClass };
