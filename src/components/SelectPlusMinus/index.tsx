import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import RemoveIcon from '@mui/icons-material/Remove';
import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

import { clamp } from '@/helpers/time';

import * as Styled from './select.styles';
import { PlusMinusSelectProps } from './types';

const PlusMinusSelect = ({ dataKey, options, state, onChange }: PlusMinusSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const updateValue = (increment: number) => {
        onChange({
            form: {
                ...state,
                [dataKey]: clamp(state[dataKey] + increment, 1, 9),
            },
        });
    };

    const incrementMenu = (
        <MenuItem
            value="incrementMenu"
            disableTouchRipple
            onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
            }}
            sx={{
                '&&': { backgroundColor: ['transparent !important'] },
                '&&:focus': { backgroundColor: ['transparent !important'] },
                '&&:hover': { backgroundColor: ['transparent !important'] },
                '&&:selected': { backgroundColor: ['transparent !important'] },
            }}
        >
            <Styled.CounterRowContainer>
                <Styled.PersonCountText>Adults</Styled.PersonCountText>
                <Styled.IncrementBoxContainer>
                    <Styled.IncrementBox $disabled={false} onClick={() => updateValue(-1)}>
                        <RemoveIcon />
                    </Styled.IncrementBox>
                </Styled.IncrementBoxContainer>
                <Styled.ValueContainer>{options[dataKey]}</Styled.ValueContainer>
                <Styled.IncrementBoxContainer>
                    <Styled.IncrementBox $disabled={false} onClick={() => updateValue(+1)}>
                        <AddIcon />
                    </Styled.IncrementBox>
                </Styled.IncrementBoxContainer>
            </Styled.CounterRowContainer>
        </MenuItem>
    );

    const displayMenu = (
        <Styled.SelectedContainer>
            <Styled.SelectedIconContainer>
                <PersonIcon />
            </Styled.SelectedIconContainer>
            <Styled.SelectedText>{options[dataKey]}</Styled.SelectedText>
        </Styled.SelectedContainer>
    );

    return (
        <Styled.RootContainer>
            <Select
                open={isOpen}
                onClick={() => setIsOpen((current) => !current)}
                value="incrementMenu"
                renderValue={() => displayMenu}
                inputProps={{ 'aria-label': 'Increment passangers' }}
                variant="standard"
                sx={{
                    minWidth: '56px',
                }}
                disableUnderline
                MenuProps={{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                }}
            >
                {incrementMenu}
            </Select>
        </Styled.RootContainer>
    );
};

export default PlusMinusSelect;
