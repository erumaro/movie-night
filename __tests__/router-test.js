jest.unmock('../js/components/header')

import ReactTestRenderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import React from 'react'
import Header from '../js/components/header'

describe('Header', function(){
    it('blabla', function(){
        let header = ReactTestRenderer.create(
            <Header />
        );
    })
})