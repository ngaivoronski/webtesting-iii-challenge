// Test away!

import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";


test('Display renders correctly',()=>{
    expect(render(<Display/>)).toMatchSnapshot();
})

test('defaults to unlocked and open',()=>{
    const { getByTestId } = render(<Display/>);
    const unlocked = getByTestId(/locked-div/i);
    const open = getByTestId(/closed-div/i);
    expect(unlocked.textContent).toBe('Unlocked');
    expect(open.textContent).toBe('Open');
})

test("displays 'Closed' if the closed prop is true",()=>{
    const { getByTestId } = render(<Display closed={true}/>);
    const gate = getByTestId(/closed-div/i);
    expect(gate.textContent).toBe('Closed');
})

test("displays 'Open' if the closed prop is not true",()=>{
    const { getByTestId } = render(<Display closed={false}/>);
    const gate = getByTestId(/closed-div/i);
    expect(gate.textContent).toBe('Open');
})

test("displays 'Locked' if the locked prop is true",()=>{
    const { getByTestId } = render(<Display locked={true}/>);
    const gate = getByTestId(/locked-div/i);
    expect(gate.textContent).toBe('Locked');
})

test("displays 'Unlocked' if the locked prop is not true",()=>{
    const { getByTestId } = render(<Display locked={false}/>);
    const gate = getByTestId(/locked-div/i);
    expect(gate.textContent).toBe('Unlocked');
})

test("when locked use the red-led class",()=>{
    const { getByTestId } = render(<Display locked={true}/>);
    const gate = getByTestId(/locked-div/i);
    expect(gate.className).toBe('led red-led');
})

test("when unlocked use the green-led class",()=>{
    const { getByTestId } = render(<Display locked={false}/>);
    const gate = getByTestId(/locked-div/i);
    expect(gate.className).toBe('led green-led');
})

test("when closed use the red-led class",()=>{
    const { getByTestId } = render(<Display closed={true}/>);
    const gate = getByTestId(/closed-div/i);
    expect(gate.className).toBe('led red-led');
})

test("when open use the green-led class",()=>{
    const { getByTestId } = render(<Display closed={false}/>);
    const gate = getByTestId(/closed-div/i);
    expect(gate.className).toBe('led green-led');
})