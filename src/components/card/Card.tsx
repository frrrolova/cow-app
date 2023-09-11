import { useState } from 'react'

export function Card() {
  const [cardValue, setCardValue] = useState<string>('')

  return (
    <>
      <form>
        <input
          type="text"
          maxLength={16}
          minLength={16}
          value={cardValue}
          placeholder="Card Number"
          onChange={(e) => {
            const re = /^[0-9\b]+$/

            // if value is not blank, then test the regex
            if (e.target.value === '' || re.test(e.target.value)) {
              setCardValue(e.target.value)
            }
          }}
        />
        <input type="text" placeholder="Expiration Date" />
      </form>
    </>
  )
}
