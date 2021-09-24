import React from 'react'
import Weather from './Weather'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

//TDD
test("Weather render", async () => {

    //AAA Arrange Act Assert

    const {findByRole} = render(<Weather temperature={10} ></Weather>)

    const Temp= await findByRole("heading")

    expect(Temp).toHaveTextContent("10")  
}) 