import Select from '@mui/material/Select';

import * as Styled from './navbar.styles';
import { NavbarMenuProps } from './types';

const NavbarMenu = ({ dataKey, options, state, onChange }: NavbarMenuProps) => {
    return (
        <Styled.NavbarMenu>
            <Select
                name={dataKey}
                value={state[dataKey]}
                renderValue={(value) => options.find((el) => el.key === value)?.selected || ''}
                onChange={onChange}
                inputProps={{ 'aria-label': `${dataKey}` }}
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
                {options.map((el, index) =>
                    el.option(state[dataKey] === el.key, index, {
                        sx: { paddingRight: '24px', height: '56px' },
                    })
                )}
            </Select>
        </Styled.NavbarMenu>
    );
};

export default NavbarMenu;
