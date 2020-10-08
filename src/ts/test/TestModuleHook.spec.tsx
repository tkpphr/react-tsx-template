import React from 'react';
import { screen,render,fireEvent } from '@testing-library/react';
import TestModuleHook from "main/TestModuleHook";

describe('TestModuleHook', () => {
    test('Props Test',() => {
        render(<TestModuleHook message="Hello React Hook!" />);
        expect(screen.getByText("Hello React Hook!")).toBeInTheDocument;
    });
    test('State Test', () => {
        render(<TestModuleHook message="Hello React Hook!" />);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByText("1")).toBeInTheDocument;
    });
});