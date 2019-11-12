// Test away!

import React from "react";
import Controls from "./Controls";
import { render, fireEvent } from "@testing-library/react";


test('Controls render correctly',()=>{
    expect(render(<Controls/>)).toMatchSnapshot();
})

test('cannot be open if locked',()=>{
    const toggleClosed = jest.fn();
    const { getByText } = render(
        <Controls locked={true} closed={true}  toggleClosed={toggleClosed}/>
    );
    const openGate = getByText(/Open Gate/i);
    fireEvent.click(openGate);
    expect(toggleClosed).toHaveBeenCalledTimes(0);
})

test('cannot be closed if locked',()=>{
    const toggleClosed = jest.fn();
    const { getByText } = render(
        <Controls locked={true} closed={false}  toggleClosed={toggleClosed}/>
    );
    const closeGate = getByText(/Close Gate/i);
    fireEvent.click(closeGate);
    expect(toggleClosed).toHaveBeenCalledTimes(0);
})

test('provide buttons to toggle the closed and locked states.', () => {
    const { getByTestId } = render(<Controls />);
    getByTestId(/lock-button/i);
    getByTestId(/close-button/i);
});

test("closed button's text changes to reflect if it's closed", () => {
    const { getByTestId } = render(<Controls closed={true} />);
    const closeButton = getByTestId(/close-button/i);
    expect(closeButton.textContent).toBe('Open Gate');
});

test("closed button's text changes to reflect if it's open", () => {
    const { getByTestId } = render(<Controls closed={false} />);
    const closeButton = getByTestId(/close-button/i);
    expect(closeButton.textContent).toBe('Close Gate');
});

test("lock button's text changes to reflect if it's locked", () => {
    const { getByTestId } = render(<Controls locked={true} />);
    const lockButton = getByTestId(/lock-button/i);
    expect(lockButton.textContent).toBe('Unlock Gate');
});

test("lock button's text changes to reflect if it's unlocked", () => {
    const { getByTestId } = render(<Controls locked={false} />);
    const lockButton = getByTestId(/lock-button/i);
    expect(lockButton.textContent).toBe('Lock Gate');
});

test("the closed toggle button is disabled if the gate is locked", () => {
    const { getByTestId } = render(<Controls locked={true} />);
    const closeButton = getByTestId(/close-button/i);
    expect(closeButton.disabled).toBe(true);
});

test("the locked toggle button is disabled if the gate is open", () => {
    const { getByTestId } = render(<Controls closed={false} />);
    const lockButton = getByTestId(/lock-button/i);
    expect(lockButton.disabled).toBe(true);
});
