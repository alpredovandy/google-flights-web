export interface PlusMinusSelectProps {
    dataKey: string;
    options: Record<string, any>;
    state: Record<string, any>;
    onChange: (data: Record<string, any>) => void;
}

export interface IncrementBoxProps {
    $disabled?: boolean;
}
