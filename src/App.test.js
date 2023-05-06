import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica se os elementos da tabela estão sendo renderizados', async () => {
  const fakeData = [
    {
      song_id: 1,
      title: "Música Exemplo",
      artist: "Artista Exemplo",
      genre: "Gênero Exemplo",
    },
  ];

  jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeData),
      })
  );

  render(<App />);

  const songIdElement = await screen.findByText("1");
  const titleElement = screen.getByText(/Música Exemplo/i);
  const artistElement = screen.getByText(/Artista Exemplo/i);
  const genreElement = screen.getByText(/Gênero Exemplo/i);

  expect(songIdElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
  expect(genreElement).toBeInTheDocument();

  global.fetch.mockRestore();
});
