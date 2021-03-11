import { Questioning } from './Questioning'

describe('Questioning', () => {
  it('answers 42', () => {
    // Arrange
    const hiker = new Questioning()

    // Act
    const answer = hiker.getAnswer()

    // Assert
    expect(answer).toBe(42)
  })
})
