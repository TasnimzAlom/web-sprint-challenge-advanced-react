import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from ".@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i);
     userEvent.type(firstNameInput, "tulu");
    
    const lastNameInput = screen.getByLabelText(/last name/i);
     userEvent.type(lastNameInput, "bulu");

    const addressInput = screen.getByLabelText(/address/i);
     userEvent.type(addressInput, "516 e 80th st");

    const cityInput = screen.getByLabelText(/city/i);
    userEvent.type(cityInput, "new york");

    const stateInput = screen.getByLabelText(/state/i);
    userEvent.type(stateInput, "ny");

    const zipInput = screen.getByLabelText(/zip/i);
    userEvent.type(zipInput, "10075")

    const checkoutButton = screen.getByRole("button", { name: /checkout/i });
    userEvent.click(checkoutButton);
  
    const success = await screen.queryByText(/you have ordered some plants/i);
    expect(success).toBeInTheDocument();

  
  
});
