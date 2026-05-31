import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../components/Form/LoginForm";
import { AuthContext } from "../contexts/AuthContext";

// Criamos um mock do useNavigate para interceptar a navegação do React Router
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate, // Toda vez que o componente chamar useNavigate, usará nosso mock
  };
});

const mockLogin = vi.fn();

describe("LoginForm - Fluxo de Autenticação", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockLogin.mockClear();
  });

  it("redireciona para /welcome usando o useNavigate após login bem-sucedido", async () => {
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

    // ✅ CORRIGIDO: Alterado de "seuemail@gmail.com" para "admin@gmail.com"
    const emailInput = screen.getByPlaceholderText("admin@gmail.com");
    const passwordInput = screen.getByPlaceholderText("••••••••");
    const button = screen.getByText(/Entrar/i);

    // Simula digitação e clique
    fireEvent.change(emailInput, { target: { value: "nicole@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(button);

    // Valida o comportamento real do React Router
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/welcome");
    });
  });
});