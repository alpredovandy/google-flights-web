import React from 'react';

import { MenuItemProps } from '@mui/material';

export interface NavbarListProps {
    key: string;
    selected: React.ReactNode;
    option: (isSelected: boolean, index: number, additionalProps: MenuItemProps) => React.ReactNode;
}

export interface NavbarMenuProps {
    dataKey: string;
    options: NavbarListProps[];
    state: Record<string, any>;
    onChange: (data: Record<string, any>) => void;
}
