import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm heading", () => {
	render(<BookingForm availableTimes={[]} />);
	const headingElement = screen.getByText("Book Now");
	expect(headingElement).toBeInTheDocument();
});
