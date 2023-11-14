import { screen } from '@testing-library/react'

import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('testes para o componente header', () => {
  test('deve renderizar corretamente o header', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
  test('deve renderizar com dois itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
              preco: 199.9,
              precoAntigo: 299.9,
              titulo: 'Hogwarts Legacy'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho')).toBeInTheDocument()
  })
})
