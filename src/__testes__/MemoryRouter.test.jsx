import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../components/Form/LoginForm";
import { AuthContext } from "../contexts/AuthContext";

// Criamos um mock para interceptar a navegação do React Router
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockLogin = vi.fn();

describe("LoginForm navegação simulada", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockLogin.mockClear();
  });

  it("simula login e redirecionamento para /welcome", async () => {
    // Mock do fetch para simular retorno da API/db.json
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: "1", email: "nicole@example.com", password: "123456" },
          ]),
      })
    );

    render(
      <AuthContext.Provider value={{ login: mockLogin }}>
        <MemoryRouter initialEntries={["/"]}>
          <LoginForm />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Substituído "seuemail@gmail.com" por "admin@gmail.com" para bater com seu HTML
    const emailInput = screen.getByPlaceholderText("admin@gmail.com");
    const passwordInput = screen.getByPlaceholderText("••••••••");
    const button = screen.getByText(/Entrar/i);

    // Simula as ações do usuário
    fireEvent.change(emailInput, { target: { value: "nicole@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(button);

    // Garante que o useNavigate foi chamado corretamente
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/welcome");
    });
  });
});