import { render, screen} from "@testing-library/react"
import Login from "../Components/Login"
test("on initial render, the login button is disabled", async() => {
    render(<Login />) 

    expect(await screen.findByRole('button', {name: /login/i})).toBeEnabled()
    
})