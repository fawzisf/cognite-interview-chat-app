import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render, fireEvent, screen, wait} from '@testing-library/react';
import {ChatPanel} from "./ChatPanel";
import {CurrentUser} from "../data/user";

test('Send a message when the form is filled and submited', async () => {
    const MESSAGE = "This is a message";


    render(<ChatPanel user={CurrentUser}/>);



    //fill the form
    fireEvent.change(screen.getByTestId("chat-input"), {
        target: {value: MESSAGE},
    });


    fireEvent.click(screen.getByText("Send Message"));
    // wait till it finish sending
    await wait(() => screen.getByTestId("chat-input").value === "");

    // check if the message is properly added
    expect(screen.getByText(MESSAGE)).toBeInTheDocument()


});