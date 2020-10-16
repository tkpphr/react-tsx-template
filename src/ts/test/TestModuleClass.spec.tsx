import React from 'react';
import { screen,render,fireEvent } from '@testing-library/react';
import TestModuleClass from "main/TestModuleClass";

describe('TestModuleHook', () => {
    test('Props Test',() => {
        render(<TestModuleClass message="Hello React Class!" />);
        expect(screen.getByText("Hello React Class!")).toBeInTheDocument;
    });
    test('State Test', () => {
        render(<TestModuleClass message="Hello React Class!" />);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByText("1")).toBeInTheDocument;
    });
});