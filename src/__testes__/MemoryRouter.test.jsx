import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../components/Form/LoginForm";
import { AuthContext } from "../contexts/AuthContext";

const mockLogin = vi.fn();

describe("LoginForm navegação simulada", () => {
  it("simula login e redirecionamento para /welcome", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: "1", email: "nicole@example.com", password: "123456" },
          ]),
      })
    );

    delete window.location;
    window.location = { href: "" };

    render(
      <AuthContext.Provider value={{ login: mockLogin }}>
        <MemoryRouter initialEntries={["/login"]}>
          <LoginForm />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const emailInput = screen.getByPlaceholderText("seuemail@gmail.com");
    const passwordInput = screen.getByPlaceholderText("••••••••");
    const button = screen.getByText(/Entrar/i);

    fireEvent.change(emailInput, { target: { value: "nicole@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(window.location.href).toBe("/welcome");
    });
  });
});
